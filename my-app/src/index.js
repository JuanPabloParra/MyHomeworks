import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';
import QuoteComponent from './QuoteComponent';
import TodoApp from './TodoApp';
ReactDOM.render(
  <React.StrictMode>
    
    <GifExpertApp />
    <App />
    <MyComponent />
    <QuoteComponent />
    <TodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);