document.addEventListener('DOMContentLoaded', function () {
  let rgbmode = false
  const sketchBox = document.querySelector('.sketch-box')
  const gridSizeSlider = document.getElementById('gridSizeSlider')
  const resetButton = document.getElementById('resetButton')
  const rgbButton = document.getElementById('rgbButton')

  function createSquare() {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', changeColor)
    return square
  }
  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }

  function changeColor(e) {
    if (!rgbmode) {
      e.target.style.backgroundColor = 'black'
    } else {
      e.target.style.backgroundColor = getRandomRGBColor()
    }
  }

  function clearGrid() {
    sketchBox.innerHTML = ''
  }
  function rgbModeSwitch() {
    rgbmode = !rgbmode
  }

  function createNewGrid() {
    const gridSize = gridSizeSlider.value
    document.querySelector(
      '.sizetext'
    ).innerText = `Grid Size: ${gridSize} x ${gridSize}`
    const squareSize = (550 - (gridSize - 1) * 2) / gridSize

    clearGrid()

    sketchBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    sketchBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const square = createSquare()
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        sketchBox.appendChild(square)
      }
    }
  }

  createNewGrid()

  gridSizeSlider.addEventListener('input', createNewGrid)

  resetButton.addEventListener('click', createNewGrid)
  rgbButton.addEventListener('click', rgbModeSwitch)
})
