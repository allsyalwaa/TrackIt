import { NavLink } from "react-router-dom";
import Logo from "../assets/illustration-logo1.svg";
import Profile from "../assets/profile.svg";
import Alarm from "../assets/alarm.svg";
import Calender from "../assets/calender.svg";
import MoneyCalculator from "../assets/money-calculator.svg";
import Notes from "../assets/notes.svg";
import Reminders from "../assets/reminders.svg";
import Tasks from "../assets/tasks.svg";

export default function DashboardLayout() {
  return (
    <>
      <div className="flex h-screen ">
        {/* sidebar */}
        <div className="h-screen w-60 bg-primary px-10 py-6">
          <img className="h-10" src={Logo} alt="" />

          <div className=" mt-8 flex flex-col gap-4 text-white">
            <div className="flex items-center gap-3 text-sm font-medium">
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
              <NavLink to="/">Dashboard</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
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
              <NavLink to="/">Alarm</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
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
              <NavLink to="/">Calender</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4"
                  clip-rule="evenodd"
                />
              </svg>
              <NavLink to="/">Money Calculator</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
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
              <NavLink to="/">Notes</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
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
              <NavLink to="/">Reminders</NavLink>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M7.416 3A4.983 4.983 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a2.99 2.99 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"
                  />
                </g>
              </svg>
              <NavLink to="/">Tasks</NavLink>
            </div>
          </div>

          <div className="absolute bottom-6">
            <div className="mt-4 flex size-40 items-end">
              <div className="flex-grow border-t border-white"></div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img className="h-8" src={Profile} alt="" />

              <NavLink to="/" className="text-sm font-medium text-white">
                username
              </NavLink>
            </div>
          </div>
        </div>

        {/* main content */}

        <div className="flex-1 bg-white p-8 ">
          <h1 className="text-3xl font-bold text-secondary">
            Hello, username!
          </h1>
          <h2 className="mt-2 text-lg text-primary">
            How can TrackIt assist you today?
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">Alarm</h3>
              <img className="h-20" src={Alarm} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Set timely reminders for important tasks and events.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">Calender</h3>
              <img className="h-20" src={Calender} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Schedule and manage your events and deadlines.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">
                Money Calculator
              </h3>
              <img className="h-20" src={MoneyCalculator} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Track expenses and plan your budget easily.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">Notes</h3>
              <img className="h-20" src={Notes} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Store and organize your notes and ideas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">Reminders</h3>
              <img className="h-20" src={Reminders} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Get notifications for your important tasks.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
              <h3 className="text-xl font-bold text-primary">Tasks</h3>
              <img className="h-20" src={Tasks} alt="" />
              <p className="text-center text-sm font-medium text-primary/50">
                Create and manage your to-do lists efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
