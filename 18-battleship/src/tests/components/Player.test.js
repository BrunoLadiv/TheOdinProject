import Player from '../../js/factories/Player'
import Ship from '../../js/factories/Ship'
import { describe, it, expect } from 'vitest'

describe('Player', () => {
  it('should place a ship on their gameboard', () => {
    const player = new Player('Player 1')
    const ship = new Ship('carrier',3)

    expect(player.gameboard.placeShip(ship, 2, 3, false)).toBe(true)
  })

  it("should take a turn and miss the opponent's ship", () => {
    const player1 = new Player('Player 1')
    const player2 = new Player('Player 2')
    player1.setOpponentGameboard(player2.gameboard)

    player2.gameboard.placeShip(new Ship('carrier',3), 5, 5, false)
    const result = player1.takeTurn(1, 1)

    expect(result).toBe(false) // It's a miss
  })

  it("should take a turn and hit the opponent's ship", () => {
    const player1 = new Player('Player 1')
    const player2 = new Player('Player 2')
    player1.setOpponentGameboard(player2.gameboard)

    const ship = new Ship('carrier',3)
    player2.gameboard.placeShip(ship, 5, 5, false)
    const result = player1.takeTurn(5, 5)

    expect(result).toBe(true) // It's a hit
  })

})
