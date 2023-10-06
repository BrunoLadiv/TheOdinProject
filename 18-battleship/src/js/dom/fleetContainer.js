import { createFleet } from '../game/ships'

const fleetContainer = document.querySelector('.fleet-container')

createFleet().forEach((ship) => {
  const div = document.createElement('div')
  div.classList.add(ship.name)
  div.classList.add('ship')

  div.setAttribute('data-shipname', ship.name)
  div.setAttribute('title', ship.name)
  div.setAttribute('ship-length', ship.length)
  div.setAttribute('draggable', true)

  fleetContainer.appendChild(div)
})
const ships = document.querySelectorAll('.ship')

let previousShip = null

ships.forEach((ship) => {
  ship.addEventListener('click', () => {
    // Remove the "active" class from the previous ship
    console.log(ship)
    if (previousShip) {
      previousShip.classList.remove('active')
    }

    // Add the "active" class to the clicked ship
    ship.classList.add('active')

    // Update the previousShip variable to the currently clicked ship
    previousShip = ship
  })
  ship.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', ship.className) // Set ship name as data
  })
})
