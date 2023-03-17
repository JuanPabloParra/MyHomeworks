import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';
import QuoteComponent from './QuoteComponent';
import TodoList from './TodoList';
ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
    <App />
    <MyComponent />
    <QuoteComponent />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);