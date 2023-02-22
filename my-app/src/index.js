// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
    <App />
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


