import { createFleet } from '../game/ships'
let isVertical = false

function createFleetContainer() {
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
  const rotateBtn = document.createElement('button')
  rotateBtn.classList.add('rotate-btn', 'button')
  rotateBtn.innerHTML = '<svg class="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="white" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg><span class="lable">Rotate</span>'

  rotateBtn.addEventListener('click', rotateFunc)
  console.log(rotateBtn)
  fleetContainer.appendChild(rotateBtn)
}

function rotateFunc() {
  isVertical = !isVertical
}

export { createFleetContainer, isVertical }
