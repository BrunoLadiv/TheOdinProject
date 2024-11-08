import { useEffect } from "react";
import formatTime from "@/lib/helpers/formatTime";

export default function Timer({ isGameOver, time, setTime }) {
  useEffect(() => {
    if (isGameOver) return;

    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(timerInterval);
  }, [isGameOver]);

  return (
    <div className="timer">
      <span>{formatTime(time)}</span>
    </div>
  );
}
