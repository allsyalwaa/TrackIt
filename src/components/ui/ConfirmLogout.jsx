import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function ConfirmLogout({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg md:max-w-lg">
            <div className="mb-4">
              <h2 className="text-md text-center font-semibold text-secondary md:text-xl">
                Are you sure you want to log out?
              </h2>
            </div>
            <div className="mt-6 flex justify-center gap-6">
              <NavLink to="/">
                <Button
                  className={" md:text-sm"}
                  variant="primary"
                  onClick={closePopup}
                >
                  Log Out
                </Button>
              </NavLink>
              <Button
                className={
                  "border-[#EE0C00] bg-[#EE0C00] text-xs md:w-1/4 md:text-sm"
                }
                variant="secondary"
                onClick={closePopup}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
