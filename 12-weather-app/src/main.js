import './style.css'
import * as weatherAPI from './components/handle-weather-api'

const searchInput = document.querySelector('.input')
const searchBnt = document.querySelector('.search-btn')

searchInput.addEventListener('change', () => {
  const city = searchInput.value
  searchInput.blur()
  weatherAPI.getCityCoords(city)
  searchInput.value = ''
})
searchBnt.addEventListener('click', () => {
  searchInput.blur()
  const city = searchInput.value
  weatherAPI.getCityCoords(city)
})
