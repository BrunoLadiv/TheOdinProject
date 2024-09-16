import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
function Links() {
  return (
    <>
      <a href="/">Blog</a>
      <a>Tags</a>
      <a>Projects</a>
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
        <div className="md:hidden flex justify-center fixed inset-0 bg-black/50 z-10">
          <div className="flex flex-col gap-2 mt-16 text-xl">
            <Links />
          </div>
        </div>
      )}
    </nav>
  );
}
