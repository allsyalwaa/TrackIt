import { useState } from "react";
import Button from "./Button";
import { getEvents } from "../../utils/FetchData";

export default function AddEvent({ onClose, selectedDate, onEventAdded }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
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

  const handleHoursInput = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ""); // Hanya angka
    if (value !== "" && (parseInt(value) < 1 || parseInt(value) > 12)) {
      value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
    }
    event.target.value = value;
  };

  const handleMinutesInput = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ""); // Hanya angka
    if (value.length > 2) {
      value = value.slice(0, 2); // Batasi panjang input maksimal 2 karakter
    }
    if (value !== "" && parseInt(value) > 59) {
      value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
    }
    event.target.value = value;
  };

  const BASE_URL = import.meta.env.VITE_API_URL;

  const postEvents = async (events) => {
    try {
      const response = await fetch(BASE_URL + "/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(events),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      onEventAdded();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    let hours = form.hours.value;
    let minutes = form.minutes.value;
    const title = form.title.value;
    const time = form.time.value;

    // Tambahkan 0 di depan jika panjang input 1
    if (hours.length === 1) {
      hours = "0" + hours;
    }
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }

    console.log(title, hours, minutes, time);
    const date = `${selectedDate}T${hours}:${minutes}:00${time}.000Z`;

    console.log(date);

    const newEvent = {
      title: title,
      start: `${selectedDate}T${hours}:${minutes}:00${time}.000Z`,
      end: `${selectedDate}T${hours}:${minutes}:00${time}.000Z`,
    };

    postEvents(newEvent);
    closePopup();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
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
            <form
              className="mt-4 flex w-full flex-col justify-start"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border-none placeholder-secondary outline-none placeholder:text-xl placeholder:font-semibold"
                placeholder="Add title"
              />
              <hr className="border-t-1 mt-2 w-full border-secondary" />

              <div className="relative mt-4 grid grid-cols-3 items-center justify-between">
                <label className="text-lg text-primary" htmlFor="hours">
                  Time :
                </label>
                <div className="col-span-2 grid grid-cols-3">
                  <input
                    type="text"
                    placeholder="12"
                    className="mx-auto w-full text-lg font-medium text-secondary placeholder-secondary/50 outline-none placeholder:text-base placeholder:font-semibold"
                    name="hours"
                    id="hours"
                    maxLength="2"
                    pattern="[0-9]*"
                    onInput={handleHoursInput}
                  />

                  <input
                    type="text"
                    placeholder="00"
                    className="mx-auto w-full text-lg font-medium text-secondary placeholder-secondary/50 outline-none placeholder:text-base placeholder:font-semibold"
                    name="minutes"
                    id="minutes"
                    maxLength="2"
                    pattern="[0-9]*"
                    onInput={handleMinutesInput}
                  />

                  <select
                    className="mx-auto w-full text-lg font-medium text-secondary"
                    name="time"
                    id="time"
                  >
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>
              </div>

              {/* <div className="mt-4 grid grid-cols-3 justify-between">
                <label className="text-lg text-primary">Location :</label>
                <input
                  type="text"
                  className="col-span-2  mr-0 border-none placeholder-secondary/50 outline-none placeholder:text-base placeholder:font-semibold"
                  placeholder="Location"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 justify-between">
                <label className="text-lg text-primary">Description :</label>
                <textarea
                  className="col-span-2 border-none placeholder-secondary/50 outline-none placeholder:text-base placeholder:font-semibold"
                  placeholder="Description"
                />
              </div> */}

              <div className="mt-6 flex justify-end">
                <Button
                  className={"md:w-1/4"}
                  variant="primary"
                  type={"submit"}
                >
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
