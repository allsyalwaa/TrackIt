import { useEffect, useState } from "react";
import AddReminder from "../ui/AddReminder";
import ButtonPlus from "../ui/ButtonPlus";
import CardReminders from "../ui/CardReminders";
import { getReminders } from "../../utils/fetchdata/ReminderService";
import { extractTime } from "../../utils/TimeUtils";

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
    getReminders().then((data) => {
      const remindersWithLastEdited = data.map((reminder) => ({
        ...reminder,
        lastEdited: reminder.lastEdited || new Date().toISOString(),
      }));

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
