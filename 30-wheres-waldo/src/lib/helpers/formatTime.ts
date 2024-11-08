const formatTime = (time: number) => {
  const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
};
export default formatTime;
