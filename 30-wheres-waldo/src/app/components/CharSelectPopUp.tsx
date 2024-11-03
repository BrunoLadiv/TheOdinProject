type PopUpPosition = {
  popupPos: {
    x: number;
    y: number;
  };
};
export default function CharSelectPopUp({ popupPos }: PopUpPosition) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${popupPos.x}px`,
        top: `${popupPos.y}px`,
        zIndex: 1000,
      }}
      className="popup-menu bg-white p-2 shadow-lg rounded border"
    >
      You found Waldo!
    </div>
  );
}
