import Player from '../factories/Player'
import {
  createGameBoardHTML,
  cellClickHandler,
  playerBoardContainer,
} from '../dom/createBoards'
import { dragNdrop } from '../dom/drag-n-drop'
import { createFleetContainer } from '../dom/fleetContainer'

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
  if (event.target.parentElement.parentElement.classList.contains('player-board') ) return
  const x = event.target.dataset.x
  const y = event.target.dataset.y

  console.log(`Clicked on cell: ${x}, ${y}`)
  player1.takeTurn(y, x)
  
  console.log(cpu.gameboard.board)
}

export { player1, cpu, renderBoard, shoot }
