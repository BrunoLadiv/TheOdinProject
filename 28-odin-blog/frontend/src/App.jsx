import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className={`dark:bg-[var(--bg-dm)] dark:text-white h-full`}>
      <div className={`max-w-[1024px]  mx-auto `}>
        <Header />
        <Outlet />
        <footer>Footer</footer>
      </div>
    </div>
  );
}
export default App;
