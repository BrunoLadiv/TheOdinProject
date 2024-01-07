type FormateDateProps = string
type GenerateRandomPrice = number

function formatDate(inputDateString: FormateDateProps) {
  const inputDate = new Date(inputDateString);
  
  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();
  
  const formattedDateString = `${day}/${month}/${year}`;
  
  return formattedDateString;
}

function generateRandomPrice(minPrice: GenerateRandomPrice, maxPrice: GenerateRandomPrice) {
  return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
}

export {
  formatDate,
  generateRandomPrice
}