import { useState, useEffect } from "react";
import CardEventList from "./CardEventList";
import ButtonPlus from "../ui/ButtonPlus";
import AddEvent from "./AddEvent";
import { getEvents } from "../../utils/FetchData";

export default function EventList({ onClose, selectedDate, onEventAdded }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("mendapatkan Events");
    getEvents(selectedDate).then((data) => {
      const sortedData = sortEvents(data);
      setEvents(sortedData);
      setLoading(false);
    });
  }, [selectedDate]);

  const sortEvents = (events) => {
    return events.sort((a, b) => {
      const timeA = new Date(a.start).getTime();
      const timeB = new Date(b.start).getTime();
      if (timeA === timeB) {
        return a.title.localeCompare(b.title);
      }
      return timeA - timeB;
    });
  };

  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);

  const handleOpenEventPopup = () => {
    setIsEventPopupOpen(true);
  };

  const handleCloseEventPopup = () => {
    setIsEventPopupOpen(false);
  };

  const handleEventAdded = () => {
    getEvents(selectedDate).then((data) => {
      const sortedData = sortEvents(data);
      setEvents(sortedData);
    });
    onEventAdded();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    let hour = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hour}:${minutes} ${ampm}`;
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
                  time={formatTime(event.start)}
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
