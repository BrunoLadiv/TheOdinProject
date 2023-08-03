document.addEventListener("DOMContentLoaded", function() {
  const sketchBox = document.querySelector(".sketch-box");
  const resetButton = document.getElementById("resetButton");

  
  function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    return square;
  }

  
  function changeColor(e) {
    e.target.style.backgroundColor = "black";
  }

  
  function clearGrid() {
    sketchBox.innerHTML = "";
  }

  
  function createNewGrid() {
    let gridSize = parseInt(prompt("Enter the number of squares per side (max 100):"));
    gridSize = isNaN(gridSize) ? 16 : Math.min(gridSize, 100);
    const squareSize = (550 - (gridSize - 1) * 2) / gridSize; 

    clearGrid();

    sketchBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const square = createSquare();
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        sketchBox.appendChild(square);
      }
    }
  }

  
  createNewGrid();


  resetButton.addEventListener("click", createNewGrid);
});



