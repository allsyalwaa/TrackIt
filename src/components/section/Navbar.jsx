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
  return (
    <nav className="shadow">
      <div className="container">
        <div className=" flex h-16 items-center justify-between ">
          <img className="h-10" src={Logo} alt="TrackIt" />

          <ul
            ref={sidebarRef}
            className={`items-center gap-6 text-secondary ${isOpen ? "fixed right-0 top-0 z-10 flex h-screen w-1/3 flex-col items-start justify-start gap-4 bg-primary px-10 py-14 text-white" : "hidden"} md:flex`}
          >
            <li
              className={`text-sm font-medium ${isOpen ? "hidden" : "block"}`}
            >
              <NavLink to="/">About Us</NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">About Us</Button>
              </NavLink>
            </li>
            <li className={`flex gap-4 ${isOpen ? "hidden" : "block"}`}>
              <NavLink to="/">
                <Button variant="white">Log In</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">Log In</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "hidden" : "block"}`}>
              <NavLink to="/">
                <Button variant="secondary">Sign Up</Button>
              </NavLink>
            </li>
            <li className={`${isOpen ? "block" : "hidden"}`}>
              <NavLink to="/">
                <Button variant="primary">Sign Up</Button>
              </NavLink>
            </li>
          </ul>

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
