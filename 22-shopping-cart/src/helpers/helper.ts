type FormateDateProps = string

function formatDate(inputDateString: FormateDateProps) {
  const inputDate = new Date(inputDateString);
  
  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();
  
  const formattedDateString = `${day}/${month}/${year}`;
  
  return formattedDateString;
}

export {
  formatDate
}