import Player from '../factories/Player'
import {
  createGameBoardHTML,
  cellClickHandler,
  playerBoardContainer,
} from '../dom/createBoards'
import { dragNdrop } from '../dom/drag-n-drop'
import { createFleetContainer } from '../dom/fleetContainer'
import { cpuAI, cpuAttackedCell } from './cpu'
import { playerDialog } from '../dom/notifications'
import { PlayFireSound } from '../utils/utils'
let playerTurn = true
let gameOver

const player1 = new Player('player')
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

function isPreGame() {
  const shipsInContainer = document.querySelectorAll(
    '.fleet-container .ship'
  ).length
  if (shipsInContainer != 0) {
    playerDialog('player', 'pregame')
  }
  return shipsInContainer == 0 ? true : false
}

function shoot(event) {
  const preGameStatus = isPreGame()
  if (preGameStatus && playerTurn && !gameOver) {
    document.querySelector(
      'body > div.game-container > div.fleet-container > button'
    ).style.opacity = '0'
    PlayFireSound()
    const y = event.target.dataset.y
    const x = event.target.dataset.x

    const didHit = player1.takeTurn(y, x)
    if (didHit === 'hit') {
      event.target.classList.add('hit')
    } else {
      event.target.classList.add('miss')
    }

    if (cpu.gameboard.allShipsSunk()) {
      playerDialog('player', 'gameover')
      
      gameOver = true
      return
    }
    playerTurn = false
    // console.log(' 🚀 ~ file: game.js:50 ~ playerTurn:', playerTurn)

    // After the player's turn, check if it's still the player's turn before allowing the CPU to take a turn
    setTimeout(() => {
      if (!playerTurn) {
        PlayFireSound()
        const didHit = cpuAI(cpu)
        if (didHit === 'hit') {
          cpuAttackedCell.classList.add('hit')
        } else {
          cpuAttackedCell.classList.add('miss')
        }
        if (player1.gameboard.allShipsSunk()) {
          playerDialog('cpu', 'gameover')
          
          gameOver = true

          return
        }
        playerTurn = true
      }
    }, 2500) // Adjust the turn delay
  }
  return
}

export { player1, cpu, renderBoard, shoot, playerTurn }
