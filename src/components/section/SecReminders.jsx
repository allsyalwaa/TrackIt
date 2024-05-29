import ButtonPlus from "../ui/ButtonPlus";
import CardReminders from "../ui/CardReminders";

export default function SecReminders() {
  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Reminders</div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-4 flex flex-col gap-4">
        <CardReminders text="Reminder name" time="06.00 PM" />
        <CardReminders text="Reminder name" time="06.00 PM" />
        <CardReminders text="Reminder name" time="06.00 PM" />
        <CardReminders text="Reminder name" time="06.00 PM" />
      </div>
      <div className="absolute bottom-8 right-8">
        <ButtonPlus />
      </div>
    </section>
  );
}
