import * as dom from './handle-dom'

const API_KEY = '20f7632ffc2c022654e4093c6947b4f4'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

function getForecast({ coord, name, country }) {
  fetch(
    `${BASE_URL}onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
  )
    .then((r) => r.json())
    .then((data) => {
      const cityData = { ...data, name, country }
      dom.renderCurrentWeather(cityData)
      dom.renderHourlyForecast(cityData)
      dom.renderWindConditions(cityData)
      dom.renderSevenDayForecast(cityData.daily)
      dom.handleLoader(true)
    })
}

function getCityCoords(cityName) {
  dom.handleLoader(false)
  fetch(`${BASE_URL}weather?q=${cityName}&APPID=${API_KEY}`)
    .then((r) => r.json())
    .then((data) => {
      const city = {
        coord: data.coord,
        name: data.name,
        country: data.sys.country,
      }
      getForecast(city)
    })
    .catch((err) => console.log(err))
}

export { getCityCoords, getForecast }

getCityCoords('Curitiba')
