import Logo from "../../assets/illustration-logo.svg";
import Image1 from "../../assets/illustration-task.svg";
import Signup from "../ui/Signup";

export default function SecHero() {
  return (
    <section className="container my-12">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col content-center items-center gap-10 text-secondary md:flex-row md:justify-center">
          <h1 className="text-center text-6xl font-bold">Welcome to</h1>
          <img className="h-16 md:h-24 " src={Logo} alt="TrackIt" />
        </div>

        <p className="mt-6 text-center text-lg font-medium text-black/50 md:w-3/5 md:text-xl">
          TrackIt is your all-in-one web solution for effortlessly managing all
          your daily activities. Stay organized and productive with TrackIt -
          Everything in One Place!
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-screen-md gap-12 md:grid-cols-2 md:gap-36">
        <div className="order-2 mx-auto sm:w-2/3 md:order-1 md:w-full">
          <Signup />
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <img
            className="w-1/2 md:w-full"
            src={Image1}
            alt="illustration-task"
          />
        </div>
      </div>
    </section>
  );
}
