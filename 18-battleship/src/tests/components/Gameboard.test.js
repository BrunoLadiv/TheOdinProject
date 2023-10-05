import { describe, expect, beforeEach, it } from 'vitest'
import Ship from '../../js/components/Ship'
import Gameboard from '../../js/components/Gameboard'

describe('Gameboard', () => {
  let gameboard
  let ship

  beforeEach(() => {
    gameboard = new Gameboard(10, 10) // Create a 10x10 game board
    ship = new Ship(3) // Create a ship with a length of 3
  })

  it('should place a ship horizontally', () => {
    expect(gameboard.placeShip(ship, 2, 3, false)).toBe(true)
  })

  it('should place a ship vertically', () => {
    expect(gameboard.placeShip(ship, 4, 5, true)).toBe(true)
  })

  it('should not place a ship out of bounds', () => {
    expect(gameboard.placeShip(ship, 8, 8, true)).toBe(false)
  })

  it('should not place a ship overlapping another ship', () => {
    gameboard.placeShip(ship, 2, 3, false)
    const overlappingShip = new Ship(4) // Create another ship with a different length
    expect(gameboard.placeShip(overlappingShip, 2, 3, false)).toBe(false)
  })

  it('should receive a successful attack', () => {
    gameboard.placeShip(ship, 2, 3, false)
    expect(gameboard.receiveAttack(2, 3)).toBe(true)
  })

  it('should receive a missed attack', () => {
    expect(gameboard.receiveAttack(5, 5)).toBe(false)
  })

  it('should check if all ships are sunk', () => {
    gameboard.placeShip(ship, 2, 3, false)
    gameboard.receiveAttack(2, 3)
    gameboard.receiveAttack(2, 4)
    gameboard.receiveAttack(2, 5)

    // Ensure all ships are hit and sunk
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)

    expect(gameboard.allShipsSunk()).toBe(true)
  })
  it('should check if not all ships are sunk', () => {
    gameboard.placeShip(ship, 2, 3, false)
    gameboard.receiveAttack(2, 3)
    expect(gameboard.allShipsSunk()).toBe(false)
  })
})
