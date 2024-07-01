import { useState } from "react";
import Button from "./Button";

export default function AddReminder({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xs md:max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex justify-end">
              <button onClick={closePopup} className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
                  />
                </svg>
              </button>
            </div>

            <form className="mt-4 flex w-full flex-col justify-start" action="">
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border-none placeholder-secondary outline-none placeholder:text-xl placeholder:font-semibold"
                placeholder="Task Name"
              />
              <hr className="border-t-1 mt-2 w-full border-secondary" />

              <div className="mt-4 grid grid-cols-4 items-center justify-between">
                <label className="text-lg text-primary" htmlFor="hours">
                  Date :
                </label>

                <select
                  className="mx-auto text-lg font-medium text-secondary"
                  name="days"
                  id="days"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                </select>
                <select
                  className="mx-auto text-lg font-medium text-secondary"
                  name="months"
                  id="months"
                >
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">December</option>
                </select>

                <select
                  className="mx-auto text-lg font-medium text-secondary"
                  name="years"
                  id="years"
                >
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                  <option value="">2027</option>
                  <option value="">2028</option>
                  <option value="">2029</option>
                  <option value="">2030</option>
                </select>
              </div>

              <div className="mt-4 grid grid-cols-4 items-center justify-between">
                <label
                  className="col-span-2 text-lg text-primary"
                  htmlFor="hours"
                >
                  Time :
                </label>

                <select
                  className="mx-auto text-lg font-medium text-secondary"
                  name="hours"
                  id="hours"
                >
                  <option value="">6 PM</option>
                  <option value="">7 PM</option>
                  <option value="">8 PM</option>
                  <option value="">9 PM</option>
                  <option value="">10 PM</option>
                  <option value="">11 PM</option>
                  <option value="">12 PM</option>
                  <option value="">1 PM</option>
                  <option value="">2 PM</option>
                  <option value="">3 PM</option>
                  <option value="">4 PM</option>
                  <option value="">5 PM</option>
                  <option value="">6 AM</option>
                  <option value="">7 AM</option>
                  <option value="">8 AM</option>
                  <option value="">9 AM</option>
                  <option value="">10 AM</option>
                  <option value="">11 AM</option>
                  <option value="">12 AM</option>
                  <option value="">1 AM</option>
                  <option value="">2 AM</option>
                  <option value="">3 AM</option>
                  <option value="">4 AM</option>
                  <option value="">5 AM</option>
                </select>

                <select
                  className="mx-auto text-lg font-medium text-secondary"
                  name="minutes"
                  id="minutes"
                >
                  <option value="">00</option>
                  <option value="">05</option>
                  <option value="">10</option>
                  <option value="">15</option>
                  <option value="">20</option>
                  <option value="">25</option>
                  <option value="">30</option>
                  <option value="">35</option>
                  <option value="">40</option>
                  <option value="">45</option>
                  <option value="">50</option>
                  <option value="">55</option>
                </select>
              </div>

              <textarea
                className="mt-4 h-36 border-none placeholder-primary/50"
                type="text"
                placeholder="Description :"
              />

              <div className="mt-6 flex justify-end">
                <Button className={"md:w-1/6"} variant="primary">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
