export default function formatTimestamp(timestamp) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date(timestamp)

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const month = months[monthIndex]
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = date.getMinutes()

  const amOrPm = hours >= 12 ? 'pm' : 'am'

  if (hours > 12) {
    hours -= 12
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return {
    day,
    month,
    year,
    hours,
    minutes: formattedMinutes,
    amOrPm,
  }
}
