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
      return false 
    }

    if (isVertical) {
      if (x + ship.length > this.rows) {
        return false 
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) {
          return false 
        }
      }

      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship
      }
    } else {
      if (y + ship.length > this.columns) {
        return false 
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) {
          return false 
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
      return false 
    }

    if (this.board[x][y] !== null) {
      const ship = this.board[x][y]
      ship.hit(y) 
      return true 
    }

    return false 
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk())
  }
}
