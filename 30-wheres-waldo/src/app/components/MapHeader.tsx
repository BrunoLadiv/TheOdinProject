import Image from "next/image";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import Timer from "./Timer";
type MapHeaderProps = {
  characters: [
    {
      name: string;
      img: string;
    },
  ];
};
export default function MapHeader({ characters }: MapHeaderProps) {
  const { foundChars, isGameOver, setIsGameOver, time, setTime } =
    useGlobalContext();
  useEffect(() => {
    if (foundChars.length === characters.length) setIsGameOver(true);
  }, [foundChars]);
  return (
    <div className="fixed min-w-full  justify-center md:justify-between gap-4 md:top-10 flex flex-wrap md:flex-row right-0 z-20 md:z-40">
      <div className="min-w-[225px] hidden md:block"></div>
      <div className="flex order-2 gap-2">
        {characters.map((character) => {
          const isFound = foundChars.some(
            (foundChar) =>
              foundChar.name === character?.name && foundChar.isFound,
          );
          return (
            <div
              className={`flex items-end border ${isFound ? "bg-green-300 border-green-500" : "bg-red-300 border-red-500"} hover:cursor-pointer `}
              title={character.name.toUpperCase()}
              key={character.name}
            >
              <Image
                width={50}
                height={50}
                key={character.name}
                alt={`${character.name} image`}
                src={character.img}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 font-font1 order-1 md:order-2  bg-black/50 text-5xl p-2 mr-2">
        <img height={40} width={40} src="/images/clock.svg" alt="Clock" />
        <Timer isGameOver={isGameOver} time={time} setTime={setTime} />
      </div>
    </div>
  );
}
