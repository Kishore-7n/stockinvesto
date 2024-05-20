import React, { createContext, useState,useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   const user = storedUser ? JSON.parse(storedUser) : null;
  //   setUserData(user)
  // }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};