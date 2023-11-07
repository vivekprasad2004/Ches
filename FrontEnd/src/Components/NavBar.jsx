import { ChesLogo } from "..";
import { NavLinks } from "../Constants";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="w-full flex items-center py-3 fixed top-0 z-30 border-b-[0px] drop-shadow-md backdrop-blur-md bg-background-900/70 ">
        <nav className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
          <a href="/">
            <img
              src={ChesLogo}
              alt="Logo"
              width={70}
              height={70}
              className="hover:scale-105 duration-300"
            />
          </a>
          <ul className="list-none hidden md:flex flex-row gap-8">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-accent-300" : "text-text-300"
                } hover:text-accent-400 font-semibold cursor-pointer relative text-xl w-fit  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-1 justify-end items-center">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <AiOutlineClose className="text-[2rem] text-accent font-bold" />
              ) : (
                <AiOutlineMenu className="text-[2rem] text-accent font-bold" />
              )}
            </button>

            {/* mobile menu */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-8  absolute top-[5.4rem] right-0  my-2 w-full text-center z-10 rounded-md backdrop-blur-2xl bg-background-950/80 `}>
              <ul className="list-none flex justify-center items-start  flex-col gap-4">
                {NavLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-semibold cursor-pointer text-xl hover:text-accent-400  ${
                      active === link.title
                        ? "text-accent-300"
                        : "text-text-300"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
