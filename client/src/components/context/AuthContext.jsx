import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (credentials) => {
    // Handle sign-in logic here
    // Set the user state after successful sign-in
    setUser({ id: 'exampleUserId', ...credentials });
  };

  const value = {
    user,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
