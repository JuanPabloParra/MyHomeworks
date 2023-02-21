import React, { useState } from "react";
import "./AumentoSalarios.css";

const AumentoSalarios = () => {
  const [salarios, setSalarios] = useState([]);
  const [error, setError] = useState("");
  const [aumento, setAumento] = useState(8);

  const agregarSalario = (event) => {
    event.preventDefault();
    const nuevoSalario = parseInt(event.target.salario.value);
    if (isNaN(nuevoSalario)) {
      setError("Por favor ingrese un valor numérico");
    } else if (salarios.length >= 10) {
      setError("Ya se han ingresado los 10 salarios");
    } else {
      setSalarios([...salarios, nuevoSalario]);
      event.target.salario.value = "";
    }
  };

  const aumentarSalarios = () => {
    const salariosAumentados = salarios.map((salario) => salario * (1 + aumento / 100));
    setSalarios(salariosAumentados);
  };

  return (
    <div className="aumento-salarios-container">
      <h1 style={{textAlign: 'left'}}>Punto 7: Aumento de salarios</h1>
      <form onSubmit={agregarSalario}>
        <label htmlFor="salario">Ingrese un salario:</label>
        <input type="number" id="salario" name="salario" />
        <button>Agregar salario</button>
      </form>
      <div className="error">{error}</div>
      {salarios.length === 10 && (
        <button onClick={aumentarSalarios}>Aplicar aumento del {aumento}%</button>
      )}
      <div className="salarios-container">
        {salarios.map((salario, index) => (
          <div key={index} className="salario">
            <p>Salario {index + 1}: </p>
            <p className="salario-valor">${salario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AumentoSalarios;

