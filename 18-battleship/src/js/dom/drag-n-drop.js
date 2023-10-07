import Ship from '../factories/Ship'
import { player1 } from '../game/game'

function dragNdrop() {
  const ships = document.querySelectorAll('.ship')

  // Add dragstart event listener to each ship
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData(
        'text/plain',
        JSON.stringify({
          shipName: ship.dataset.shipname,
          shipLength: parseInt(ship.getAttribute('ship-length')),
        })
      )
    })
  })

  const boardCells = document.querySelectorAll('.board-cell')

  // Add dragover event listener to each valid drop target (e.g., board cells)
  boardCells.forEach((cell) => {
    cell.addEventListener('dragover', (event) => {
      event.preventDefault() // Prevent default behavior to allow drop
    })
  })

  // Add drop event listener to each valid drop target
  boardCells.forEach((cell) => {
    cell.addEventListener('drop', (event) => {
      event.preventDefault()
      const shipData = JSON.parse(event.dataTransfer.getData('text/plain'))
      const shipName = shipData.shipName
      const shipLength = Number(shipData.shipLength)
      const x = Number(cell.dataset.x)
      const y = Number(cell.dataset.y)
      console.log(
        `Dropped ship ${shipName} (Length: ${shipLength}) at cell: ${x}, ${y}`
      )

      createShip(shipName, shipLength, x, y)
      // Place the ship in the cell (You may need to adjust the logic to match your game)
      cell.classList.add('fodase') // Add the 'ship' class to the cell
    })
  })
}

function createShip(shipname, shipLength, x, y) {
  const newShip = new Ship(shipname, shipLength)
  console.log(player1.gameboard)
  console.log(newShip)
  console.log(x, y)
  player1.gameboard.placeShip(newShip, x, y, false)
  console.log(player1.gameboard)
}

export { dragNdrop }
