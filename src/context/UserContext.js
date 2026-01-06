import { createContext, useState } from "react";
import { generateId } from "../utils/generateId";
import { useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedData = localStorage.getItem("accessHub_users");
    return savedData ? JSON.parse(savedData) :
      [
        { id: 'd18eec', name: "Alice", role: "admin", active: true },
        { id: '4973gH', name: "Bob", role: "viewer", active: true },
        { id: '9PdJK2', name: "Trina", role: "admin", active: true },
        { id: 'G9pOs6', name: "Sam", role: "support", active: false },
        { id: 'MKS0op', name: "Billy", role: "editor", active: false },
        { id: 'lapd45', name: "Robert", role: "support", active: true },
        { id: 'PAl4G9', name: "Samantha", role: "viewer", active: false },
      ]
  });

  useEffect(() => { 
    localStorage.setItem("accessHub_users", JSON.stringify(users))
  }, [users]);

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

  const toggleActive = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  }

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, removeUser, toggleActive }}>
      {children}
    </UserContext.Provider>
  );
};

