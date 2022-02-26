import React, { useContext, useState, createContext } from 'react';

export const TimerContext = createContext();

export function useTimer() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  const [timer, setTimer] = useState([]);
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState('');

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const value = {
    timer,
    input,
    setInput,
    focus,
    setFocus,
    setTimer,
    showSettings,
    setShowSettings,
    workMinutes,
    setWorkMinutes,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
