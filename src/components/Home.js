import React from 'react';
import Header from './Header';
import Timer from './Timer';
import FocusInput from './FocusInput';
import Settings from './Settings';
import { useTimer } from '../context/TimerContext';

const Home = () => {
  const { showSettings } = useTimer();

  return (
    <>
      {showSettings ? (
        <Settings />
      ) : (
        <>
          <Header />
          <div className='bg-black w-full h-screen flex flex-col align-center justify-start'>
            <FocusInput />
            <Timer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
