import { NavLink } from "react-router-dom";
import Logo from "../../assets/illustration-logo1.svg";
import Profile from "../../assets/profile.svg";

import { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const profileMenuRef = useRef(null);
  const triggerProfileMenu = useRef(null);
  const handleClickOutside = (event) => {
    // sidebar menu
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }

    // profile menu
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target) &&
      triggerProfileMenu.current &&
      !triggerProfileMenu.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative w-12 flex-shrink-0 md:w-56"></div>
      <nav
        ref={sidebarRef}
        className={`fixed z-20 bg-primary py-6 transition-all duration-500 md:px-10 ${
          isOpen ? "fixed w-56 px-10" : " w-12"
        } h-full md:w-56`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative flex items-center justify-center px-3 text-white md:hidden ${isOpen ? "hidden" : "absolute"}`}
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
        <img
          className={`md:block md:h-10 ${isOpen ? "block" : "hidden"}`}
          src={Logo}
          alt=""
        />
        <div
          className={`mt-8 flex w-full flex-col gap-4 text-white md:visible  md:flex ${isOpen ? "visible transition-all delay-500" : "invisible"}`}
        >
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
              />
            </svg>

            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/alarm"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z"
              />
            </svg>
            <p>Alarm</p>
          </NavLink>
          <NavLink
            to="/calendar"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
              />
            </svg>
            <p>Calendar</p>
          </NavLink>
          <NavLink
            to="/money-calculator"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4"
                clipRule="evenodd"
              />
            </svg>
            <p>Money Calculator</p>
          </NavLink>
          <NavLink
            to="/notes"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
              />
            </svg>
            <p>Notes</p>
          </NavLink>
          <NavLink
            to="/reminders"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"
              />
            </svg>
            <p>Reminders</p>
          </NavLink>
          <NavLink
            to="/tasks"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M7.416 3A4.983 4.983 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a2.99 2.99 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"
                />
              </g>
            </svg>
            <p>Tasks</p>
          </NavLink>
        </div>
        {/* menu profile */}
        <div
          className={`absolute bottom-6 w-full ${isOpen ? "block" : "hidden"} md:block`}
        >
          <div className="mt-4 flex h-0 w-40 items-end">
            <div className="flex-grow border-t border-white"></div>
          </div>
          <button
            ref={triggerProfileMenu}
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            className="mt-4 flex items-center gap-4"
          >
            <img className="h-8" src={Profile} alt="" />
            <p className="text-sm font-medium text-white">username</p>
          </button>
        </div>
        {/* menu log out */}
        <div
          ref={profileMenuRef}
          className={`absolute bottom-[72px] left-0 w-full bg-white
       px-10 py-6 ${isProfileMenuOpen ? "block" : "hidden"}`}
        >
          <div className=" flex flex-col gap-4 text-secondary">
            <NavLink
              to="/profile"
              className="flex items-center gap-3 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.5 23q-.625 0-1.062-.437T13 21.5v-7q0-.625.438-1.062T14.5 13h7q.625 0 1.063.438T23 14.5v7q0 .625-.437 1.063T21.5 23zm0-1.5h7v-.8q-.625-.775-1.525-1.237T18 19t-1.975.463T14.5 20.7zM18 18q.625 0 1.063-.437T19.5 16.5t-.437-1.062T18 15t-1.062.438T16.5 16.5t.438 1.063T18 18m-8.75 4l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75L19.925 11H15.4q-.35-1.075-1.25-1.787t-2.1-.713q-1.45 0-2.475 1.025T8.55 12q0 1.2.675 2.1T11 15.35V22z"
                />
              </svg>

              <p>Account Setting</p>
            </NavLink>
            <NavLink
              to="/"
              className="flex items-center gap-3 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
                />
              </svg>

              <p>Log Out</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
