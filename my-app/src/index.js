import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';
import QuoteComponent from './QuoteComponent';
import TodoApp from './TodoApp';
import { BrowserRouter } from 'react-router-dom';
import {MainApp} from './MainApp';
import { Provider } from 'react';
import {store} from './store';

 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Registro />
  </BrowserRouter>,
    <GifExpertApp />
     <MyComponent />
    <QuoteComponent />
    <TodoApp/>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);