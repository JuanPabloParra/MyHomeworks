import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';
import {categories} from './ComponentApp';


function FirstApp() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(5);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <h1> arreglos</h1>
      <ol>
        {
          
        }
      </ol>
    </div>
  );
}

export default FirstApp;
//FirstApp.propTypes ={
//    title: PropTypes.string.isRequired,
//    sum: PropTypes.number.isRequired
//}
//FirstApp.defaultProps = {
//    title: "no hay titulo",
//    sum: 300
//}

