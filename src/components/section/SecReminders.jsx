import AddReminder from "../ui/AddReminder";
import ButtonPlus from "../ui/ButtonPlus";
import CardReminders from "../ui/CardReminders";

import { useEffect, useState } from "react";
import { getReminders } from "../../utils/FetchData";

export default function SecReminders() {
  const [isReminderPopupOpen, setIsReminderPopupOpen] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenReminderPopup = () => {
    setIsReminderPopupOpen(true);
  };

  const handleCloseReminderPopup = () => {
    setIsReminderPopupOpen(false);
  };

  useEffect(() => {
    console.log("mendapatkan Reminders");
    getReminders().then((data) => {
      // Tambahkan properti lastEdited jika tidak ada
      const remindersWithLastEdited = data.map((reminder) => ({
        ...reminder,
        lastEdited: reminder.lastEdited || new Date().toISOString(),
      }));

      // Urutkan reminder berdasarkan lastEdited
      remindersWithLastEdited.sort(
        (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited),
      );

      setReminders(remindersWithLastEdited);
      setIsLoading(false);
    });
  }, []);

  const handleDeleteReminder = (reminderId) => {
    setReminders(reminders.filter((reminder) => reminder.id !== reminderId));
  };

  const convertToAmPm = (time) => {
    const [hour, minute, second] = time.split(":");
    let hourInt = parseInt(hour);
    const ampm = hourInt >= 12 ? "PM" : "AM";
    hourInt = hourInt % 12 || 12;
    return `${hourInt}:${minute} ${ampm}`;
  };

  const extractTime = (dateTimeString) => {
    // Memisahkan tanggal dan waktu
    const [date, time] = dateTimeString.split("T");
    // Menghilangkan karakter yang tidak berguna
    const formattedTime = time.split(":00Z")[0];
    // Mengonversi waktu ke format AM/PM
    return convertToAmPm(formattedTime);
  };

  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Reminders</div>
      <hr className="mt-4 border-t border-primary/50" />
      {isLoading ? (
        <div className="mt-4 text-center text-sm text-primary">Loading...</div>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {reminders.map((reminder) => (
            <CardReminders
              key={reminder.id}
              text={reminder.name}
              time={extractTime(reminder.dateTime)}
              id={reminder.id}
              onDelete={handleDeleteReminder}
            />
          ))}
        </div>
      )}

      <ButtonPlus
        className={"absolute bottom-8 right-8"}
        onClick={handleOpenReminderPopup}
      />

      {isReminderPopupOpen && (
        <AddReminder onClose={handleCloseReminderPopup} />
      )}
    </section>
  );
}
