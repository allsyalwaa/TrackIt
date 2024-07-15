import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState({
    email: "",
    username: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(BASE_URL + `/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser({
            email: data.email,
            username: data.username,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      setUser({
        email: "syalwa@gmail.com",
        username: "syalwa",
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
