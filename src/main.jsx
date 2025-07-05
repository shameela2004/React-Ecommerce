import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
<<<<<<< HEAD
import { CartProvider } from './context/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'
=======
>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
<<<<<<< HEAD
      <CartProvider>
        <Toaster position='bottom-center'/>
    <App />
    </CartProvider>
=======
    <App />
>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
