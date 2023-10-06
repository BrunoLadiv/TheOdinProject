import Player from '../factories/Player'
import { createGameBoardHTML, cellClickHandler } from '../dom/createBoards'

const player1 = new Player('player1')
const cpu = new Player('cpu')

createGameBoardHTML(player1.gameboard, 'player', cellClickHandler)
createGameBoardHTML(cpu.gameboard, 'cpu', cellClickHandler)
