import Gameboard from './Gameboard'

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

    if (result) {
      console.log(`${this.name} attacked (${x}, ${y}) and hit!`)
      return true
    } else {
      console.log(`${this.name} attacked (${x}, ${y}) and missed.`)
      return false
    }
  }
}
