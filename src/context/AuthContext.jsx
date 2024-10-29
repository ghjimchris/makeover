import { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

const STORAGE_KEY = 'esg_auth';
const TOKEN_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth) {
      try {
        const { token, userData } = JSON.parse(storedAuth);
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          return userData;
        }
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    return null;
  });

  const refreshToken = useCallback((currentToken) => {
    try {
      const decoded = jwtDecode(currentToken);
      // Create a new token with extended expiration
      const newToken = btoa(JSON.stringify({
        ...decoded,
        exp: Math.floor(Date.now() / 1000) + 3600 // Extend by 1 hour
      }));
      return newToken;
    } catch {
      return null;
    }
  }, []);

  const login = useCallback((token, userData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token, userData }));
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const getToken = useCallback(() => {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth) {
      const { token } = JSON.parse(storedAuth);
      return token;
    }
    return null;
  }, []);

  useEffect(() => {
    const checkAndRefreshToken = () => {
      const storedAuth = localStorage.getItem(STORAGE_KEY);
      if (storedAuth) {
        try {
          const { token, userData } = JSON.parse(storedAuth);
          const decoded = jwtDecode(token);
          
          // If token is expired or close to expiring (within 5 minutes)
          if (decoded.exp * 1000 - Date.now() < 300000) {
            const newToken = refreshToken(token);
            if (newToken) {
              localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: newToken, userData }));
            } else {
              logout();
            }
          }
        } catch {
          logout();
        }
      }
    };

    const interval = setInterval(checkAndRefreshToken, TOKEN_REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [logout, refreshToken]);

  const value = {
    user,
    login,
    logout,
    getToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};