import React from 'react';
import { createRoot } from 'react-dom/client';
import '../public/styles/index.css';
import App from './moduls/App.module';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
