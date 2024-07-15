import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="fixed w-full bg-white shadow ">
      <div className="container  left-0 right-0 top-0">
        <div className=" flex h-16 items-center justify-between ">
          <NavLink to="/">
            <img className="h-10" src={Logo} alt="TrackIt" />
          </NavLink>

          <ul
            ref={sidebarRef}
            className={` fixed right-0 top-0 z-10 flex h-screen w-2/3 flex-col items-start justify-start gap-4 bg-primary px-10 py-14 text-white transition-all duration-500 md:relative md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 md:text-secondary
            ${isOpen ? "translate-x-0" : "translate-x-full"} `}
          >
            <li className="px-5 py-2 font-medium md:p-0 md:text-sm">
              <a href="#about">About Us</a>
            </li>
            <li>
              <NavLink to="/login">
                <Button variant={width < 768 ? "primary" : "white"}>
                  Log In
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">
                <Button variant={width < 768 ? "primary" : "secondary"}>
                  Sign Up
                </Button>
              </NavLink>
            </li>
          </ul>

          {/* overlay */}
          <div
            className={` fixed right-0 top-0 h-screen w-screen bg-black/50 transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          ></div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`z-20 block  text-secondary md:hidden ${
              isOpen ? "hidden" : "relative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
