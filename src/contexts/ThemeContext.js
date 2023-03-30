import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState({
    primaryColor: '#33E1ED',
    secondaryColor: '#2D2D44',
    darkColor: '#60697A',
    darkerColor: '#2D2D44',
    lightColor: '#AAADB2',
    lighterColor: '#FFFFFF',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
