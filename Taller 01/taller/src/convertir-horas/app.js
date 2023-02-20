const inputSeconds = document.getElementById("input-seconds");
const convertirBtn = document.getElementById("convertir-btn");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

convertirBtn.addEventListener("click", () => {
    const totalSeconds = parseInt(inputSeconds.value);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secondsLeft = totalSeconds % 60;
    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = secondsLeft;
});
