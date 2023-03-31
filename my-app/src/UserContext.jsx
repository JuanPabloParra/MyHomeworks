import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  currentUser: { username: "" },
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const navigate = useNavigate();

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("lastPath", window.location.pathname);
    navigate("/");
  };

  const logout = () => {
    setCurrentUser({ username: "" });
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Welcome, {currentUser.username}!</div>
    </>
  );
};
