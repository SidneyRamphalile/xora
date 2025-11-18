// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Clear inline styles when switching to light or dark theme
    if (theme === 'light' || theme === 'dark' || theme === 'testCustom') {
      const root = document.documentElement;
      // List all your CSS variables that might have been set inline
      const cssVars = [
        '--color-primary',
        '--color-secondary',
        '--color-primary-text',
        '--color-sub-text',
        '--color-background',
        '--color-divider',
        '--color-black',
        '--color-black-100'
      ];
      
      // Remove inline styles
      cssVars.forEach(varName => {
        root.style.removeProperty(varName);
      });
    } 
    // else if (theme === 'custom' && customColors) {
    //   // Reapply custom colors when theme is custom
    //   const root = document.documentElement;
    //   Object.entries(customColors).forEach(([key, value]) => {
    //     root.style.setProperty(key, value);
    //   });
    // }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const setCustomTheme = (customColors) => {
    // Dynamically set custom theme colors
    const root = document.documentElement;
    Object.entries(customColors).forEach(([key, value]) => {
      root.style.setProperty(`${key}`, value);
    });
    setTheme('custom');
  };

  const setThemeMode = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMode, toggleTheme, setCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};