import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Links({ setIsOpen }) {
  const location = useLocation();

  return (
    <>
      <Link
        onClick={() => setIsOpen(false)}
        className={`md:mt-0 mt-16 hover:text-[#ed8796] ${
          location.pathname === "/" ? "border-b border-blue-500" : ""
        }`}
        to="/"
      >
        Blog
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        className={`hover:text-[#ed8796] ${
          location.pathname.startsWith("/tags")
            ? "border-b border-blue-500"
            : ""
        }`}
        to={"/tags"}
      >
        Tags
      </Link>
      <Link
        onClick={() => setIsOpen(false)}
        className={`hover:text-[#ed8796] ${
          location.pathname.startsWith("/projects")
            ? "border-b border-blue-500"
            : ""
        }`}
        to="/projects"
      >
        Projects
      </Link>
    </>
  );
}
function NavLinks({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="hidden text-xl md:flex gap-5">
        <Links />
      </div>
      <div className="md:hidden relative">
        {isOpen ? (
          <IoMdClose
            className="w-8 h-8 absolute right-0 top-0 z-20 -translate-y-3"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="w-8 h-8"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="md:hidden flex justify-end fixed inset-0 bg-black/50 z-10">
          <div
            className={`pl-8 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }  dark:bg-black bg-white min-w-[70%] border-black flex flex-col gap-2 text-xl`}
          >
            <Links setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </nav>
  );
}
