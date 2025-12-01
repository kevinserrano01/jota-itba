import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from "./Router.jsx";
import { AuthProvider } from './contexts/AuthContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
        <RouterProvider router={Router} />
      </CartProvider>
  </StrictMode>
);