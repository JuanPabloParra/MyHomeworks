import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';
import {categories} from './ComponentApp';

 





const FirstApp = () => {
  const [counter, setCounter] = useState(0);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleInput = (event) => {
    setCategory(event.target.value);
  };

  const handleAddCategory = () => {
    setCategories([...categories, category]);
    setCategory("");

  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubstract}>Substract</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input type="text" value= {category} onChange={handleInput} />
      <button onClick={handleAddCategory}> Add Category </button>
      <ul>
        {categories.map((cat, index) => (
          <li key ={index}> {cat} </li>

        ))}
      </ul>
      
      <div>
      
    </div>
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

