import { useState, useEffect } from "react";
import Button from "./Button";

export default function EditReminder({ onClose, reminderId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2020);
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [timePeriod, setTimePeriod] = useState("AM");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log(reminderId);
    const fetchReminderData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/reminder/${reminderId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("EditReminder data fetched:", data);
        setTitle(data.name);

        const dateTime = new Date(data.dateTime);
        setYear(dateTime.getFullYear());
        setMonth(dateTime.toLocaleString("default", { month: "long" }));
        setDay(dateTime.getDate());

        let hours = dateTime.getHours();
        let period = "AM";
        if (hours >= 12) {
          period = "PM";
          if (hours > 12) {
            hours -= 12;
          }
        } else if (hours === 0) {
          hours = 12;
        }

        setHour(hours.toString().padStart(2, "0"));
        setMinute(dateTime.getMinutes().toString().padStart(2, "0"));
        setTimePeriod(period);
        setDescription(data.description || "");
      } catch (error) {
        console.error("Error fetching reminder data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (reminderId) {
      fetchReminderData();
    }
  }, [reminderId, BASE_URL]);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  const handleHoursInput = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ""); // Hanya angka
    if (value !== "" && (parseInt(value) < 1 || parseInt(value) > 12)) {
      value = value.slice(0, -1); // Hapus karakter terakhir jika tidak valid
    }
    setHour(value);
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
    setMinute(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formattedHour = hour.length === 1 ? "0" + hour : hour;
    let formattedMinute = minute.length === 1 ? "0" + minute : minute;

    const reminderData = {
      title: title,
      date: `${year}-${month}-${day}`,
      time: `${formattedHour}:${formattedMinute} ${timePeriod}`,
      description: description,
    };

    try {
      const response = await fetch(`${BASE_URL}/reminder/${reminderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setTitle("");
      setDay(1);
      setMonth("January");
      setYear(2020);
      setHour("");
      setMinute("");
      setDescription("");
      closePopup();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg md:max-w-2xl">
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

            {isLoading ? (
              <div className="flex justify-center text-sm text-primary">
                <p>Loading...</p>
              </div>
            ) : (
              <form
                className="mt-4 flex w-full flex-col justify-start"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border-none text-xl font-semibold text-secondary outline-none"
                  placeholder="Reminder Name"
                />
                <hr className="border-t-1 mt-2 w-full border-secondary" />

                <div className="relative mt-4 grid grid-cols-3 items-center justify-between">
                  <label className="text-lg text-primary" htmlFor="days">
                    Date :
                  </label>
                  <div className="col-span-2 grid grid-cols-3 gap-6">
                    <select
                      className="mx-auto w-full text-lg font-medium text-secondary"
                      name="days"
                      id="days"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    >
                      {[...Array(31).keys()].map((day) => (
                        <option key={day + 1} value={day + 1}>
                          {day + 1}
                        </option>
                      ))}
                    </select>

                    <select
                      className="mx-auto w-full text-lg font-medium text-secondary"
                      name="months"
                      id="months"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>

                    <select
                      className="mx-auto w-full text-lg font-medium text-secondary"
                      name="years"
                      id="years"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      {[...Array(11).keys()].map((year) => (
                        <option key={year + 2020} value={year + 2020}>
                          {year + 2020}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-3 items-center justify-between">
                  <label className="text-lg text-primary" htmlFor="hours">
                    Time :
                  </label>
                  <div className="col-span-2 grid grid-cols-3 gap-6">
                    <input
                      type="text"
                      placeholder="12"
                      className="mx-auto w-full text-lg font-medium text-secondary placeholder-secondary/50 outline-none placeholder:text-base placeholder:font-semibold"
                      name="hours"
                      id="hours"
                      maxLength="2"
                      pattern="[0-9]*"
                      value={hour}
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
                      value={minute}
                      onInput={handleMinutesInput}
                    />

                    <select
                      className="mx-auto w-full text-lg font-medium text-secondary"
                      name="timePeriod"
                      id="timePeriod"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(e.target.value)}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <textarea
                  className="mt-4 h-36 border-none text-primary placeholder-primary/50 outline-none"
                  type="text"
                  placeholder="Description :"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="mt-6 flex justify-end">
                  <Button
                    className={"md:w-1/6"}
                    variant="primary"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
