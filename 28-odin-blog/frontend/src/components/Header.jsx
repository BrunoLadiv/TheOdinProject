import Nav from "./Nav";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/darkMode/darkModeSlice";

const Header = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <header className="flex sticky top-0 z-10 mx-auto w-full items-center justify-between p-8">
      <div>logo</div>
      <div className="flex items-center gap-4">
        <Nav />
        {!isDarkMode && (
          <MdOutlineDarkMode onClick={handleDarkMode} className="text-2xl" />
        )}
        {isDarkMode && (
          <MdOutlineWbSunny onClick={handleDarkMode} className="text-2xl" />
        )}
      </div>
    </header>
  );
};

export default Header;
