import React, { useState, useEffect } from 'react';
import { Layout, BackTop, FloatButton } from 'antd';
import { MessageOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import AppHeader from '../components/common/Header';
import AppFooter from '../components/common/Footer';
import { useTranslation } from '../hooks/useTranslation';

const { Content } = Layout;

const ClientLayout = ({ children }) => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  // Mock data - replace with real data from your store/context
  useEffect(() => {
    // Simulate getting user data
    const mockUser = localStorage.getItem('user');
    if (mockUser) {
      setIsAuthenticated(true);
      setUserRole('client');
    }
    
    // Simulate cart and favorites count
    setCartItemsCount(2);
    setFavoritesCount(3);
  }, []);

  const handleNavigate = (path) => {
    console.log('Navigate to:', path);
    // Implement navigation logic
    // This would typically be handled by react-router
    window.location.href = path;
  };

  const handleChatSupport = () => {
    console.log('Open chat support');
    // Implement chat support functionality
  };

  const handleWhatsAppSupport = () => {
    // Open WhatsApp with predefined message
    const message = encodeURIComponent(
      t('common.language') === 'ru' 
        ? 'Здравствуйте! У меня есть вопрос по поводу мебели.'
        : 'Сәлеметсіз бе! Маған жиһаз туралы сұрағым бар.'
    );
    window.open(`https://wa.me/77771234567?text=${message}`, '_blank');
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      <AppHeader
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        cartItemsCount={cartItemsCount}
        favoritesCount={favoritesCount}
        onNavigate={handleNavigate}
      />
      
      <Content className="flex-1">
        <div className="min-h-[calc(100vh-140px)]">
          {children}
        </div>
      </Content>
      
      <AppFooter onNavigate={handleNavigate} />

      {/* Floating Action Buttons */}
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24, bottom: 24 }}
        icon={<CustomerServiceOutlined />}
        className="floating-buttons"
      >
        <FloatButton
          icon={<MessageOutlined />}
          tooltip={t('common.language') === 'ru' ? 'Чат поддержки' : 'Қолдау чаты'}
          onClick={handleChatSupport}
        />
        <FloatButton
          icon={<MessageOutlined />}
          tooltip="WhatsApp"
          onClick={handleWhatsAppSupport}
          style={{ backgroundColor: '#25D366' }}
        />
      </FloatButton.Group>

      {/* Back to Top */}
      <BackTop
        style={{
          right: 24,
          bottom: 100,
        }}
        className="back-to-top-custom"
      >
        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 text-white">
          ↑
        </div>
      </BackTop>
    </Layout>
  );
};

export default ClientLayout;