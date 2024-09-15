import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[1400px] bg-sky-700 mx-auto h-screen ">
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
export default App;
