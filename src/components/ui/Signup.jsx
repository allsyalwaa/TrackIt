import { NavLink } from "react-router-dom";
import ButtonGoogle from "./ButtonGoogle";
import Button from "./Button";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: () => navigate("/dashboard"),
    flow: "auth-code",
  });
  return (
    <div>
      {/* ui login */}
      <div className="flex flex-col">
        {/* login google */}
        <ButtonGoogle onClick={() => login()} />

        <div className="mt-4 flex items-center px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <form className="flex flex-col" action="">
          <input
            className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-sm md:text-base"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-sm md:text-base"
            type="password"
            placeholder="Create a password"
          />

          <NavLink to="/dashboard">
            <Button variant="primary" className={"mt-6 w-full px-5 py-3"}>
              Sign Up
            </Button>
          </NavLink>

          <p className="mt-2 text-xs font-medium text-black/50">
            By signing up, you are indicating that you have read and agree to
            the{" "}
            <span className="text-primary">
              <NavLink
                to="/coming-soon"
                className="text-xs font-medium text-primary"
              >
                Terms of Use
              </NavLink>
            </span>{" "}
            and{" "}
            <span className="text-primary">
              <NavLink
                to="/coming-soon"
                className="text-xs font-medium text-primary"
              >
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
