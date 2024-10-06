// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use react-dom/client in React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Create a root and render your app inside the Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
