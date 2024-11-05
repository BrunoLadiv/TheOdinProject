"use client";
import { useEffect, useState, useRef } from "react";
import CharSelectPopUp from "./CharSelectPopUp";
import { checkLocation } from "@/actions/actions";

export default function Map({ map }) {
  const [imgCoords, setImgCoords] = useState({ xPercent: 0, yPercent: 0 });
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const characters = map?.characters;
  const [choosenChar, setChoosenChar] = useState("");
  const [choosenCharLocation, setChoosenCharLocation] = useState({
    xPercent: 0,
    yPercent: 0,
  });
  console.log(choosenCharLocation);
  console.log(choosenChar);

  useEffect(() => {
    const checkCharacterLocation = async () => {
      try {
        const result = await checkLocation(
          map.id,
          choosenCharLocation.xPercent,
          choosenCharLocation.yPercent,
          choosenChar,
        );

        console.log(result);
        setChoosenChar("");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkCharacterLocation();
  }, [choosenChar]);

  async function handleImageClick(event) {
    event.stopPropagation();
    setChoosenCharLocation({
      yPercent: imgCoords.yPercent,
      xPercent: imgCoords.xPercent,
    });
    if (!showPopup) {
      const containerRect = containerRef.current.getBoundingClientRect();

      const x =
        event.clientX - containerRect.left + containerRef.current.scrollLeft;
      const y =
        event.clientY - containerRect.top + containerRef.current.scrollTop;

      const viewportWidth = window.innerWidth;
      const popupWidth = 200;
      const rightEdge = event.clientX + popupWidth;
      const adjustedX = rightEdge > viewportWidth ? x - popupWidth : x;

      setPopupPos({
        x: adjustedX,
        y: y,
      });
    }
    setShowPopup(!showPopup);
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
    }
  }

  function handleClickOutside(event) {
    if (showPopup && !event.target.closest(".popup-menu")) {
      setShowPopup(false);
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClickOutside}
      className="relative overflow-auto max-w-screen"
    >
      <img
        className="min-w-[1024px]"
        ref={imgRef}
        src={map.imgUrl}
        alt={map.name}
        onClick={handleImageClick}
      />
      {showPopup && (
        <CharSelectPopUp
          setChoosenChar={setChoosenChar}
          characters={characters}
          popupPos={popupPos}
        />
      )}
    </div>
  );
}
