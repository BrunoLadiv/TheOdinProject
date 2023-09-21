import './style.css'
import * as weatherAPI from './components/handle-weather-api'

const searchInput = document.querySelector('.input')

searchInput.addEventListener('change', () => {
  const city = searchInput.value
  weatherAPI.getCityCoords(city)
})
