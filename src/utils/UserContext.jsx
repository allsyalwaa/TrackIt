import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const BASE_URL = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState({
    email: "default@mail.com",
    username: "default",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
