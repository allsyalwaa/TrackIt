import AddReminder from "../ui/AddReminder";
import ButtonPlus from "../ui/ButtonPlus";
import CardReminders from "../ui/CardReminders";

import { useState } from "react";

export default function SecReminders({
  data = [
    {
      id: 1,
      name: "Reminder name",
      time: "06.00 PM",
    },
    {
      id: 2,
      name: "Reminder name",
      time: "06.00 PM",
    },
  ],
}) {
  const [isReminderPopupOpen, setIsReminderPopupOpen] = useState(false);

  const handleOpenReminderPopup = () => {
    setIsReminderPopupOpen(true);
  };

  const handleCloseReminderPopup = () => {
    setIsReminderPopupOpen(false);
  };
  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Reminders</div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-4 flex flex-col gap-4">
        {data.map((reminder) => (
          <CardReminders
            key={reminder.id}
            text={reminder.name}
            time={reminder.time}
          />
        ))}
      </div>
      <button
        onClick={handleOpenReminderPopup}
        className="absolute bottom-8 right-8"
      >
        <ButtonPlus />
      </button>

      {isReminderPopupOpen && (
        <AddReminder onClose={handleCloseReminderPopup} />
      )}
    </section>
  );
}
