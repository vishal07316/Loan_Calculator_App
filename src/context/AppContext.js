import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [emi, setEMI] = useState(null);
  const [amortization, setAmortization] = useState([]);
  const [themeMode, setThemeMode] = useState('light');

  return (
    <AppContext.Provider value={{ emi, setEMI, amortization, setAmortization, themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};