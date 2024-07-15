import EditBalance from "../editcontent/EditBalance";
import { useState } from "react";
import { rupiahFormat } from "../../../utils";

export default function CardBalance({ text, money }) {
  const [isBalancePopupOpen, setIsBalancePopupOpen] = useState(false);

  const handleOpenBalancePopup = () => {
    setIsBalancePopupOpen(true);
  };

  const handleCloseBalancePopup = () => {
    setIsBalancePopupOpen(false);
  };
  return (
    <div className="mt-2 flex items-center justify-between gap-6 md:grid-cols-5">
      <p className="md:text-normal text-sm font-medium text-primary/50">
        {text} :
      </p>
      <div className="flex gap-4">
        <p className="md:text-normal text-sm font-medium text-secondary">
          {rupiahFormat(money)}
        </p>

        <button onClick={handleOpenBalancePopup} className=" text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
            />
          </svg>
        </button>
      </div>
      {isBalancePopupOpen && <EditBalance onClose={handleCloseBalancePopup} />}
    </div>
  );
}
