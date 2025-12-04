// src/security/ProtectedRoute.jsx
import { useAuth } from '../contexts/AuthContext';

/**
 * Componente que protege rutas: solo permite acceso si el usuario está autenticado.
 * Si no lo está, redirige a /login y guarda la ruta de origen en el estado.
 */
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Guardamos la ruta a la que intentaba acceder para redirigir después del login
    return (
      <div className="container" style={{ paddingTop: '100px', minHeight: '100vh' }} >
        <h1> No tienes permisos para crear productos </h1>
      </div>
    )
  }

  return children;
};