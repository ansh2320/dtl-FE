// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // Verify token on app load
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await fetch('/api/verify-token', {
            headers: { 
              'Authorization': `Bearer ${token}` 
            }
          });
          const data = await response.json();
          if (data.valid) {
            setUser(data.user);
          } else {
            logout();
          }
        } catch (error) {
          logout();
        }
      }
    };

    verifyToken();
  }, [token]);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('token', userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};