import Logo from "../../assets/illustration-logo.svg";
import Image1 from "../../assets/illustration-task.svg";
import Login from "../ui/Login";

export default function SecHero() {
  return (
    <section className="container my-12">
      <div className="flex flex-col items-center ">
        <div className="flex items-center justify-center gap-10 text-secondary">
          <h1 className="text-6xl font-bold">Welcome to</h1>
          <img className="h-24 " src={Logo} alt="TrackIt" />
        </div>

        <p className="mt-6 w-3/5 text-center text-xl font-medium text-black/50">
          TrackIt is your all-in-one web solution for effortlessly managing all
          your daily activities. Stay organized and productive with TrackIt -
          Everything in One Place!
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-screen-md grid-cols-2 gap-36">
        <Login />
        <div>
          <img className="w-full" src={Image1} alt="illustration-task" />
        </div>
      </div>
    </section>
  );
}
