import { createFleet } from '../game/ships'
let isVertical = false

function createFleetContainer() {
  const fleetContainer = document.querySelector('.fleet-container')

  createFleet().forEach((ship) => {
    const div = document.createElement('div')
    div.classList.add(ship.name)
    div.classList.add('ship')
    div.innerText = ship.name
    div.setAttribute('data-shipname', ship.name)
    div.setAttribute('title', ship.name)
    div.setAttribute('ship-length', ship.length)
    div.setAttribute('draggable', true)

    fleetContainer.appendChild(div)
  })
  const rotateBtn = document.createElement('button')
  rotateBtn.classList.add('rotate-btn')
  rotateBtn.innerText = 'Rotate'
  rotateBtn.addEventListener('click', rotateFunc)
  fleetContainer.appendChild(rotateBtn)
}

function rotateFunc() {
  isVertical = !isVertical
}

export { createFleetContainer, isVertical }
