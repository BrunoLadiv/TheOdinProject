function convertDate(timestamp, timezoneOffset) {
  const milliseconds = (timestamp + timezoneOffset) * 1000

  const date = new Date(milliseconds)

  const weekdayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const amOrPm = hours >= 12 ? 'pm' : 'am'
  const formattedHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours

  const dayOfWeekNumeric = date.getDay()
  const dayOfWeekString = weekdayNames[dayOfWeekNumeric]

  const readableDate = `${dayOfWeekString}, ${day}/${month}/${year}, ${formattedHour}:${minutes} ${amOrPm}`

  return readableDate
}

// eslint-disable-next-line consistent-return
function imgSetter(status) {
  switch (status) {
    case 'clear sky':
      return 'src/assets/sun.svg'

    case 'few clouds':
      return 'src/assets/cloud-sun.svg'
    case 'mist':
    case 'overcast clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return 'src/assets/cloud.svg'
    case 'shower rain':
    case 'rain':
      return 'src/assets/cloud-sun-rain.svg'
    case 'thunderstorm':
      return 'src/assets/lightning.svg'
    case 'snow':
      return 'src/assets/cloud-snow.svg'
    default:
      return 'src/assets/sun.svg'
  }
}

export { imgSetter, convertDate }
