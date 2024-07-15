export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const handleSignup = async (
  e,
  email,
  password,
  confirmPassword,
  setUser,
  setError,
  setPasswordError,
  navigate,
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

  try {
    const response = await fetch(BASE_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      localStorage.setItem("userId", 2);
      navigate("/dashboard");
    } else {
      const result = await response.json();
      setError(result.message || "An error occurred");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    setError("An error occurred. Please try again.");
  }
};
