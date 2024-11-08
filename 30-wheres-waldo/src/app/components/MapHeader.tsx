import Image from "next/image";
import { useGlobalContext } from "@/context/GlobalContext";
type MapHeaderProps = {
  characters: [
    {
      name: string;
      img: string;
    },
  ];
};
export default function MapHeader({ characters }: MapHeaderProps) {
  const { foundChars } = useGlobalContext();
  return (
    <div className="fixed min-w-full justify-between top-10 flex flex-col md:flex-row right-0">
      <div className="min-w-[225px]"></div>
      <div className="flex gap-2">
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
      <div className="flex gap-4 font-font1 bg-black bg-opacity-60 text-5xl p-2 mr-2">
        <img height={40} width={40} src="/images/clock.svg" alt="Clock" />
        <span> 02:04:23</span>
      </div>
    </div>
  );
}
