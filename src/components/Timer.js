import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTimer } from '../context/TimerContext';
import { useThemeContext } from '../hooks/UseTheme';
import Button from './Button';
import { BsPauseBtn, BsPlayBtn } from 'react-icons/bs';
import useSound from 'use-sound';

const Timer = () => {
  const settingsInfo = useTimer();
  const { theme } = useThemeContext();
  const [play] = useSound('/sounds/mixkit-happy-bells-notification-937.wav');
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [session, setSession] = useState(1);
  const [mode, setMode] = useState('work');
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function incrementHandler() {
    if (modeRef.current === 'work' && session > 3 && session < 5) {
      setSession(1);
    }
    return setSession((prevSession) => prevSession + 1);
  }

  useEffect(() => {
    if (modeRef.current === 'break' || modeRef.current === 'longBreak') {
      play();
    }
  }, [mode]);

  useEffect(() => {
    function switchMode() {
      const nextMode =
        modeRef.current === 'work'
          ? modeRef.current === 'work' && session === 3
            ? 'longBreak'
            : 'break'
          : 'work';

      const nextSeconds =
        (nextMode === 'work'
          ? settingsInfo.workMinutes
          : nextMode === 'break'
          ? settingsInfo.shortBreak
          : settingsInfo.longBreak) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      if (modeRef.current === 'work') {
        incrementHandler();
      }

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo, session]);

  const totalSeconds =
    mode === 'work'
      ? settingsInfo.workMinutes * 60
      : mode === 'break'
      ? settingsInfo.shortBreak * 60
      : settingsInfo.longBreak * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <>
      <div className='max-w-[300px] w-full max-h-[300px] self-center justify-self-center'>
        <CircularProgressbar
          value={percentage}
          text={minutes + ':' + seconds}
          styles={buildStyles({
            pathColor:
              mode === 'work'
                ? theme === 'green'
                  ? '#00ce79'
                  : theme === 'purple'
                  ? '#8511ff'
                  : theme === 'blue'
                  ? '#6044fc'
                  : '#00ce79'
                : '#ee4e70',
            textColor: '#dddddd',
            trailColor: '#1514147f',
          })}
          strokeWidth={3}
        />
        ;
      </div>
      <div className='my-12 space-x-4 flex self-center'>
        {isPaused ? (
          <Button>
            <BsPlayBtn
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
              className='bg-transparent text-primary-accent text-4xl'
            />
          </Button>
        ) : (
          <Button>
            <BsPauseBtn
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
              className='bg-transparent text-primary-accent  text-4xl'
            />
          </Button>
        )}
      </div>
    </>
  );
};

export default Timer;
