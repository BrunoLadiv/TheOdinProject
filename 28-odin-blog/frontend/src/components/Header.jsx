import Nav from "./Nav";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/darkMode/darkModeSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <header className="flex sticky top-0 z-10 mx-auto w-full items-center justify-between p-8">
      <Link to={"/"}>
        <h1 className=" text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-purple-500 to-blue-500 bg-clip-text text-transparent font-serif">
          .dev
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Nav />
        {!isDarkMode && (
          <MdOutlineDarkMode
            onClick={handleDarkMode}
            className="text-2xl hover:text-[purple]"
          />
        )}
        {isDarkMode && (
          <MdOutlineWbSunny
            onClick={handleDarkMode}
            className="text-2xl hover:text-yellow-400"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
