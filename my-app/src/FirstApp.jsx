import PropTypes from 'prop-types';
import { useState} from "react"
import React from 'react';
import {categories} from './ComponentApp';

 
const ChildComponent = ({ addCategory, getGifs }) => {
  const [category, setCategory] = useState('');

  const handleInput = (event) => {
    setCategory(event.target.value);
  };

  const handleAddCategory = async () => {
    addCategory(category);
    setCategory('');
    await getGifs(category);
  };

  return (
    <div>
      <input type="text" value={category} onChange={handleInput} />
      <button onClick={handleAddCategory}>Agregar categoría</button>
    </div>
  );
};

const FirstApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const getGifs = async (category) => {
    // Aquí iría la lógica para obtener los gifs
  };

  return (
    <div>
      <ChildComponent addCategory={addCategory} getGifs={getGifs} />
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
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

