import { test, describe, assert } from 'vitest'
import Ship from '../../js/factories/Ship' // Adjust the import path as needed

describe('Ship class', () => {
  test('initializes correctly', () => {
    const ship = new Ship('carrier', 3)

    // Check if the ship's length is set correctly
    assert.equal(ship.length, 3)

    // Check if the hits array is initialized with all 'false' values
    assert.deepStrictEqual(ship.hits, [false, false, false])
  })

  test('hit() method marks positions correctly', () => {
    const ship = new Ship('crusader',4)

    // Mark positions 1 and 3 as hit
    ship.hit(1)
    ship.hit(3)

    // Check if the hits array is updated correctly
    assert.deepStrictEqual(ship.hits, [false, true, false, true])
  })

  test('isSunk() method works correctly', () => {
    const ship = new Ship('submarine',3)

    // Mark all positions as hit
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)

    // Check if the ship is marked as sunk
    assert.isTrue(ship.isSunk())
  })
})
