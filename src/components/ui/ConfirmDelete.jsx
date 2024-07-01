import { useState } from "react";
import Button from "./Button";

export default function ConfirmDelete({ onClose }) {
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
                Are you sure you want to delete?
              </h2>
            </div>
            <div className="mt-6 flex justify-center gap-6">
              <Button
                className={" md:text-sm"}
                variant="primary"
                onClick={closePopup}
              >
                Delete
              </Button>

              <Button
                className={" md:w-1/4 md:text-sm"}
                variant="red"
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
