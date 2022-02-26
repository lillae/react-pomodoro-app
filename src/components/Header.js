import React from 'react';
import Button from './Button';
import { IoSettingsSharp } from 'react-icons/io5';
import { useTimer } from '../context/TimerContext';

const Header = () => {
  const { setShowSettings } = useTimer();

  const showSettingsHandler = () => {
    setShowSettings(true);
  };

  return (
    <div className='w-full h-[25px] flex justify-between items-start mb-2'>
      <h1 className='text-primary-accent self-center'>Pomodoro</h1>
      <Button>
        <IoSettingsSharp
          onClick={showSettingsHandler}
          className='text-primary-accent text-2xl'
        />
      </Button>
    </div>
  );
};

export default Header;
