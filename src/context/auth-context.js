import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const signIn = ({ username, password }) => {
    setIsAuth(username?.toLowerCase() === "demo" && password === "demo");
  };

  const signOut = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }

  return context;
};

