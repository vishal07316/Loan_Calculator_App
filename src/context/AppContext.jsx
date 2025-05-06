import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [emi, setEMI] = useState(null);
  const [amortization, setAmortization] = useState([]);
  // Initialize themeMode from localStorage, default to 'light' if not set
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode');
    return savedTheme || 'light';
  });

  // Save themeMode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  return (
    <AppContext.Provider value={{ emi, setEMI, amortization, setAmortization, themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};