import React from 'react';
import { Layout, BackTop, FloatButton } from 'antd';
import { MessageOutlined, CustomerServiceOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const { Content } = Layout;

const ClientLayout = ({ children }) => {
  const { t } = useLanguage();

  const handleChatSupport = () => {
    console.log('Open chat support');
    // Implement chat support functionality
  };

  const handleWhatsAppSupport = () => {
    // Open WhatsApp with predefined message
    const message = encodeURIComponent(t('common.whatsappMessage'));
    window.open(`https://wa.me/77771234567?text=${message}`, '_blank');
  };

  return (
    <Layout className="min-h-screen bg-neutral-50">
      <Header />
      
      <Content className="flex-1">
        <div className="min-h-[calc(100vh-140px)]">
          {children}
        </div>
      </Content>
      
      <Footer />

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
          tooltip={t('common.chatSupport')}
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
      <BackTop>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-btn hover:shadow-hover transition-all">
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
};

export default ClientLayout;