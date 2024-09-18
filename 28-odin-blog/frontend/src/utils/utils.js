export function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // for am/pm
  };

  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
}