import { useState, useEffect } from "react";
import CardEventList from "./CardEventList";
import ButtonPlus from "../ui/ButtonPlus";
import AddEvent from "./AddEvent";
import { getEvents } from "../../utils/FetchData";

export default function EventList({ onClose }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("mendapatkan Events");
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  // const data = [
  //   {
  //     id: 1,
  //     name: "Event 1",
  //     time: "10:00 AM",
  //   },
  //   {
  //     id: 2,
  //     name: "Event 2",
  //     time: "10:00 AM",
  //   },
  //   {
  //     id: 3,
  //     name: "Event 3",
  //     time: "10:00 AM",
  //   },
  // ];

  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);

  const handleOpenEventPopup = () => {
    setIsEventPopupOpen(true);
  };

  const handleCloseEventPopup = () => {
    setIsEventPopupOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center  ${isEventPopupOpen ? "bg-transparent" : "bg-black/50"}`}
        >
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg md:max-w-md">
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

            <p className="text-sm font-bold text-primary/50">
              Thursday, 2 May 2024
            </p>
            <hr className="mt-2 border-t border-primary/50" />

            {events.map((event) => (
              <CardEventList
                key={event.id}
                text={event.title}
                time={event.start}
              />
            ))}

            <ButtonPlus
              onClick={handleOpenEventPopup}
              className={"ml-auto mt-4"}
            />
          </div>
          {isEventPopupOpen && <AddEvent onClose={handleCloseEventPopup} />}
        </div>
      )}
    </>
  );
}
