import Ship from '../factories/Ship'
import { player1 } from '../game/game'
import { isVertical } from './fleetContainer'
import { renderBoard } from '../game/game'

let shipLength

let highlightedCells = []

function dragNdrop() {
  const ships = document.querySelectorAll('.ship')
  const playerBoardContainer = document.querySelector('.player-board')

  ships.forEach((ship) => {
    ship.addEventListener('dragstart', (event) => {
      shipLength = parseInt(ship.getAttribute('ship-length'))
      event.dataTransfer.setData('ship', 'true');
      event.dataTransfer.setData(
        'text/plain',
        JSON.stringify({
          shipName: ship.dataset.shipname,
          shipLength: parseInt(ship.getAttribute('ship-length')),
        })
      )
    })
  })

  playerBoardContainer.addEventListener('dragover', (event) => {
    event.preventDefault()
    if (event.dataTransfer.types.includes('ship')) {
      const cell = event.target;
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      highlightedCells = highlightCells(shipLength, x, y, isVertical);
    }
  })

  playerBoardContainer.addEventListener('dragleave', (event) => {
    event.preventDefault()
    removeHighlight(highlightedCells)
  })

  playerBoardContainer.addEventListener('dragend', (event) => {
    event.preventDefault()
    removeHighlight(highlightedCells)
  })

  playerBoardContainer.addEventListener('drop', (event) => {
    event.preventDefault()
    const cell = event.target

    try {
      const shipData = JSON.parse(event.dataTransfer.getData('text/plain'))
      const shipName = shipData.shipName
      const shipLength = Number(shipData.shipLength)
      const x = Number(cell.dataset.x)
      const y = Number(cell.dataset.y)
      console.log(
        `Dropped ship ${shipName} (Length: ${shipLength}) at cell: ${x}, ${y}`
      )
      const validShip = createShip(shipName, shipLength, x, y)
      console.log(validShip)
      if (validShip) {
        ships.forEach((ship) => {
          if (ship.dataset.shipname === shipName) {
            ship.remove()
          }
        })
      }
    } catch (error) {
      return
    }

    renderBoard()
    cell.classList.add('fodase')

    removeHighlight(highlightedCells)
  })
}

function highlightCells(shipLength, x, y, isVertical) {
  const cellsToHighlight = []

  if (isVertical) {
    for (let i = 0; i < shipLength; i++) {
      const cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`)
      if (cell) {
        cellsToHighlight.push(cell)
        cell.style.backgroundColor = 'blue'
      }
    }
  } else {
    for (let i = 0; i < shipLength; i++) {
      const cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
      if (cell) {
        cellsToHighlight.push(cell)
        cell.style.backgroundColor = 'blue'
      }
    }
  }

  return cellsToHighlight
}

function createShip(shipname, shipLength, x, y) {
  const newShip = new Ship(shipname, shipLength)
  console.log(player1.gameboard)
  console.log(newShip)
  console.log(x, y)
  const shipCreated = player1.gameboard.placeShip(newShip, y, x, isVertical)
  console.log(player1.gameboard)
  return shipCreated
}

function removeHighlight(cells) {
  cells.forEach((cell) => {
    cell.style.backgroundColor = ''
  })
}

export { dragNdrop }
