import { useState, useEffect } from "react";

export default function Timer({ isGameOver }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isGameOver) return;

    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(timerInterval);
  }, [isGameOver]);

  const formatTime = () => {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0",
    );
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="timer">
      <span>{formatTime()}</span>
    </div>
  );
}
