"use client";
import { useState, useRef } from "react";

export default function Home() {
  const [imgCoords, setImgCoords] = useState({ xPercent: 0, yPercent: 0 });
  const imgRef = useRef(null);
  const [showDD, setShowDD] = useState(false);

  function handleImageClick(event) {
    setShowDD(!showDD);
  }

  function handleMouseMove(event) {
    if (imgRef.current) {
      const img = imgRef.current;
      const rect = img.getBoundingClientRect();

      const xOffset = event.pageX - rect.left - window.scrollX;
      const yOffset = event.pageY - rect.top - window.scrollY;

      const xPercent = (xOffset / rect.width) * 100;
      const yPercent = (yOffset / rect.height) * 100;

      setImgCoords({ xPercent, yPercent });
      console.log(
        `Mouse moved to: X=${xPercent.toFixed(2)}%, Y=${yPercent.toFixed(2)}%`,
      );
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative overflow-x-auto min-w-screen"
    >
      <img
        ref={imgRef}
        onClick={handleImageClick}
        className="min-w-[1024px] max-w-none"
        src="/images/game1.jpeg"
        alt="find game img"
      />
    </div>
  );
}
