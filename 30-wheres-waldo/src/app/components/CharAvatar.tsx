import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
type CharProps = {
  character: {
    name: string;
    img: string;
  };
  setChoosenChar: (char: string) => void;
};
export default function CharAvatar({ character, setChoosenChar }: CharProps) {
  const { foundChars } = useGlobalContext();
  const isFound = foundChars.some(
    (foundChar) => foundChar.name === character.name && foundChar.isFound,
  );
  return (
    <div
      onClick={() => setChoosenChar(character.name)}
      className={`flex w-28 hover:cursor-pointer items-baseline border border-b-black text-black gap-2 
        ${isFound ? "bg-green-500" : "hover:bg-slate-300"}`}
    >
      <Image width={40} height={40} alt={character.name} src={character.img} />
      <span className="text-md mr-2 font-font1">
        {" "}
        {character.name.toUpperCase()}{" "}
      </span>
    </div>
  );
}
