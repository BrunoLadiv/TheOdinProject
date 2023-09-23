import './style.css'
import * as weatherAPI from './components/handle-weather-api'

const searchInput = document.querySelector('.input')
const searchBnt = document.querySelector('.search-btn')

searchInput.addEventListener('change', () => {
  const city = searchInput.value
  weatherAPI.getCityCoords(city)
  searchInput.value = ''
  searchInput.blur()
})
searchBnt.addEventListener('click', () => {
  const city = searchInput.value
  weatherAPI.getCityCoords(city)
})
