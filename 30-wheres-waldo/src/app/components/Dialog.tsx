import { useEffect, useState } from "react";
import { addScore } from "@/actions/actions";

import { useGlobalContext } from "@/context/GlobalContext";
export default function Dialog({ mapId }: { mapId: number }) {
  const { time } = useGlobalContext();
  const [name, setName] = useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  function handleAddScore() {
    if (!name || name.length > 20) return;
    addScore({ userName: name, mapId, timeTaken: time });
  }
  return (
    <div className="bg-black/70 text-4xl  font-font1 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 min-w-full min-h-screen flex items-center justify-center z-40">
      <div className="bg-white/20 p-8 mx-auto -translate-y-20 border border-black/80 flex flex-col rounded ">
        <h4>You found them all!</h4>
        <h4>Your score was 05:10:24</h4>
        <label className="flex flex-col">
          Your name:
          <input
            maxLength={20}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded mt-2 bg-white/50 "
          />
        </label>
        <button
          onClick={handleAddScore}
          className="bg-blue-500 p-2 mt-4 rounded "
        >
          Save score
        </button>
      </div>
    </div>
  );
}
