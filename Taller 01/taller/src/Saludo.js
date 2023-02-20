import React, { useState } from "react";
import "./Saludo.css";

const Saludo = () => {
// Definimos dos estados con la función useState. El estado nombre empieza con un valor vacío y el estado hora empieza con un valor vacío.
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
// Definimos dos funciones para actualizar los estados nombre y hora cada vez que el usuario introduce su nombre o la hora en los campos de entrada.
  const onNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const onHoraChange = (event) => {
    setHora(event.target.value);
  };
// Definimos una función que devuelve un mensaje de saludo según la hora introducida por el usuario y su nombre.


  const getMensaje = () => {
    const horaActual = parseInt(hora);
    let mensaje = "";
    if (horaActual >= 6 && horaActual < 12) {
      mensaje = `Buenos días, ${nombre}`;
    } else if (horaActual >= 12 && horaActual < 19) {
      mensaje = `Buenas tardes, ${nombre}`;
    } else {
      mensaje = `Buenas noches, ${nombre}`;
    }
    return mensaje;
  };
// El componente devuelve un contenedor que incluye dos campos de entrada para que el usuario introduzca su nombre y la hora en formato de 24 horas, respectivamente. También incluye un contenedor para mostrar el mensaje de saludo generado por la función getMensaje.
  return (
    <div className="saludo-container">
      <div className="input-container">
        <label htmlFor="nombre-input">Nombre:</label>
        <input type="text" id="nombre-input" value={nombre} onChange={onNombreChange} />
      </div>
      <div className="input-container">
        <label htmlFor="hora-input">Hora (formato 24 horas):</label>
        <input type="number" id="hora-input" value={hora} onChange={onHoraChange} />
      </div>
      <div className="mensaje-container">{getMensaje()}</div>
    </div>
  );
};

export default Saludo;
