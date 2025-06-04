import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      // Here would be the actual API call
      // For now, we'll just simulate a successful login
      const mockUser = {
        id: '1',
        fullname: 'Test User',
        phone: '+77771234567',
        email: credentials.email,
        role: 'client'
      };
      
      setUser(mockUser);
      return mockUser;
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Here would be the actual API call
      // For now, we'll just simulate a successful registration
      const mockUser = {
        id: '1',
        fullname: userData.fullname,
        phone: userData.phone,
        email: userData.email,
        role: 'client'
      };
      
      setUser(mockUser);
      return mockUser;
    } catch (err) {
      setError('Registration failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        register, 
        logout, 
        isAuthenticated, 
        loading, 
        error,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);