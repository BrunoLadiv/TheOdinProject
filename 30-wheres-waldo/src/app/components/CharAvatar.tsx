import Image from "next/image";
type CharProps = {
  character: {
    name: string;
    img: string;
  };
  setChoosenChar: (char: string) => void;
};
export default function CharAvatar({ character, setChoosenChar }: CharProps) {
  return (
    <div
      onClick={() => setChoosenChar(character.name)}
      className="flex w-36 hover:cursor-pointer hover:bg-slate-300 items-baseline border border-b-black text-black gap-2 "
    >
      <Image width={40} height={40} alt={character.name} src={character.img} />
      <span className="text-sm mr-2"> {character.name.toUpperCase()} </span>
    </div>
  );
}
