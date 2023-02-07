import logo from './logo.svg';
import './App.css';

import React from 'react';

const HelloWorld = () => <h1 style={{ color: 'green', fontSize: '36px' }}>Hello World</h1>;

const App = () => {
  return (
    <div style={{ textAlign: 'center', color: 'green', fontSize: '24px' }}>
      <HelloWorld />
    </div>
  );
};

export default App;