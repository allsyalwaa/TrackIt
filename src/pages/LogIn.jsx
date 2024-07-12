import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/illustration-logo.svg";
import ButtonGoogle from "../components/ui/ButtonGoogle";
import Button from "../components/ui/Button";
import { useGoogleLogin } from "@react-oauth/google";

export default function LogIn() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = useGoogleLogin({
    onSuccess: () => navigate("/dashboard"),
    flow: "auth-code",
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setError(""); // Clear the error message when the user starts typing a new password
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("Response from API:", result);

      if (response.ok && result.id) {
        // Assuming response.ok and result contains user id or similar field
        // Here we assume login is successful if `id` is present in response
        // Save necessary user data (e.g., to localStorage)
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/dashboard");
      } else {
        setError("Incorrect password");
      }
    } catch (err) {
      console.error("Error during fetch:", err);
      setError("An error occurred. Please try again.");
    }
  };

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
              Log in with Google
            </ButtonGoogle>

            <div className="mt-4 flex items-center px-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <form className="flex flex-col" onSubmit={handleLogin}>
              <input
                className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="mt-4 rounded-full border-[1.5px] border-primary/50 px-5 py-3 text-xs placeholder-primary/50 sm:text-base"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && (
                <p className="mt-2 text-xs text-red-500">{passwordError}</p>
              )}
              {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

              <div className="mt-2 flex justify-end">
                <NavLink
                  to="/coming-soon"
                  className="text-xs font-medium text-primary"
                >
                  Forgot password?
                </NavLink>
              </div>

              <Button
                variant="primary"
                className={"mt-6 w-full px-5 py-3"}
                type="submit"
              >
                Log In
              </Button>

              <p className="mt-2 text-xs font-medium text-black/50">
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
