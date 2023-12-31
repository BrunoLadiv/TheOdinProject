import { createFleet } from '../game/ships'
export default class Gameboard {
  constructor(rows, columns) {
    this.rows = rows
    this.columns = columns
    this.board = this.createEmptyBoard(rows, columns)
    this.ships = []
  }

  // Create an empty game board filled with null values
  createEmptyBoard(rows, columns) {
    const board = new Array(rows)
    for (let i = 0; i < rows; i++) {
      board[i] = new Array(columns).fill(null)
    }
    return board
  }

  // Place a ship on the game board
  placeShip(ship, x, y, isVertical) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.columns) {
      return false // Out of bounds
    }

    if (isVertical) {
      if (x + ship.length > this.rows) {
        // alert('not enough space')
        return false // Ship doesn't fit vertically
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) {
          return false // Overlapping ship
        }
      }

      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship
      }
    } else {
      if (y + ship.length > this.columns) {
        // alert('not enough space')
        return false // Ship doesn't fit horizontally
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) {
          // alert("can't overlap ships")
          return false // Overlapping ship
        }
      }

      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship
      }
    }

    this.ships.push(ship)
    return true
  }

  receiveAttack(x, y) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.columns) {
      return false // Attack is out of bounds
    }

    if (this.board[x][y] === null) {
      // Mark the attacked position as empty
      this.board[x][y] = 'miss'
      return 'miss'
    } else {
      const ship = this.board[x][y]
      try {
        ship.hit() // Give the hit to the ship
        if (ship.isSunk()) {
          console.log(`${ship.name} sunk`)
        }
      } catch (error) {
        console.log('Already attacked this block!')
      }

      this.board[x][y] = 'hit'
      // Attack processed
      // Mark the attacked position as hit
      return 'hit'
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk())
  }

  getShips() {
    return this.ships
  }

  placeRandomShips() {
    const fleet = createFleet()
    for (const ship of fleet) {
      let validPlacement = false
      while (!validPlacement) {
        const x = Math.floor(Math.random() * this.rows)
        const y = Math.floor(Math.random() * this.columns)
        const isVertical = Math.random() < 0.5
        validPlacement = this.placeShip(ship, x, y, isVertical)
      }
    }
  }
}
