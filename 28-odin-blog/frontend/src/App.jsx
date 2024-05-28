import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
