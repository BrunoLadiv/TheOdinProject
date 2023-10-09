import { playerTurn, shoot } from '../game/game'
import battleShipIMG from '../../../public/images/battleship.png'
import carrierIMG from '../../../public/images/carrier.png'
import cruiserIMG from '../../../public/images/cruiser.png'
import destroyerIMG from '../../../public/images/destroyer.png'
import submarineIMG from '../../../public/images/submarine.png'
import battleShipIMGV from '../../../public/images/vertical/battleship.png'
import carrierIMGV from '../../../public/images/vertical/carrier.png'
import cruiserIMGV from '../../../public/images/vertical/cruiser.png'
import destroyerIMGV from '../../../public/images/vertical/destroyer.png'
import submarineIMGV from '../../../public/images/vertical/submarine.png'


const playerBoardContainer = document.querySelector('.player-board')
const cpuBoardContainer = document.querySelector('.cpu-board')




function createGameBoardHTML(gameboard, player, clickHandler) {
  const board = document.createElement('div')
  board.classList.add('board')
  console.log(gameboard.board)

  // Create a set to keep track of added ship names
  const addedShipNames = new Set()

  gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cellData, colIndex) => {
      const cell = document.createElement('div')
      cell.classList.add('board-cell')
      cell.dataset.x = colIndex 
      cell.dataset.y = rowIndex 
      if (cellData !== null) {
        // Determine the ship orientation (vertical or horizontal)
        const isVertical =
          rowIndex < gameboard.board.length - 1 &&
          gameboard.board[rowIndex + 1][colIndex] !== null &&
          gameboard.board[rowIndex + 1][colIndex].name === cellData.name

        // Check if the ship name has already been added
        if (!addedShipNames.has(cellData.name)) {
          const shipIMG = getShipIMG(cellData.name, isVertical)
          const imgElement = document.createElement('img')
          imgElement.setAttribute('src', shipIMG)

          // Create an absolute div for the ship image above the cells
          const shipImageDiv = document.createElement('div')
          shipImageDiv.style.position = 'absolute'
          shipImageDiv.style.zIndex = '-1'

          if (isVertical) {
            shipImageDiv.classList.add(
              'ship-image',
              cellData.name + '-image-vertical'
            )
            
            shipImageDiv.style.width = '50px'
            shipImageDiv.style.height = `${cellData.length * 50}px`
            
          } else {
            shipImageDiv.classList.add(
              'ship-image',
              cellData.name + '-image-horizontal'
            )
            shipImageDiv.style.width = `${cellData.length * 50}px`
            shipImageDiv.style.height = '50px'
          }

          // Calculate the position of the ship image div
          shipImageDiv.style.left = `${colIndex * 50}px`
          shipImageDiv.style.top = `${rowIndex * 50}px`

          // Add the ship image div to the board
          shipImageDiv.appendChild(imgElement)
          board.appendChild(shipImageDiv)

          // Mark the ship name as added
          addedShipNames.add(cellData.name)
        }

        
      }

      cell.addEventListener('click', clickHandler)
      board.appendChild(cell)
    })
  })

  if (player === 'player') {
    playerBoardContainer.appendChild(board)
  } else {
    cpuBoardContainer.appendChild(board)
  }
}

function cellClickHandler(event) {
  if (
    event.target.parentElement.parentElement.classList.contains(
      'player-board'
    ) ||
    !playerTurn
  )
    return
  shoot(event)
}

function getShipIMG(name, isVertical) {
  //serve proper img
  switch (name) {
    case 'battleship':
      return !isVertical ? battleShipIMG : battleShipIMGV
    case 'carrier':
      return !isVertical ? carrierIMG : carrierIMGV
    case 'cruiser':
      return !isVertical ? cruiserIMG : cruiserIMGV
    case 'destroyer':
      return !isVertical ? destroyerIMG : destroyerIMGV
    case 'submarine':
      return !isVertical ? submarineIMG : submarineIMGV

    default:
      break
  }
}

export { createGameBoardHTML, cellClickHandler, playerBoardContainer }
