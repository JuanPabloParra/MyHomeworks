import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';
import {categories} from './ComponentApp';


const FirstApp = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type="text" value={text} onChange={handleInput} />
      <p>{text}</p>
    </div>
  );
};

export default FirstApp;
//FirstApp.propTypes ={
//    title: PropTypes.string.isRequired,
//    sum: PropTypes.number.isRequired
//}
//FirstApp.defaultProps = {
//    title: "no hay titulo",
//    sum: 300
//}

