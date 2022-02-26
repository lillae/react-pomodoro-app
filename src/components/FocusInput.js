import React from 'react';
import { useTimer } from '../context/TimerContext';

const FocusInput = () => {
  const { input, setInput, focus, setFocus } = useTimer();

  const submitHandler = (e) => {
    e.preventDefault();
    setFocus(input);
    setInput('');
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form
        className='flex max-w-[500px] w-full h-[40px] self-center'
        onSubmit={submitHandler}
      >
        <input
          type='text'
          className='bg-primary-darkGray p-2 w-full'
          placeholder='Set Focus Question'
          onChange={inputHandler}
          value={input}
        />
        <button className='px-8 py-2 bg-primary-accent text-white'>Set</button>;
      </form>
      <h2 className='text-primary-accent h-12 pt-8 pb-16'>{focus}</h2>
    </>
  );
};

export default FocusInput;
