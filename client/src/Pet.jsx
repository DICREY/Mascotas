// Librarys 
import React from 'react'
import { createRoot } from 'react-dom/client'
import PetRegisterModule from './moduls/PetRegister.module'
import '../public/styles/pets.css'

// Create root 
const root = createRoot(document.getElementById('root'))

// Render component 
root.render(
  <React.StrictMode>
    <main>
        <PetRegisterModule />
    </main>
  </React.StrictMode>
)