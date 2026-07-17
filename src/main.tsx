import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/HomePage';
import './styles.css';

const base = import.meta.env.BASE_URL || '/';
const path = window.location.pathname;
const rel = path.startsWith(base) ? path.slice(base.length) : path.replace(/^\/+/, '');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {rel === 'home' || rel === 'home/' ? <HomePage /> : <App />}
  </React.StrictMode>,
);
