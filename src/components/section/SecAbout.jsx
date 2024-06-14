import { NavLink } from "react-router-dom";
import Image2 from "../../assets/illustration-dashboard.svg";
import CardAbout from "../ui/CardAbout";

export default function About() {
  return (
    <section id="about" className="container my-12">
      <div className="flex items-center justify-center">
        <img className="mt-20 w-2/3" src={Image2} alt="" />
      </div>

      <h2 className="mt-7 text-center text-4xl font-semibold text-secondary">
        Everything You Need in One Place
      </h2>

      <p className="mt-6 text-center text-lg font-medium text-primary">
        Your TrackIt account provides you access to all these features and more:
      </p>

      <div className="mt-6 grid gap-x-8 gap-y-8 md:grid-cols-2 ">
        <CardAbout
          text="A user-friendly interface designed for you, not for tech experts,
            ensuring ease and simplicity."
        />
        <CardAbout
          text="A comprehensive view of your daily activities, accessible anywhere
            to keep you organized."
        />
        <CardAbout
          text="The peace of mind that comes with knowing you're always on top of
        your tasks and schedules."
        />
        <CardAbout
          text="Support from our dedicated team for task management, financial
            planning, and productivity coaching."
        />
      </div>

      <div className="flex justify-center">
        <NavLink to="/sign-up">
          <button className="mt-8 rounded-full border-[1.5px] border-secondary bg-secondary px-8 py-2  font-medium text-white">
            Join Us
          </button>
        </NavLink>
      </div>
    </section>
  );
}
