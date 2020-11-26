import React, { useEffect, useState } from "react";
import firebase from "../firebase.js";

export const AuthContext = React.createContext(); // we use React context API
// context API will enable currentUser to be available in all children components of <AuthProvider/>
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
