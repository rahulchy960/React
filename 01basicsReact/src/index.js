import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// main entry point of the page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);

// index.js or main.jsx(in vite) is the main entry point of the react app
// strict mode a render korateo pari abr nao korate pari (not mandatory)

// ReactDOM.createRoot → React 18's optimized rendering.
// React.StrictMode → Helps catch issues during development.
// root.render(<App />) → Mounts the React app inside #root.

