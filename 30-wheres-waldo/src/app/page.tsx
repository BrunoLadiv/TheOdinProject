"use client";
import { useState } from "react";

export default function Home() {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  console.log(cords);
  function handleMove(e) {
    setCords({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={handleMove} className="w-screen overflow-x-auto">
      <img
        className="min-w-[1024px]"
        src="/images/game1.jpeg"
        alt="find game img"
      />
    </div>
  );
}
