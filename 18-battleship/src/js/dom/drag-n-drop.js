import Ship from '../factories/Ship'
import { player1 } from '../game/game'
import { isVertical } from './fleetContainer'
import { renderBoard } from '../game/game'

let shipLength

let highlightedCells = []

function dragNdrop() {
  const ships = document.querySelectorAll('.ship')
  const playerBoardContainer = document.querySelector('.player-board') // Add this line

  ships.forEach((ship) => {
    ship.addEventListener('dragstart', (event) => {
      shipLength = parseInt(ship.getAttribute('ship-length'))
      event.dataTransfer.setData(
        'text/plain',
        JSON.stringify({
          shipName: ship.dataset.shipname,
          shipLength: parseInt(ship.getAttribute('ship-length')),
        })
      )
    })
  })

  // Attach the event listeners to the parent container
  playerBoardContainer.addEventListener('dragover', (event) => {
    event.preventDefault()
    const cell = event.target
    const x = Number(cell.dataset.x)
    const y = Number(cell.dataset.y)
    highlightedCells = highlightCells(shipLength, x, y, isVertical)
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
    const shipData = JSON.parse(event.dataTransfer.getData('text/plain'))
    const shipName = shipData.shipName
    const shipLength = Number(shipData.shipLength)
    const x = Number(cell.dataset.x)
    const y = Number(cell.dataset.y)
    console.log(
      `Dropped ship ${shipName} (Length: ${shipLength}) at cell: ${x}, ${y}`
    )

    createShip(shipName, shipLength, x, y)
    ships.forEach((ship) => {
      if (ship.dataset.shipname === shipName) {
        ship.remove()
      }
    })
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
  player1.gameboard.placeShip(newShip, y, x, isVertical)
  console.log(player1.gameboard)
}

function removeHighlight(cells) {
  cells.forEach((cell) => {
    cell.style.backgroundColor = ''
  })
}

export { dragNdrop }
