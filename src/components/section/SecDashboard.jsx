import Alarm from "../../assets/alarm.svg";
import Calender from "../../assets/calender.svg";
import MoneyCalculator from "../../assets/money-calculator.svg";
import Notes from "../../assets/notes.svg";
import Reminders from "../../assets/reminders.svg";
import Tasks from "../../assets/tasks.svg";

import CardDashboard from "../ui/CardDashboard";

export default function SecDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-secondary">Hello, username!</h1>
      <h2 className="mt-2 text-lg text-primary">
        How can TrackIt assist you today?
      </h2>

      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <CardDashboard
          link={"/alarm"}
          text1="Alarm"
          text2="Set timely reminders for important tasks and events."
          image={Alarm}
        ></CardDashboard>
        <CardDashboard
          link={"/calender"}
          text1="Calender"
          text2="Schedule and manage your events and deadlines."
          image={Calender}
        ></CardDashboard>
        <CardDashboard
          link={"/money-calculator"}
          text1="Money Calculator"
          text2="Track expenses and plan your budget easily."
          image={MoneyCalculator}
        ></CardDashboard>
        <CardDashboard
          link={"/notes"}
          text1="Notes"
          text2="Store and organize your notes and ideas."
          image={Notes}
        ></CardDashboard>
        <CardDashboard
          link={"/reminders"}
          text1="Reminders"
          text2="Get notifications for your important tasks."
          image={Reminders}
        ></CardDashboard>
        <CardDashboard
          link={"/tasks"}
          text1="Tasks"
          text2="Create and manage your to-do lists efficiently."
          image={Tasks}
        ></CardDashboard>
      </div>
    </section>
  );
}
