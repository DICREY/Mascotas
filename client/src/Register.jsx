import React from 'react';
import { createRoot } from 'react-dom/client';
import '../public/styles/register.css';
import RegisterModule from './moduls/Register.module';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <main>
        <RegisterModule />
    </main>
  </React.StrictMode>
)