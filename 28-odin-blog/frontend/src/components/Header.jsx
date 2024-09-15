import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex sticky top-0 z-10 mx-auto w-full items-center justify-between p-8">
      <div>logo</div>
      <Nav />
    </header>
  );
};

export default Header;
