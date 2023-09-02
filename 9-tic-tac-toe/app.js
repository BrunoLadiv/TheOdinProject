const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningModal = document.querySelector('.winning-message-modal');
const winningMsg = document.querySelector('.winning-message');
const restartBtn = document.getElementById('restart-button');
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

restartBtn.addEventListener('click', startGame);

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function endGame(draw) {
  winningMsg.innerText = draw ? 'Draw!' : `${circleTurn ? 'O' : 'X'} Wins!`;
  winningModal.showModal();
}

function isDraw() {
  return [...cellElements].every((cell) =>
    cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  );
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS, CIRCLE_CLASS);
  board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS);
}

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS, CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  winningModal.close();
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) =>
    combination.every((index) =>
      cellElements[index].classList.contains(currentClass)
    )
  );
}
