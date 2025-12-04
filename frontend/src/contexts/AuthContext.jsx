import { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
  const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);

    // Aquí pondrás tu fetch/axios real más adelante
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === 'admin@ejemplo.com' && password === '123456') {
      const loggedUser = {
        id: '1',
        email,
        name: 'Admin',
      };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));
    } else {
      throw new Error('Email o contraseña incorrectos');
    }

    setIsLoading(false);
  };

  const register = async (email, password, name) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const newUser = {
      id: Date.now().toString(),
      email,
      name,
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};