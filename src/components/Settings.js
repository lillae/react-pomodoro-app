import React from 'react';
import ReactSlider from 'react-slider';
import { useTimer } from '../context/TimerContext';
import { useThemeContext } from '../hooks/UseTheme';
import { BsArrowLeft } from 'react-icons/bs';

const Settings = () => {
  const { setTheme, setFontTheme } = useThemeContext();

  const {
    setShowSettings,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    workMinutes,
    setWorkMinutes,
  } = useTimer();

  return (
    <div className='w-full h-screen bg-black flex flex-col'>
      <h2 className='text-primary-accent mb-[50px]'>Settings</h2>;
      <div className='w-full h-full flex flex-col items-center text-left space-y-8'>
        <div>
          <label>Work: {workMinutes}:00</label>
          <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={workMinutes}
            min={1}
            max={60}
            onChange={(newValue) => setWorkMinutes(newValue)}
          />
        </div>
        <div>
          <label>Long Break: {longBreak}:00</label>
          <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={longBreak}
            min={1}
            max={60}
            onChange={(newValue) => setLongBreak(newValue)}
          />
        </div>
        <div>
          <label>Short Break: {shortBreak}:00</label>
          <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={shortBreak}
            min={1}
            max={60}
            onChange={(newValue) => setShortBreak(newValue)}
          />
        </div>
        <div className='w-[350px] text-left'>
          <label className='text-left'>Set Theme</label>
          <div className='flex space-x-12'>
            <div>
              <h6>Colors</h6>
              <select onChange={(e) => setTheme(e.target.value)}>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
                <option value='purple'>Purple</option>
              </select>
            </div>
            <div>
              <h6>Fonts</h6>
              <select onChange={(e) => setFontTheme(e.target.value)}>
                <option value='Poppins'>Poppins</option>
                <option value='Lobster'>Lobster</option>
                <option value='Roboto Mono'>Roboto Mono</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        className='text-primary-accent flex bg-stone-900 py-2 px-4 rounded w-[100px] self-center'
        onClick={() => setShowSettings(false)}
      >
        <BsArrowLeft className='text-primary-accent text-2xl mr-2' />
        Back
      </button>
    </div>
  );
};

export default Settings;
