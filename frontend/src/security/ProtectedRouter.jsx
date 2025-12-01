// src/security/ProtectedRoute.jsx

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Componente que protege rutas: solo permite acceso si el usuario está autenticado.
 * Si no lo está, redirige a /login y guarda la ruta de origen en el estado.
 */
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Guardamos la ruta a la que intentaba acceder para redirigir después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};