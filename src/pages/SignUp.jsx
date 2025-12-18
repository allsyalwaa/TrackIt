import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/illustration-logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
import ButtonGoogle from "../components/ui/ButtonGoogle";
import Button from "../components/ui/Button";
import { useUserContext } from "../utils/UseUser";
import {
  validatePassword,
  handleSignup,
} from "../utils/fetchdata/SignUpService";

export default function SignUp() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = useGoogleLogin({
    onSuccess: () => navigate("/dashboard"),
    flow: "auth-code",
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = (e) => {
    handleSignup(
      e,
      email,
      password,
      confirmPassword,
      setUser,
      setError,
      setPasswordError,
      navigate,
      BASE_URL,
    );
  };

  return (
    <div className="container py-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <img className="h-20" src={Logo} alt="Logo" />

        <h1 className="text-center text-3xl font-bold text-secondary">
          Check out TrackIt — it&apos;s free!
        </h1>

        <p className="w-2/3 text-center text-lg font-medium text-black/50">
          TrackIt helps individuals, professionals, and small businesses around
          the world simplify their daily activities and stay organized.
        </p>

        <div>
          <ButtonGoogle onClick={() => login()}>
            Sign up with Google
          </ButtonGoogle>

          <div className="mt-4 flex items-center px-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <input
              className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            {passwordError && (
              <p className="mt-2 text-xs text-red-500">{passwordError}</p>
            )}

            <input
              className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
              type="password"
              placeholder="Confirm a password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {error && error === "Passwords do not match" && (
              <p className="mt-2 text-xs text-red-500">{error}</p>
            )}

            <Button
              variant="primary"
              className={"mt-6 w-full px-5 py-3"}
              type="submit"
            >
              Sign Up
            </Button>

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
  );
}
