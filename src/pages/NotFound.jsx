import notFound from "../assets/notfound.svg";
import Logo from "../assets/illustration-logo.svg";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="container py-16">
        <img src={Logo} className="mx-auto h-16" alt="" />
        <h1 className="mt-8 text-center text-3xl font-bold text-primary">
          Oops! Page Not Found
        </h1>
        <img src={notFound} className="mx-auto h-72" alt="" />
        <NavLink to="/">
          <Button variant="primary" className=" mx-auto -mt-8">
            Back to Home
          </Button>
        </NavLink>
      </div>
    </>
  );
}
