import { useState } from "react";
import Button from "../Button";
import { postReminder } from "../../../utils/fetchdata/ReminderService";
import { handleHoursInput, handleMinutesInput } from "../../../utils/TimeUtils";

export default function AddReminder({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2020);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [timePeriod, setTimePeriod] = useState("AM");
  const [description, setDescription] = useState("");

  const closePopup = () => {
    setIsOpen(false);
    onClose();
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
      await postReminder(reminderData);

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
                className="w-full border-none text-xl font-semibold text-secondary placeholder-secondary outline-none placeholder:text-xl placeholder:font-semibold"
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
                    onInput={(e) => handleHoursInput(e, setHour)}
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
                    onInput={(e) => handleMinutesInput(e, setMinute)}
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
                <Button className={"md:w-1/6"} variant="primary" type="submit">
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
