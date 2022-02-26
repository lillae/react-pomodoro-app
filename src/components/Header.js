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
    <div className='mb-[30px] lg:mb-2 w-full h-[25px] flex justify-between items-start'>
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
