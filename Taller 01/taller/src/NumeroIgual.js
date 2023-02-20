import React, { useState } from "react";

const NumeroIgual = () => {
    // Definimos el estado inicial de "numeros" con tres ceros y la función "setNumeros" para actualizar el estado

  const [numeros, setNumeros] = useState([0, 0, 0]);
// Definimos la función "onNumeroChange" para actualizar el número correspondiente al índice "index" 
//en el estado "numeros" cuando se cambia el valor de un input

  const onNumeroChange = (index, event) => {
    const numero = parseInt(event.target.value);
    const nuevosNumeros = [...numeros];
    nuevosNumeros[index] = numero; // Actualizamos el número correspondiente al índice "index"
    // en la copia

    setNumeros(nuevosNumeros);
  };
// Definimos la función "contarIguales" para contar cuántos números son iguales entre sí en el estado 
//"numeros"

  const contarIguales = () => {
    const num1 = numeros[0]; // Obtenemos el primer número del estado "numeros"
    const num2 = numeros[1];
    const num3 = numeros[2];
    let iguales = 0;
    if (num1 === num2) { // Comparamos si el primer número es igual al segundo número
        iguales++; // Si son iguales, incrementamos el contador
      iguales++;
    }
    if (num1 === num3) {
      iguales++;
    }
    if (num2 === num3) {
      iguales++;
    }
    return iguales;
  };

  return (
    <div className="numeros-container">
      <h2>Punto 4</h2>
      <div className="input-container">
        <label htmlFor="numero-1">Número 1:</label>
        <input type="number" id="numero-1" value={numeros[0]} onChange={(e) => onNumeroChange(0, e)} />
      </div>
      <div className="input-container">
        <label htmlFor="numero-2">Número 2:</label>
        <input type="number" id="numero-2" value={numeros[1]} onChange={(e) => onNumeroChange(1, e)} />
      </div>
      <div className="input-container">
        <label htmlFor="numero-3">Número 3:</label>
        <input type="number" id="numero-3" value={numeros[2]} onChange={(e) => onNumeroChange(2, e)} />
      </div>
      <div className="iguales-container">{`Hay ${contarIguales()} números iguales`}</div>
    </div>
  );
};

export default NumeroIgual;
