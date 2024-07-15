import { useEffect, useState } from "react";
import CardAlarm from "../ui/CardAlarm";
import RingingAlarm from "../ui/RingingAlarm";
import { getAlarm, postAlarm, deleteAlarm } from "../../utils/fetchdata/AlarmService";
import { validation } from "../../utils/Validation";

export default function SecAlarm() {
  const [alarm, setAlarm] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlarm().then((data) => {
      const sortedAlarms = data.sort((a, b) => b.id - a.id);
      setAlarm(sortedAlarms);
      setLoading(false);
    });
  }, []);

  const [ctime, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
  );
  const [cdate, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );
  const [isRinging, setIsRinging] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setTime(currentTime);
      setDate(currentDate);

      alarm.forEach((alarmItem) => {
        if (alarmItem.time === currentTime && alarmItem.date === currentDate) {
          setIsRinging(true);
          setCurrentAlarm(alarmItem);
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [alarm]);

  const [formData, setFormData] = useState({ minutes: "", "alarm-name": "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const hours = form.hours.value;
    const minutes = form.minutes.value;
    const name = form.elements["alarm-name"].value;

    setIsSubmitted(true);

    const errors = validation({ minutes, "alarm-name": name });
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formattedTime = new Date(
      `1970-01-01T${hours}:${minutes}:00`,
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const newAlarm = {
      name: name,
      time: formattedTime,
      date: cdate,
      setTime: new Date().toISOString(),
    };

    postAlarm(newAlarm).then(() => {
      getAlarm().then((data) => {
        const sortedAlarms = data.sort((a, b) => b.id - a.id);
        setAlarm(sortedAlarms);
      });
    });

    form.reset();
    setFormData({ minutes: "", "alarm-name": "" });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleCloseAlarm = (alarmId) => {
    setIsRinging(false);
    setCurrentAlarm(null);
    deleteAlarm(alarmId).then(() => {
      getAlarm().then((data) => {
        const sortedAlarms = data.sort((a, b) => b.id - a.id);
        setAlarm(sortedAlarms);
      });
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "minutes" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "minutes") {
      const errors = validation({ ...formData, [name]: value });
      setErrors(errors);
    }

    if (name === "alarm-name" && value.length >= 3 && value.length <= 20) {
      setErrors((prev) => ({ ...prev, "alarm-name": null }));
    } else if (name === "alarm-name") {
      const errors = validation({ ...formData, [name]: value });
      setErrors(errors);
    }
  };

  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <h1 className="text-xl font-bold text-primary md:text-2xl">{cdate}</h1>
        <h1 className="text-5xl font-bold text-secondary md:text-7xl">
          {ctime}
        </h1>
      </div>

      {isRinging && currentAlarm && (
        <RingingAlarm
          onClose={() => handleCloseAlarm(currentAlarm.id)}
          alarm={currentAlarm}
        />
      )}

      <form className="mt-6" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium text-primary">Set alarm time</h2>
        <div className="grid gap-3 md:grid-cols-2 md:gap-6">
          <div>
            <label className="text-sm text-primary" htmlFor="hours">
              Hours
            </label>
            <div className="relative mt-2 rounded-lg border-[1.5px] border-primary px-2 py-3">
              <select
                className="mx-auto w-full text-lg font-bold text-secondary"
                name="hours"
                id="hours"
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i.toString().padStart(2, "0")}>
                    {i % 12 === 0 ? 12 : i % 12} {i < 12 ? "AM" : "PM"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm text-primary" htmlFor="minutes">
              Minutes
            </label>
            <input
              type="text"
              placeholder="00"
              className="relative mx-auto mt-2 w-full rounded-lg border-[1.5px] border-primary px-2 py-3 text-lg font-bold text-secondary"
              name="minutes"
              id="minutes"
              maxLength="2"
              onChange={handleInput}
              value={formData.minutes}
            />
            {errors?.minutes && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.minutes}
              </p>
            )}
          </div>
        </div>
        <input
          className="mt-6 w-full rounded-lg border-[1.5px] border-primary px-2 py-3 placeholder-primary/50"
          type="text"
          name="alarm-name"
          placeholder="Alarm name"
          onChange={handleInput}
          value={formData["alarm-name"]}
        />
        {isSubmitted && errors?.["alarm-name"] && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors["alarm-name"]}
          </p>
        )}

        <button
          className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white"
          type="submit"
        >
          Set Alarm
        </button>
      </form>
      <hr className="mt-6 border-t border-primary/50" />

      <div className="mt-4">
        {loading ? (
          <div className="text-center text-primary">Loading...</div>
        ) : alarm.length > 0 ? (
          alarm.map((item) => (
            <CardAlarm
              key={item.id}
              text={item.name}
              time={item.time}
              date={item.date}
            />
          ))
        ) : (
          <div className="text-center text-primary">No alarms set</div>
        )}
      </div>
    </section>
  );
}
