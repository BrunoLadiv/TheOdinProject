export default function convertDate(timestamp) {
  const milliseconds = timestamp * 1000

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
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  // const seconds = date.getSeconds().toString().padStart(2, '0')

  const dayOfWeekNumeric = date.getDay()

  const dayOfWeekString = weekdayNames[dayOfWeekNumeric]

  const readableDate = `${dayOfWeekString}, ${day}/${month}/${year}, ${hours}:${minutes}`

  return readableDate
}


function imgSetter() {
  
}