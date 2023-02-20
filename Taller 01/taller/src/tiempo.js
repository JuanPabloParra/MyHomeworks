import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const inputSeconds = React.useRef(null);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const handleConvertir = () => {
    const totalSeconds = parseInt(inputSeconds.current.value);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secondsLeft = totalSeconds % 60;
    setHours(hours);
    setMinutes(minutes);
    setSeconds(secondsLeft);
  }

  return (
    <div className="container">
      <h1>Convertidor de tiempo</h1>
      <div className="input-container">
        <label htmlFor="input-seconds">Ingresa los segundos:</label>
        <input type="number" id="input-seconds" ref={inputSeconds} />
        <button id="convertir-btn" onClick={handleConvertir}>Convertir</button>
      </div>
      <div className="resultados-container">
        <div className="resultado">
          <span id="horas">{hours}</span>
          <span>Horas</span>
        </div>
        <div className="resultado">
          <span id="minutos">{minutes}</span>
          <span>Minutos</span>
        </div>
        <div className="resultado">
          <span id="segundos">{seconds}</span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

