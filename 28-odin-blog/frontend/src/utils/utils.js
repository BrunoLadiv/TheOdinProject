export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // for am/pm
  };

  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}

export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const secondsAgo = Math.floor((now - date) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);
  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (daysAgo < 7) {
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else if (weeksAgo < 5) {
    return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
  } else if (monthsAgo < 12) {
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
  } else {
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  }
}
