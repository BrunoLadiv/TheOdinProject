let cpuAttackedCell 


function cpuAI(cpuPlayer) {
  const availablePositions = generateAllPositions(
    cpuPlayer.opponentGameboard.rows,
    cpuPlayer.opponentGameboard.columns
  )
  let validMove = false

  while (!validMove && availablePositions.length > 0) {
    const randomIndex = Math.floor(Math.random() * availablePositions.length)
    const position = availablePositions[randomIndex]
    const x = position.x
    const y = position.y
    cpuAttackedCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`); 

    validMove = cpuPlayer.takeTurn(y, x)
    if (validMove === 'hit' || validMove === 'miss') {
      // Remove the attacked position from available positions
      availablePositions.splice(randomIndex, 1)
    }
  }
  return validMove
}

// Helper function to generate all possible positions on the game board
function generateAllPositions(rows, columns) {
  const positions = []
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      positions.push({ x, y })
    }
  }
  return positions
}

export { cpuAI, cpuAttackedCell }
