import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const initialUsers = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "viewer", active: true },
  { id: 3, name: "Trina", role: "admin", active: true },
  { id: 4, name: "Sam", role: "viewer", active: false },
  { id: 5, name: "Billy", role: "editor", active: false },
  { id: 6, name: "Robert", role: "support", active: true },
  { id: 7, name: "Samantha", role: "viewer", active: false },
]
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (name, role, active) => { 
    const newUser = {
      id: uuidv4(),
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
    <UserContext.Provider value={{ users, setUsers, addUser, removeUser}}>
      {children}
    </UserContext.Provider>
  );
};

