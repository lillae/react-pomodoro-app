import { createContext, useContext, useState, useEffect } from 'react';

export const THEME_CONTEXT_DEFAULT = {
  theme: 'theme-green',
  fontTheme: 'Poppins',
  setTheme: () => null,
};

export const ThemeContext = createContext(THEME_CONTEXT_DEFAULT);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext used outside ThemeContext provider');
  }
  useEffect(() => {
    document.body.classList.value =
      'transition-colors ease-in-out duration-200';
    document.body.classList.add(`theme-${context.theme}`);
    document.body.style.fontFamily = context.fontTheme;
  }, [context.theme, context.fontTheme]);

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme-green');
  const [fontTheme, setFontTheme] = useState('Poppins');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontTheme, setFontTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
