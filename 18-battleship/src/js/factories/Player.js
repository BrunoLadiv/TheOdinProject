import Gameboard from './Gameboard'
import { playerDialog } from '../dom/notifications'
import { playHitSound, playMissSound } from '../utils/utils'

export default class Player {
  constructor(name) {
    this.name = name
    this.gameboard = new Gameboard(10, 10)
    this.opponentGameboard = null
  }

  setOpponentGameboard(gameboard) {
    this.opponentGameboard = gameboard
  }

  takeTurn(x, y) {
    if (!this.opponentGameboard) {
      console.error("Error: Opponent's gameboard not set.")
      return
    }

    const result = this.opponentGameboard.receiveAttack(x, y)

    if (result === 'hit') {
      playHitSound()
      playerDialog(this.name, 'hit')

      return 'hit'
    } else if(result === 'miss') {
      playMissSound()
      playerDialog(this.name, 'miss')

      return 'missed'
    }
  }
}
