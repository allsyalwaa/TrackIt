import Logo from "../assets/illustration-logo.svg";
import Image1 from "../assets/illustration-task.svg";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";

export default function ComingSoon() {
  return (
    <>
      <div className="container py-16">
        <img src={Logo} className="mx-auto h-16" alt="" />
        <h1 className="mt-8 text-center text-3xl font-bold text-primary">
          Coming Soon
        </h1>
        <img src={Image1} className="mx-auto mt-4 h-64" alt="" />
        <NavLink to="/">
          <Button variant="primary" className=" mx-auto mt-6">
            Back to Home
          </Button>
        </NavLink>
      </div>
    </>
  );
}
