import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={`max-w-[1024px] bg-sky-700 mx-auto h-screen ${isDarkMode && "dark"}`}
    >
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
export default App;
