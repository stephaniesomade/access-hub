import { createContext, useState } from "react";
import { generateId } from "../utils/generateId";
export const UserContext = createContext();

const initialUsers = [
  { id: 'd18eec', name: "Alice", role: "admin", active: true },
  { id: '4973gH', name: "Bob", role: "viewer", active: true },
  { id: '9PdJK2', name: "Trina", role: "admin", active: true },
  { id: 'G9pOs6', name: "Sam", role: "support", active: false },
  { id: 'MKS0op', name: "Billy", role: "editor", active: false },
  { id: 'lapd45', name: "Robert", role: "support", active: true },
  { id: 'PAl4G9', name: "Samantha", role: "viewer", active: false },
]

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (name, role, active) => {
    const newUser = {
      id: generateId(),
      name,
      role,
      active
    };
    setUsers(prev => [...prev, newUser])
  }

  const removeUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  }

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

