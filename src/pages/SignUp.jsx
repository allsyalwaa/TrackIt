import { NavLink } from "react-router-dom";
import Logo from "../assets/illustration-logo.svg";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import ButtonGoogle from "../components/ui/ButtonGoogle";
import Button from "../components/ui/Button";

export default function SignUp() {
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
            Check out TrackIt — it&apos;s free!
          </h1>

          <p className="w-2/3 text-center text-lg font-medium text-black/50">
            TrackIt helps individuals, professionals, and small businesses
            around the world simplify their daily activities and stay organized.
          </p>

          <div>
            <ButtonGoogle onClick={() => login()}>
              Sign up with Google
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
                placeholder="Enter your email"
              />
              <input
                className="mt-4  rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
                type="password"
                placeholder="Create a password"
              />

              <NavLink to="/dashboard">
                <Button variant="primary" className={"mt-6 w-full px-5 py-3"}>
                  Sign Up
                </Button>
              </NavLink>

              <p className="mt-2  text-xs font-medium text-black/50">
                By signing up, you are indicating that you have read and agree
                to the{" "}
                <span className="text-primary">
                  <NavLink to="/coming-soon" className="text-xs font-medium text-primary">
                    Terms of Use
                  </NavLink>
                </span>{" "}
                and{" "}
                <span className="text-primary">
                  <NavLink to="/coming-soon" className="text-xs font-medium text-primary">
                    Privacy Policy
                  </NavLink>
                </span>
                .
              </p>
            </form>

            <div className="mt-6 flex items-center justify-center gap-1">
              <p className="text-xs font-medium text-black/50">
                Already have an account?
              </p>
              <NavLink to="/login" className="text-xs font-medium text-primary">
                Log In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
