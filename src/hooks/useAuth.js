import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 检查本地存储中是否有token
    const token = localStorage.getItem('authToken');
    if (token) {
      checkAuth(token);
    } else {
      setLoading(false);
    }
  }, []);

  const checkAuth = async (token) => {
    try {
      // 设置 axios 默认 header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 验证 token
      const response = await axios.get('/api/auth/verify');
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem('authToken');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('/.netlify/functions/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const { token, user } = await response.json();

      localStorage.setItem('authToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || '登录失败');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 