// src/contexts/AuthContext.jsx

import { createContext, useContext, useReducer, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// 1. Contexto
export const AuthContext = createContext(undefined); // undefined en lugar de null para detectar mejor errores

// 2. Acciones
const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

// 3. Reducer
function authReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        token: action.payload,
        isAuthenticated: true,
      };
    case ACTIONS.LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

// 4. Proveedor
export function AuthProvider({ children }) {
  // Estado inicial desde localStorage
  const getInitialState = () => {
    const token = localStorage.getItem('authToken');
    return {
      token,
      isAuthenticated: !!token,
    };
  };

  const [state, dispatch] = useReducer(authReducer, getInitialState());

  const navigate = useNavigate();
  const location = useLocation();

  // Sincroniza con localStorage cuando el token cambia
  useEffect(() => {
    if (state.token) {
      localStorage.setItem('authToken', state.token);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [state.token]);

  // Funciones de autenticación
  const login = (token) => {
    if (!token || typeof token !== 'string') {
      throw new Error('Token inválido');
    }
    dispatch({ type: ACTIONS.LOGIN, payload: token });
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate('/login', { replace: true });
  };

  // Valor que se pasa al contexto
  const value = {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// 5. Hook personalizado (con validación)
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}