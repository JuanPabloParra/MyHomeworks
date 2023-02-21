import React, { useState } from 'react';
const NumerosImpares = () => {
    const [numero, setNumero] = useState(0);
    const [impares, setImpares] = useState([]);
  
    const onNumeroChange = (event) => {
      const nuevoNumero = parseInt(event.target.value);
      setNumero(nuevoNumero);
    };
  
    const imprimirImpares = () => {
      const imparesEncontrados = [];
      for (let i = 1; i < numero; i += 2) {
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
  