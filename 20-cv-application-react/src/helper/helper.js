export function formatDateMonthYear(dateString) {
  const [year, month] = dateString.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formattedDate = `${months[parseInt(month, 10) - 1]} ${year}`;

  return formattedDate
}