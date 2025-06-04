import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppRouter from './router/AppRouter';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import './styles/globals.css';
import './styles/antd-overrides.css';

const themeConfig = {
  token: {
    colorPrimary: '#D2691E',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 8,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 44,
      fontWeight: 600,
    },
    Card: {
      borderRadius: 16,
    },
    Input: {
      borderRadius: 12,
      controlHeight: 44,
    },
  }
};

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <AuthProvider>
        <LanguageProvider>
          <CartProvider>
            <BrowserRouter>
              <div className="App min-h-screen">
                <AppRouter />
              </div>
            </BrowserRouter>
          </CartProvider>
        </LanguageProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;