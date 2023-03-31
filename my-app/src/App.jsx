import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './store/counterSlice';

export const App = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter}</span>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(incrementBy(5))}
      >
        +5
      </button>
    </>
  );
};
