function convertDate(timestamp, timezoneOffset, isFull = true) {
  const milliseconds = timestamp * 1000

  const date = new Date(milliseconds)

  date.setSeconds(date.getSeconds() + timezoneOffset)

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const dayOfWeek = daysOfWeek[date.getUTCDay()]

  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  // const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  let formattedDate
  if (isFull) {
    formattedDate = `${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes}`
  } else {
    formattedDate = `${dayOfWeek}, ${hours}:${minutes}`
  }

  return formattedDate
}

// eslint-disable-next-line consistent-return
function imgSetter(status) {
  switch (status) {
    case 'clear sky':
      return './src/assets/sun.svg'

    case 'few clouds':
      return './src/assets/cloud-sun.svg'
    case 'mist':
    case 'overcast clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return './src/assets/cloud.svg'
    case 'shower rain':
    case 'rain':
      return './src/assets/cloud-sun-rain.svg'
    case 'thunderstorm':
      return './src/assets/lightning.svg'
    case 'snow':
      return './src/assets/cloud-snow.svg'
    default:
      return './src/assets/sun.svg'
  }
}

export { imgSetter, convertDate }
