document.addEventListener('DOMContentLoaded', function () {
  let isPainting = false;
  let rgbmode = false;
  const sketchBox = document.querySelector('.sketch-box');
  const gridSizeSlider = document.getElementById('gridSizeSlider');
  const resetButton = document.getElementById('resetButton');
  const rgbButton = document.getElementById('rgbButton');

  function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
  }

  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function startPainting(e) {
    isPainting = true;
    paint(e);
  }

  function stopPainting() {
    isPainting = false;
  }

  function paint(e) {
    if (isPainting && e.target.classList.contains('square')) {
      const square = e.target;
      if (!rgbmode) {
        square.style.backgroundColor = 'black';
      } else {
        square.style.backgroundColor = getRandomRGBColor();
      }
    }
  }

  function clearGrid() {
    sketchBox.innerHTML = '';
  }

  function rgbModeSwitch() {
    rgbmode = !rgbmode;
  }

  function createNewGrid() {
    const gridSize = gridSizeSlider.value;
    document.querySelector('.sizetext').innerText = `Grid Size: ${gridSize} x ${gridSize}`;
    const squareSize = (550 - (gridSize - 1) * 2) / gridSize;
    console.log(squareSize);

    clearGrid();

    sketchBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = createSquare();
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      sketchBox.appendChild(square);
    }
  }

  createNewGrid();

  gridSizeSlider.addEventListener('input', createNewGrid);

  resetButton.addEventListener('click', createNewGrid);
  rgbButton.addEventListener('click', rgbModeSwitch);

  sketchBox.addEventListener('mousedown', startPainting);
  sketchBox.addEventListener('mouseup', stopPainting);
  sketchBox.addEventListener('mouseleave', stopPainting);
  sketchBox.addEventListener('mousemove', paint);
});
