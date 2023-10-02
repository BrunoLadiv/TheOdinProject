import { tileToPosition, resetPath } from './helperfuncs'
import { findShortestPath } from './ShortestPath'

const chessboard = document.getElementById('chessboard')

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const tile = document.createElement('div')
    tile.classList.add('tile')
    if ((row + col) % 2 === 0) {
      tile.classList.add('white')
    } else {
      tile.classList.add('black')
    }
    chessboard.appendChild(tile)
  }
}

let startTile = null
let endTile = null

chessboard.addEventListener('click', (event) => {
  const clickedTile = event.target

  if (startTile === null) {
    startTile = clickedTile
    startTile.classList.add('start')
  } else if (endTile === null) {
    endTile = clickedTile
    endTile.classList.add('end')

    const startPosition = tileToPosition(startTile)
    const endPosition = tileToPosition(endTile)
    findShortestPath(startPosition, endPosition)
    console.log('start', startPosition, 'end', endPosition)
  } else {
    resetPath()
    startTile.classList.remove('start')
    endTile.classList.remove('end')
    startTile = clickedTile
    startTile.classList.add('start')
    endTile = null
  }
})
