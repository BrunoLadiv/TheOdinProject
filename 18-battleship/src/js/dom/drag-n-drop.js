function dragNdrop() {
  const ships = document.querySelectorAll('.ship')
  console.log(ships)
  // Add dragstart event listener to each ship
  ships.forEach((ship) => {
    
    ship.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', ship.dataset.shipname)
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
      const shipName = event.dataTransfer.getData('text/plain')
      const x = cell.dataset.x
      const y = cell.dataset.y
      console.log(`Dropped ship ${shipName} at cell: ${x}, ${y}`)

      // Place the ship in the cell (You may need to adjust the logic to match your game)
      cell.classList.add('fodase') // Add the 'ship' class to the cell
    })
  })
}


export {
  dragNdrop
}