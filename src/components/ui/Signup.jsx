import { NavLink } from "react-router-dom";
import ButtonGoogle from "./ButtonGoogle";
import Button from "./Button";

export default function Signup() {
  return (
    <div>
      {/* ui login */}
      <div className="flex flex-col">
        {/* login google */}
        <ButtonGoogle />

        <div className="mt-4 flex items-center px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <form className="flex flex-col" action="">
          <input
            className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 placeholder-primary/50"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 placeholder-primary/50"
            type="password"
            placeholder="Create a password"
          />

          <Button variant="primary" className={"mt-6 px-5 py-3"}>
            Sign Up
          </Button>

          <p className="mt-2 text-xs font-medium text-black/50">
            By signing up, you are indicating that you have read and agree to
            the{" "}
            <span className="text-primary">
              <NavLink to="/" className="text-xs font-medium text-primary">
                Terms of Use
              </NavLink>
            </span>{" "}
            and{" "}
            <span className="text-primary">
              <NavLink to="/" className="text-xs font-medium text-primary">
                Privacy Policy
              </NavLink>
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
