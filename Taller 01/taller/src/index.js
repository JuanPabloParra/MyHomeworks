import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LlamadaTelefonica from "./LlamadaTelefonica";
import Saludo from "./Saludo";
import NumeroIgual from "./NumeroIgual";
import OrdenarNumeros from "./OrdenarNumeros";
import NumerosImpares from "./NumerosImpares";
import AumentoSalarios from "./AumentoSalarios";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <LlamadaTelefonica />
    <Saludo />
    <NumeroIgual />
    <OrdenarNumeros />
    <NumerosImpares />
    <AumentoSalarios />
  </React.StrictMode>,
  document.getElementById("root")
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 