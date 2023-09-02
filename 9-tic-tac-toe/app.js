const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningModal = document.querySelector('.winning-message-modal')
const winningMsg = document.querySelector('.winning-message')
const restartBtn = document.getElementById('restart-button')
const menuModal = document.querySelector('.menu-modal')
const menuBtn = document.querySelector('.menu-btn')
const pvpElement = document.querySelector('.pvp')
const pveElement = document.querySelector('.pve')
let mode
let currentPlayer

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

menu()

winningModal.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault()
  }
})
menuModal.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault()
  }
})
restartBtn.addEventListener('click', startGame)

function menu() {
  menuModal.showModal()
  pvpElement.addEventListener('click', () => {
    mode = 'pvp'
    startGame()
    menuModal.close()
  })

  pveElement.addEventListener('click', () => {
    mode = 'pve'
    startGame()
    menuModal.close()
  })
}

function handleClick(e) {
  const cell = e.target;

  if (mode === 'pvp' || (mode === 'pve' && currentPlayer === X_CLASS)) {
    if (isValidMove(cell)) {
      placeMark(cell);
      if (checkWin(currentPlayer)) {
        endGame(false);
      } else if (isDraw()) {
        endGame(true);
      } else {
        currentPlayer = currentPlayer === X_CLASS ? CIRCLE_CLASS : X_CLASS;
        setBoardHoverClass();

        if (mode === 'pve' && currentPlayer === CIRCLE_CLASS) {
          makeAIMove();
        }
      }
    }
  }
}

function placeMark(cell) {
  cell.classList.add(currentPlayer)
}

function endGame(draw) {
  winningMsg.innerText = draw
    ? 'Draw!'
    : `${currentPlayer === X_CLASS ? 'X' : 'O'} Wins!`
  winningModal.showModal()
}

function isDraw() {
  return [...cellElements].every(
    (cell) =>
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  )
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS, CIRCLE_CLASS)
  board.classList.add(currentPlayer)
}

function startGame() {
  currentPlayer = X_CLASS
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS, CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningModal.close()

  if (mode === 'pve' && currentPlayer === CIRCLE_CLASS) {
    makeAIMove()
  }
}

function isValidMove(cell) {
  return (
    !cell.classList.contains(X_CLASS) && !cell.classList.contains(CIRCLE_CLASS)
  )
}

function checkWin(player) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(player)
    })
  })
}

function makeAIMove() {
  const emptyCells = [...cellElements].filter(
    (cell) =>
      !cell.classList.contains(X_CLASS) &&
      !cell.classList.contains(CIRCLE_CLASS)
  )
  const randomIndex = Math.floor(Math.random() * emptyCells.length)
  const randomCell = emptyCells[randomIndex]
  setTimeout(() => {
    placeMark(randomCell)
    if (checkWin(currentPlayer)) {
      endGame(false)
    } else if (isDraw()) {
      endGame(true)
    } else {
      currentPlayer = currentPlayer === X_CLASS ? CIRCLE_CLASS : X_CLASS
      setBoardHoverClass()
    }
  }, 200)
}

menuBtn.addEventListener('click', () => {
  winningModal.close()
  menu()
})
