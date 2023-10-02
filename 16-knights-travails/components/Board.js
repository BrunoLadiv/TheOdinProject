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
