import { useState, useEffect } from "react";
import CardEventList from "./cardcontent/CardEventList";
import ButtonPlus from "../ui/ButtonPlus";
import AddEvent from "./addcontent/AddEvent";
import { getEvents } from "../../utils/fetchdata/EventService";
import { sortEvents, formatDate, formatTime } from "../../utils/DateUtils";

export default function EventList({ onClose, selectedDate, onEventAdded }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);

  useEffect(() => {
    getEvents(selectedDate).then((data) => {
      console.log(data);
      const sortedData = sortEvents(data);
      setEvents(sortedData);
      setLoading(false);
    });
  }, [selectedDate]);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOpenEventPopup = () => {
    setIsEventPopupOpen(true);
  };

  const handleCloseEventPopup = () => {
    setIsEventPopupOpen(false);
  };

  const handleEventAdded = () => {
    getEvents(selectedDate).then((data) => {
      console.log(data);
      const sortedData = sortEvents(data);
      setEvents(sortedData);
    });
    onEventAdded();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isEventPopupOpen ? "bg-transparent" : "bg-black/50"
          }`}
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
              {formatDate(selectedDate)}
            </p>
            <hr className="mt-2 border-t border-primary/50" />

            {loading ? (
              <div className="mt-2 text-center text-xs text-primary">
                Loading...
              </div>
            ) : events.length > 0 ? (
              events.map((event) => (
                <CardEventList
                  key={event.id}
                  text={event.title}
                  time={formatTime(event.calendar)}
                />
              ))
            ) : (
              <div className="mt-2 text-center text-xs text-primary">
                No event
              </div>
            )}

            <ButtonPlus
              onClick={handleOpenEventPopup}
              className={"ml-auto mt-4"}
            />
          </div>
          {isEventPopupOpen && (
            <AddEvent
              onClose={handleCloseEventPopup}
              selectedDate={selectedDate}
              onEventAdded={handleEventAdded}
            />
          )}
        </div>
      )}
    </>
  );
}
