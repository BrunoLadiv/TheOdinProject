// src/utils.js
export function formatDate(tododate) {
  const date = new Date(tododate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}  ${hour}:${minutes}`;
  return formattedDate;
}

export function checkPriority(priority) {
  switch (priority) {
    case 'high':
      return 'high-priority';
    case 'medium':
      return 'medium-priority';
    case 'low':
      return 'low-priority';
    default:
      return '';
  }
}

export function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}
