import { useState } from "react";
import Button from "./Button";

export default function AddTransaction({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-64 rounded-lg bg-white p-6 shadow-lg md:max-w-md">
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
                className="w-full border-none placeholder-primary outline-none placeholder:text-xl placeholder:font-semibold"
                placeholder="Transaction name"
              />
              <hr className="border-t-1 mt-2 w-full border-primary" />

              <select className="mt-4 text-lg  text-primary/50">
                <option value="">Balance name</option>
                <option value="">Balance name</option>
                <option value="">Balance name</option>
              </select>

              <input
                className="mt-4  rounded-lg border-[1.5px] border-primary/50 px-4 py-1 placeholder-primary/50"
                type="number"
                placeholder="Amount"
              />

              <div className="mt-6 flex justify-end">
                <Button className={"md:w-1/4"} variant="primary">
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
