"use client";
import { useEffect, useState, useRef } from "react";
import CharSelectPopUp from "./CharSelectPopUp";
import { checkLocation } from "@/actions/actions";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "sonner";
import MapHeader from "./MapHeader";
import Dialog from "./Dialog";

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
  const { foundChars, setFoundChars, isGameOver } = useGlobalContext();
  const isCharacterFound = foundChars.some(
    (char) => char.name === choosenChar && char.isFound,
  );

  useEffect(() => {
    setChoosenCharLocation({
      yPercent: imgCoords.yPercent,
      xPercent: imgCoords.xPercent,
    });
  }, [imgCoords]);

  useEffect(() => {
    if (isCharacterFound || choosenChar === "") return;

    const checkCharacterLocation = async () => {
      try {
        const result = await checkLocation(
          map.id,
          choosenCharLocation.xPercent,
          choosenCharLocation.yPercent,
          choosenChar,
        );

        if (result?.success) {
          setFoundChars([...foundChars, { name: choosenChar, isFound: true }]);
          toast.success(`${choosenChar.toUpperCase()} found!`, {
            className: "border border-green-500 bg-green-200",
          });
          setTimeout(() => {
            setShowPopup(false);
          }, 500);
        } else {
          toast.error(`${choosenChar.toUpperCase()} not found, try again`, {
            className: "border border-red-500 bg-red-200",
          });
          setTimeout(() => {
            setShowPopup(false);
          }, 500);
        }

        setChoosenChar("");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkCharacterLocation();
  }, [choosenChar, choosenCharLocation]);

  async function handleImageClick(event) {
    event.stopPropagation();
    if (!showPopup) {
      if (imgRef.current) {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();
        const xOffset = event.clientX - rect.left;
        const yOffset = event.clientY - rect.top;
        const xPercent = (xOffset / rect.width) * 100;
        const yPercent = (yOffset / rect.height) * 100;
        setImgCoords({ xPercent, yPercent });
      }

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

  return (
    <>
      {isGameOver && <Dialog mapId={map.id} />}

      <div ref={containerRef} className="relative overflow-auto max-w-screen">
        <MapHeader characters={characters} />
        <img
          className="mx-auto min-w-[1024px]"
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
    </>
  );
}
