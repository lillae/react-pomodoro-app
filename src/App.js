import React from 'react';
import './App.css';
import Home from './components/Home';
import { TimerProvider } from './context/TimerContext';
import ThemeProvider from './hooks/UseTheme';
import { useThemeContext } from './hooks/UseTheme';

function App() {
  const { theme } = useThemeContext();

  const THEME_CLASSNAMES = {
    green: 'theme-green',
    blue: 'theme-blue',
    purple: 'theme-purple',
  };

  return (
    <ThemeProvider>
      <TimerProvider>
        <div
          className={`App text-[fontTheme]
          ${THEME_CLASSNAMES[theme]} `}
        >
          <TimerProvider>
            <Home />
          </TimerProvider>
        </div>
      </TimerProvider>
    </ThemeProvider>
  );
}

export default App;
