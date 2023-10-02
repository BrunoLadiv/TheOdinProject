function tileToPosition(tile) {
  // Convert the div element to [row, col] format
  const row = Math.floor(Array.from(tile.parentNode.children).indexOf(tile) / 8);
  const col = Array.from(tile.parentNode.children).indexOf(tile) % 8;
  return [row, col];
}

function resetPath() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
      tile.classList.remove("path");
  });

}


export {
  tileToPosition,
  resetPath
}