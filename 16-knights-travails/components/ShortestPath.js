function findShortestPath(start, end) {
  const knightMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
  ];

  const chessboard = Array(8).fill().map(() => Array(8).fill(false));

  const queue = [];
  queue.push({ position: start, distance: 0, path: [start] });
  chessboard[start[0]][start[1]] = true;

  while (queue.length > 0) {
      const { position, distance, path } = queue.shift();

      if (position[0] === end[0] && position[1] === end[1]) {
          highlightPath(path);
          return;
      }

      for (const [dx, dy] of knightMoves) {
          const newRow = position[0] + dx;
          const newCol = position[1] + dy;

          if (isValidMove(newRow, newCol) && !chessboard[newRow][newCol]) {
              chessboard[newRow][newCol] = true;
              const newPosition = [newRow, newCol];
              const newPath = path.concat([newPosition]);
              queue.push({ position: newPosition, distance: distance + 1, path: newPath });
          }
      }
  }
  
  alert("No path found!");
}

function isValidMove(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function highlightPath(path) {
  for (const [row, col] of path) {
      const tile = document.querySelector(`.tile:nth-child(${8 * row + col + 1})`);
      tile.classList.add("path");
  }
}

export {
  findShortestPath
}