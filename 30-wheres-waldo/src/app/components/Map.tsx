"use client";
import { useState, useRef } from "react";

export default function Map({ map }) {
  const [imgCoords, setImgCoords] = useState({ xPercent: 0, yPercent: 0 });
  const imgRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleImageClick(event) {
    setShowPopup(!showPopup);
    // // Get the click position relative to the image
    // if (imgRef.current) {
    //   const img = imgRef.current;
    //   const rect = img.getBoundingClientRect();
    //
    //   const xOffset = event.clientX - rect.left - window.scrollX;
    //   const yOffset = event.clientY - rect.top - window.scrollY;
    //
    //   const xPercent = (xOffset / rect.width) * 100;
    //   const yPercent = (yOffset / rect.height) * 100;
    //
    //   // Check if the click position matches the saved coordinates
    //   const tolerance = 2; // Allow for a small tolerance
    //   if (
    //     Math.abs(xPercent - imgCoords.xPercent) <= tolerance &&
    //     Math.abs(yPercent - imgCoords.yPercent) <= tolerance
    //   ) {
    //     setShowPopup(true); // Show the popup if clicked at the saved position
    //   } else {
    //     setShowPopup(false); // Hide the popup otherwise
    //   }
    // }
  }

  function handleMouseMove(event) {
    if (imgRef.current) {
      const img = imgRef.current;
      const rect = img.getBoundingClientRect();

      const xOffset = event.clientX - rect.left;
      const yOffset = event.clientY - rect.top;

      const xPercent = (xOffset / rect.width) * 100;
      const yPercent = (yOffset / rect.height) * 100;

      setImgCoords({ xPercent, yPercent });
      setMousePos({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });

      console.log(
        `Mouse moved to: X=${xPercent.toFixed(2)}%, Y=${yPercent.toFixed(2)}%`,
      );
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleImageClick}
      className="relative min-w-screen"
    >
      <img
        ref={imgRef}
        className="min-w-[1024px] max-w-none"
        src={map.imgUrl}
        alt={map.name}
      />
      {showPopup && (
        <div
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
          className="absolute text-black bg-white p-2"
        >
          You found Waldo!{" "}
        </div>
      )}
    </div>
  );
}
