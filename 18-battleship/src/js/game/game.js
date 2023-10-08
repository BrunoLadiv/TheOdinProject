import Player from '../factories/Player'
import {
  createGameBoardHTML,
  cellClickHandler,
  playerBoardContainer,
} from '../dom/createBoards'
import { dragNdrop } from '../dom/drag-n-drop'
import { createFleetContainer } from '../dom/fleetContainer'
import { cpuAI, cpuAttackedCell } from './cpu'
const gameStarted = true
let playerTurn = true

const player1 = new Player('player1')
const cpu = new Player('cpu')
player1.setOpponentGameboard(cpu.gameboard)
cpu.setOpponentGameboard(player1.gameboard)

createGameBoardHTML(player1.gameboard, 'player', cellClickHandler)
cpu.gameboard.placeRandomShips()
createGameBoardHTML(cpu.gameboard, 'cpu', cellClickHandler)

createFleetContainer()
dragNdrop()

function renderBoard() {
  while (playerBoardContainer.firstChild) {
    playerBoardContainer.removeChild(playerBoardContainer.firstChild)
  }
  createGameBoardHTML(player1.gameboard, 'player', cellClickHandler)
}

function shoot(event) {
  if (gameStarted && playerTurn) {
    const x = event.target.dataset.x
    const y = event.target.dataset.y

    const didHit = player1.takeTurn(y, x)
    if (didHit === 'hit') {
      event.target.style.backgroundColor = 'red'
    } else {
      event.target.style.backgroundColor = 'yellow'
    }

    if (cpu.gameboard.allShipsSunk()) {
      alert('Game over Player won')
      location.reload()
    }
    playerTurn = false

    // After the player's turn, check if it's still the player's turn before allowing the CPU to take a turn
    setTimeout(() => {
      if (!playerTurn) {
        const didHit = cpuAI(cpu)
        if (didHit === 'hit') {
          cpuAttackedCell.style.backgroundColor = 'red'
        } else {
          cpuAttackedCell.style.backgroundColor = 'yellow'
        }
        if (player1.gameboard.allShipsSunk()) {
          alert('Game over CPU won')
          location.reload()
        }
        playerTurn = true
      }
    }, 1000) // Adjust the delay (in milliseconds) as needed
  }
}



export { player1, cpu, renderBoard, shoot, playerTurn }
