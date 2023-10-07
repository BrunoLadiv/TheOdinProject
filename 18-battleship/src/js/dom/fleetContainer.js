import { createFleet } from '../game/ships'

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
}


export {
  createFleetContainer
}