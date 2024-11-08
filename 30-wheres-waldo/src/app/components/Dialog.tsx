import { useEffect } from "react";
export default function Dialog() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="bg-black/70 text-4xl  font-font1 backdrop-blur-sm absolute top-0 left-0 min-w-full min-h-screen flex items-center justify-center z-40">
      <div className="bg-white/20 p-8 mx-auto -translate-y-20 border border-black/80 flex flex-col rounded ">
        <h4>You found them all!</h4>
        <h4>Your score was 05:10:24</h4>
        <label className="flex flex-col">
          Your name:
          <input type="text" className="rounded mt-2 bg-white/50 " />
        </label>
        <button className="bg-blue-500 p-2 mt-4 rounded ">Save score</button>
      </div>
    </div>
  );
}
