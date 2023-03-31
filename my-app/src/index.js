import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store  from './store';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';
import QuoteComponent from './QuoteComponent';
import TodoApp from './TodoApp';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <GifExpertApp />
    <MyComponent />
    <QuoteComponent />
    <TodoApp/>
    <MainApp />
  </React.StrictMode>
);
