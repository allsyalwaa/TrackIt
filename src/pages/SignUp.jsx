import { NavLink } from "react-router-dom";
import Logo from "../assets/illustration-logo.svg";

export default function SignUp() {
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
            <div className=" flex items-center justify-center gap-3 rounded-full border-[1.5px] border-primary py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ffc107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#ff3d00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4caf50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976d2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>

              <p className=" text-lg font-medium text-primary">
                Sign up with Google
              </p>
            </div>

            <div className="mt-4 flex  items-center px-4">
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
                className="mt-4  rounded-full border-[1.5px] border-primary/50 px-5 py-3 placeholder-primary/50"
                type="password"
                placeholder="Create a password"
              />

              <NavLink to="/dashboard">
                <button className="mt-6  w-full rounded-full border-[1.5px] border-primary bg-primary px-5  py-3 font-medium text-white">
                  Sign Up
                </button>
              </NavLink>
              <p className="mt-2  text-xs font-medium text-black/50">
                By signing up, you are indicating that you have read and agree
                to the{" "}
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
