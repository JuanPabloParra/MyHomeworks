import React, { useState } from 'react';
const NumerosImpares = () => {
    const [numero, setNumero] = useState(0);
// Definimos el estado 'impares' con un valor inicial vacío, que representa los números impares encontrados

    const [impares, setImpares] = useState([]);
  
    const onNumeroChange = (event) => {
      const nuevoNumero = parseInt(event.target.value);
      setNumero(nuevoNumero);
    };
  // Definimos la función 'imprimirImpares' que se ejecuta cuando el usuario hace clic en el botón

    const imprimirImpares = () => {
// Creamos un array vacío para almacenar los números impares encontrados

      const imparesEncontrados = [];
// Usamos un bucle for para recorrer los números impares menores que el número ingresado por el usuario

      for (let i = 1; i < numero; i += 2) {
// Agregamos el número impar encontrado al array 'imparesEncontrados'

        imparesEncontrados.push(i);
      }
      setImpares(imparesEncontrados);
    };
  
    return (
      <div className="numeros-container">
        <h2>Punto 6:</h2>
        <div className="input-container">
          <label htmlFor="numero">Ingrese un número:</label>
          <input type="number" id="numero" value={numero} onChange={onNumeroChange} />
        </div>
        <button onClick={imprimirImpares}>Imprimir impares menores que el número ingresado</button>
        <div className="impares-container">
          {impares.map((numero) => (
            <span key={numero}>{numero} </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default NumerosImpares;
  