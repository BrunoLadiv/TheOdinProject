import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark", "bg-[var(--bg-dm)]");
    } else {
      htmlElement.classList.remove("dark", "bg-[var(--bg-dm)]");
    }
  }, [isDarkMode]);
  return (
    <div className={` dark:text-white flex flex-col`}>
      <div
        className={`max-w-[1024px] min-h-screen  mx-auto flex flex-col w-full`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
export default App;
