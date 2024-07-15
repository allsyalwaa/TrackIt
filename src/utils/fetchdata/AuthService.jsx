import { validateEmail, validatePassword } from "../Validation";

export const handleSignup = async (
  e,
  email,
  password,
  confirmPassword,
  setUserId,
  navigate,
  setError,
  setPasswordError,
  BASE_URL,
) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    setError("Invalid email address");
    return;
  }
  if (!validatePassword(password)) {
    setPasswordError("Password must be at least 8 characters long");
    return;
  }
  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  const response = await fetch(BASE_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();
    setUserId(result.userId);
    navigate("/dashboard");
  } else {
    const result = await response.json();
    setError(result.message || "An error occurred");
  }
};

export const handleLogin = async (
  e,
  email,
  password,
  setError,
  setPasswordError,
  navigate,
  BASE_URL,
) => {
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
      localStorage.setItem("userId", result.id);
      navigate("/dashboard");
    } else {
      setError("Incorrect password");
    }
  } catch (err) {
    console.error("Error during fetch:", err);
    setError("An error occurred. Please try again.");
  }
};
