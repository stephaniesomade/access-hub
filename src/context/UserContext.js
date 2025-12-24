import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "admin", active: true },
    { id: 2, name: "Bob", role: "viewer", active: true },
    { id: 2, name: "Trina", role: "admin", active: true },
    { id: 2, name: "Sam", role: "viewer", active: true },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

