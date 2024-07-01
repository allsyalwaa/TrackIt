import { NavLink } from "react-router-dom";
import Logo from "../assets/illustration-logo.svg";
import ButtonGoogle from "../components/ui/ButtonGoogle";
import Button from "../components/ui/Button";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: () => navigate("/dashboard"),
    flow: "auth-code",
  });
  return (
    <>
      <div className="container py-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <img className="h-20" src={Logo} alt="" />

          <h1 className="text-center text-3xl font-bold text-secondary">
            Log In
          </h1>

          <div>
            <ButtonGoogle onClick={() => login()}>
              Log in with google
            </ButtonGoogle>

            <div className="mt-4 flex  items-center px-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <form className="flex flex-col" action="">
              <input
                className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
                type="email"
                placeholder="Email"
              />
              <input
                className="mt-4  rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
                type="password"
                placeholder="Password"
              />

              <div className="mt-2 flex justify-end">
                <NavLink
                  to="/coming-soon"
                  className="text-xs font-medium text-primary"
                >
                  Forgot password?
                </NavLink>
              </div>

              <NavLink to="/dashboard">
                <Button variant="primary" className={"mt-6 w-full px-5 py-3"}>
                  Log In
                </Button>
              </NavLink>

              <p className="mt-2  text-xs font-medium text-black/50">
                By continuing, you are indicating that you have read and agree
                to the{" "}
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

            <div className="mt-6 flex items-center justify-center gap-1">
              <p className="text-xs font-medium text-black/50">
                Don&apos;t have an account?
              </p>
              <NavLink
                to="/sign-up"
                className="text-xs font-medium text-primary"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
