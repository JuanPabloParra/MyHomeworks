import React, { useState } from "react";

const OrdenarNumeros = () => {
  const [numeros, setNumeros] = useState([]);

  const onNumeroChange = (event) => {
    const numero = parseInt(event.target.value);
    setNumeros([...numeros, numero]);
  };

  const ordenarNumeros = () => {
    return numeros.sort((a, b) => a - b);
  };

  return (
    <div className="numeros-container">
      <h2>Punto 5 Ordenar números</h2>
      <div className="input-container">
        <label htmlFor="numero">Nuevo número:</label>
        <input type="number" id="numero" onChange={onNumeroChange} />
      </div>
      <div className="ordenados-container">{ordenarNumeros().join(", ")}</div>
    </div>
  );
};

export default OrdenarNumeros;
