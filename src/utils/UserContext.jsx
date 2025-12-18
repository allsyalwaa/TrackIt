import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

// ⬇⬇⬇ INI YANG HILANG DARI FILE KAMU
export const useUserContext = () => {
  return useContext(UserContext);
};
