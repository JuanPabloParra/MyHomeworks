import React, { useState } from "react";

const LlamadaTelefonica = () => {
  const [duracionLlamada, setDuracionLlamada] = useState(0);
  const [costoLlamada, setCostoLlamada] = useState(0);

  const calcularCostoLlamada = () => {
    let costo = 0;
    if (duracionLlamada <= 3) {
      costo = 100;
    } else {
      costo = 100 + (duracionLlamada - 3) * 50;
    }
    setCostoLlamada(costo);
  };

  return (
    <div>
        <h1> Punto 2:</h1>
      <h2>Calculadora de llamadas telefónicas</h2>
      <div>
        <label htmlFor="duracion-llamada">Duración de la llamada (minutos): </label>
        <input
          type="number"
          id="duracion-llamada"
          value={duracionLlamada}
          onChange={(event) => setDuracionLlamada(parseInt(event.target.value))}
        />
      </div>
      <button onClick={calcularCostoLlamada}>Calcular costo de la llamada</button>
      <div>
        <h3>Costo de la llamada: {costoLlamada} pesos</h3>
      </div>
    </div>
  );
};

export default LlamadaTelefonica;

