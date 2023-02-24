// useCounter.js

 // Define un nuevo custom hook llamado useCounter que recibe un valor 
//inicial como parámetro (default: 0)
// Utiliza el hook useState para definir un nuevo estado count, que
// se inicializa con el valor recibido por parámetro
import { useState } from 'react';

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

