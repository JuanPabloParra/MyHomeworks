import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';


function FirstApp() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Añadiendo</button>
      <button onClick={handleSubstract}>Restando</button>
      <button onClick={handleReset}>Reset</button>
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

