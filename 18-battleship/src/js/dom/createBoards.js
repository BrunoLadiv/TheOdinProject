import { playerTurn, shoot } from '../game/game'

const playerBoardContainer = document.querySelector('.player-board')
const cpuBoardContainer = document.querySelector('.cpu-board')

function createGameBoardHTML(gameboard, player, clickHandler) {
  const board = document.createElement('div')
  board.classList.add('board')

  gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cellData, colIndex) => {
      const cell = document.createElement('div')
      cell.classList.add('board-cell')
      cell.dataset.x = colIndex // Set data-x attribute
      cell.dataset.y = rowIndex // Set data-y attribute

      // Customize the cell appearance based on the game state (e.g., hit, miss, ship)
      // Check gameboard.getAttackStatus(colIndex, rowIndex) and set classes accordingly.
      if (cellData !== null && cellData.name) {
        console.log('aq', cellData.name)
        cell.classList.add('ship-cell')
        // You can customize the ship cell appearance here
      }

      cell.addEventListener('click', clickHandler)
      board.appendChild(cell)
    })
  })

  if (player === 'player') {
    playerBoardContainer.appendChild(board)
  } else {
    cpuBoardContainer.appendChild(board)
  }
}

function cellClickHandler(event) {
  if (event.target.parentElement.parentElement.classList.contains('player-board') || !playerTurn) return
  // When the user clicks a cell
  shoot(event)
}

export { createGameBoardHTML, cellClickHandler, playerBoardContainer }
