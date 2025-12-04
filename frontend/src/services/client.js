import axios from 'axios';

// Definir la URL del backend desde variables de entorno
const BACKEND_URL = import.meta.env.VITE_PUBLIC_BACKEND_URL || 'http://localhost:3001';

// Create axios instance
const api = axios.create({
  baseURL: BACKEND_URL,
});

// Helper function to get current tokens
const getAuthHeaders = (contentType = 'application/json') => {
  const token = localStorage.getItem('access_token');
  const headers = {
    'Content-Type': contentType,
    'Time-Zone-Offset': new Date().getTimezoneOffset(),
  };

 if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { headers };
};

// Request interceptor: añadir siempre el access token si existe
  api.interceptors.request.use(
  (config) => {
     const token = localStorage.getItem('access_token');
    if (token && !config.headers?.Authorization) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }  
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const authEndpoints = ['/user/token', '/user/refresh'];
    const isAuthEndpoint = authEndpoints.includes(originalRequest.url);
    
    // If 401 error and not a retry attempt
    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('No refresh token');
        
        // Refresh tokens (bypassing our interceptor to avoid infinite loop)
        const response = await axios.post(
          `${BACKEND_URL}/user/refresh`,
          {}, // Empty body
          {
            headers: {
              'Authorization': `Bearer ${refreshToken}`,
              'Content-Type': 'application/json'
            },
            _isRefreshRequest: true // Flag to skip interceptor
          }
        );
        
        // Store new tokens
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Clear tokens and redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export { api, getAuthHeaders };
