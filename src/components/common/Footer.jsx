import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  Button,
  Input
} from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  SendOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const AppFooter = ({ onNavigate }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const catalogItems = [
    'Диваны', 'Кресла', 'Столы', 'Кровати', 'Шкафы', 'Декор'
  ];

  const infoItems = [
    'О компании', 'Доставка', 'Оплата', 'Гарантия', 'Возврат', 'Отзывы'
  ];

  const supportItems = [
    'Помощь', 'FAQ', 'Контакты', 'Обратная связь'
  ];

  const handleNewsletterSubmit = (email) => {
    console.log('Newsletter subscription:', email);
    // Implement newsletter subscription
  };

  return (
    <Footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={6}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl animate-float">🏛️</span>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Imperium
                </span>
              </div>
              
              <Paragraph className="text-gray-300 leading-relaxed">
                {t('footer.description')}
              </Paragraph>
              
              <div className="space-y-3">
                <Text strong className="text-white block">
                  {t('footer.newsletter')}
                </Text>
                <Input.Search
                  placeholder={t('footer.newsletterPlaceholder')}
                  enterButton={
                    <Button 
                      type="primary" 
                      icon={<SendOutlined />}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 border-none"
                    >
                      {t('footer.subscribe')}
                    </Button>
                  }
                  onSearch={handleNewsletterSubmit}
                  size="large"
                  className="newsletter-input"
                />
              </div>
              
              <Space size="large" className="mt-6">
                <WhatsAppOutlined className="text-2xl hover:text-green-400 cursor-pointer transition-colors" />
                <InstagramOutlined className="text-2xl hover:text-pink-400 cursor-pointer transition-colors" />
                <FacebookOutlined className="text-2xl hover:text-blue-400 cursor-pointer transition-colors" />
                <TwitterOutlined className="text-2xl hover:text-blue-300 cursor-pointer transition-colors" />
              </Space>
            </div>
          </Col>
          
          {/* Catalog Links */}
          <Col xs={24} sm={12} md={4}>
            <Title level={4} className="text-white mb-6">
              {t('footer.catalog')}
            </Title>
            <div className="space-y-3">
              {catalogItems.map((item, index) => (
                <div key={index}>
                  <Button
                    type="text"
                    className="text-gray-300 hover:text-white p-0 h-auto font-normal text-left"
                    onClick={() => onNavigate && onNavigate(`/catalog?category=${index}`)}
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Info Links */}
          <Col xs={24} sm={12} md={4}>
            <Title level={4} className="text-white mb-6">
              {t('footer.information')}
            </Title>
            <div className="space-y-3">
              {infoItems.map((item, index) => (
                <div key={index}>
                  <Button
                    type="text"
                    className="text-gray-300 hover:text-white p-0 h-auto font-normal text-left"
                    onClick={() => onNavigate && onNavigate(`/info/${index}`)}
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Support Links */}
          <Col xs={24} sm={12} md={4}>
            <Title level={4} className="text-white mb-6">
              {t('footer.support')}
            </Title>
            <div className="space-y-3">
              {supportItems.map((item, index) => (
                <div key={index}>
                  <Button
                    type="text"
                    className="text-gray-300 hover:text-white p-0 h-auto font-normal text-left"
                    onClick={() => onNavigate && onNavigate(`/support/${index}`)}
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Contact Info */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white mb-6">
              {t('footer.contacts')}
            </Title>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneOutlined className="text-orange-400 mt-1 text-lg" />
                <div>
                  <Button
                    type="text"
                    className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                    href="tel:+77771234567"
                  >
                    +7 (777) 123-45-67
                  </Button>
                  <Text className="block text-gray-400 text-sm mt-1">
                    {t('footer.workTime')}
                  </Text>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MailOutlined className="text-orange-400 text-lg" />
                <Button
                  type="text"
                  className="text-gray-300 hover:text-white p-0 h-auto font-medium"
                  href="mailto:info@imperium.kz"
                >
                  info@imperium.kz
                </Button>
              </div>
              
              <div className="flex items-start space-x-3">
                <EnvironmentOutlined className="text-orange-400 mt-1 text-lg" />
                <Text className="text-gray-300">
                  г. Алматы, ул. Абая 150
                </Text>
              </div>
              
              <div className="flex items-center space-x-3">
                <WhatsAppOutlined className="text-green-400 text-lg" />
                <Text className="text-gray-300">
                  {t('footer.whatsappOrders')}
                </Text>
              </div>
            </div>
          </Col>
        </Row>
        
        <Divider className="border-gray-700 my-8" />
        
        <Row justify="space-between" align="middle" className="text-gray-400">
          <Col xs={24} md={12} className="text-center md:text-left mb-4 md:mb-0">
            <Text className="text-gray-400">
              © {currentYear} Imperium. {t('footer.allRightsReserved')}
            </Text>
          </Col>
          <Col xs={24} md={12} className="text-center md:text-right">
            <Space split={<Divider type="vertical" className="border-gray-600" />}>
              <Button
                type="text"
                size="small"
                className="text-gray-400 hover:text-white"
                onClick={() => onNavigate && onNavigate('/privacy')}
              >
                {t('footer.privacyPolicy')}
              </Button>
              <Button
                type="text"
                size="small"
                className="text-gray-400 hover:text-white"
                onClick={() => onNavigate && onNavigate('/terms')}
              >
                {t('footer.termsOfUse')}
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;