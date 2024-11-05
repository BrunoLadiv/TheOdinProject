import CharAvatar from "./CharAvatar";
type PopUpPosition = {
  popupPos: {
    x: number;
    y: number;
  };
  characters: [
    {
      name: string;
      img: string;
    },
  ];
  setChoosenChar: (char: string) => void;
};
export default function CharSelectPopUp({
  popupPos,
  characters,
  setChoosenChar,
}: PopUpPosition) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${popupPos.x}px`,
        top: `${popupPos.y}px`,
        zIndex: 1000,
      }}
      className="popup-menu bg-white p-2 shadow-lg rounded"
    >
      {characters.map((character) => {
        return (
          <CharAvatar
            setChoosenChar={setChoosenChar}
            key={character.name}
            character={character}
          />
        );
      })}
    </div>
  );
}
