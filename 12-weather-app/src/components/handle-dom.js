import convertDate from './utils'

// eslint-disable-next-line import/prefer-default-export
export function renderCurrentWeather(cityData) {
  console.log(cityData)
  const cityName = document.querySelector('.current-city-name > h1')
  cityName.innerText = cityData.name
  const dateTime = document.querySelector('.current-date-time')
  const currentDateTime = convertDate(cityData.current.dt)
  dateTime.innerText = currentDateTime
  const currentTemp = document.querySelector('.current-city-temp > h1')
  const temp = Math.round(cityData.current.temp)
  currentTemp.innerText = `${temp}°`
  
}
