import { useState, useEffect } from "react";
import Button from "./Button";

export default function EditReminder({ onClose, reminderId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2020);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log("BASE_URL:", BASE_URL); // Log BASE_URL
    console.log("reminderId:", reminderId); // Log reminderId

    // Fetch the existing reminder data when the component is mounted
    const fetchReminderData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/reminder/${reminderId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log data fetched
        setTitle(data.title);
        const [year, month, day] = data.date.split("-");
        setYear(parseInt(year, 10));
        setMonth(month);
        setDay(parseInt(day, 10));
        const [hour, minute] = data.time.split(":");
        setHour(parseInt(hour, 10));
        setMinute(parseInt(minute, 10));
        setDescription(data.description);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Buat objek yang berisi data form
    const reminderData = {
      title: title,
      date: `${year}-${month}-${day}`,
      time: `${hour}:${minute}`,
      description: description,
    };

    try {
      // Kirim data ke server menggunakan method PUT untuk memperbarui reminder
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

      // Reset form dan tutup popup jika berhasil
      setTitle("");
      setDay(1);
      setMonth("January");
      setYear(2020);
      setHour(0);
      setMinute(0);
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
                />
                <hr className="border-t-1 mt-2 w-full border-secondary" />

                <div className="relative mt-4 grid grid-cols-4 items-center justify-between gap-6">
                  <label className="text-lg text-primary" htmlFor="days">
                    Date :
                  </label>

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

                <div className="relative mt-4 grid grid-cols-4 items-center justify-between gap-6">
                  <label
                    className="col-span-2 text-lg text-primary"
                    htmlFor="hours"
                  >
                    Time :
                  </label>

                  <select
                    className="mx-auto w-full text-lg font-medium text-secondary"
                    name="hours"
                    id="hours"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                  >
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour < 10 ? `0${hour}` : hour}:00
                      </option>
                    ))}
                  </select>

                  <select
                    className="mx-auto w-full text-lg font-medium text-secondary"
                    name="minutes"
                    id="minutes"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                  >
                    {[0, 15, 30, 45].map((minute) => (
                      <option key={minute} value={minute}>
                        {minute < 10 ? `0${minute}` : minute}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  className="mt-4 h-36 border-none text-primary outline-none"
                  type="text"
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
