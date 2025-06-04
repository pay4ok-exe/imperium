import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  Button,
  Input,
  Form,
  message
} from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
  SendOutlined
} from '@ant-design/icons';
import { useLanguage } from '../../contexts/LanguageContext';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const AppFooter = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const currentYear = new Date().getFullYear();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleNewsletterSubmit = (values) => {
    message.success(t('footer.newsletterSuccess'));
    form.resetFields();
  };

  const catalogItems = [
    { key: 'sofas', label: t('categories.sofas') },
    { key: 'chairs', label: t('categories.chairs') },
    { key: 'tables', label: t('categories.tables') },
    { key: 'beds', label: t('categories.beds') },
    { key: 'wardrobes', label: t('categories.wardrobes') }
  ];

  const infoItems = [
    { key: 'about', label: t('footer.aboutUs') },
    { key: 'delivery', label: t('footer.delivery') },
    { key: 'payment', label: t('footer.payment') },
    { key: 'warranty', label: t('footer.warranty') }
  ];

  return (
    <Footer className="bg-neutral-800 text-white pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} md={8} lg={7}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl animate-float">🏛️</span>
                <span className="text-xl font-display font-bold text-white">
                  Imperium
                </span>
              </div>
              
              <Paragraph className="text-neutral-300 text-sm">
                {t('footer.description')}
              </Paragraph>
              
              <Form
                form={form}
                onFinish={handleNewsletterSubmit}
                className="mt-4"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: t('validation.emailRequired') },
                    { type: 'email', message: t('validation.emailValid') }
                  ]}
                >
                  <Input.Search
                    placeholder={t('footer.newsletterPlaceholder')}
                    enterButton={
                      <Button 
                        type="primary" 
                        icon={<SendOutlined />}
                        className="bg-primary border-primary"
                      >
                        {t('footer.subscribe')}
                      </Button>
                    }
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Form>
              
              <Space size="large" className="mt-4">
                <Button
                  type="text"
                  icon={<WhatsAppOutlined className="text-xl text-green-400 hover:text-green-300" />}
                  href="https://wa.me/77771234567"
                  target="_blank"
                />
                <Button
                  type="text"
                  icon={<InstagramOutlined className="text-xl text-pink-400 hover:text-pink-300" />}
                  href="https://instagram.com/imperium"
                  target="_blank"
                />
                <Button
                  type="text"
                  icon={<FacebookOutlined className="text-xl text-blue-400 hover:text-blue-300" />}
                  href="https://facebook.com/imperium"
                  target="_blank"
                />
              </Space>
            </div>
          </Col>
          
          {/* Catalog Links */}
          <Col xs={12} md={5} lg={5}>
            <Title level={5} className="text-white mb-4 font-display">
              {t('footer.catalog')}
            </Title>
            <div className="space-y-2">
              {catalogItems.map((item) => (
                <div key={item.key}>
                  <Button
                    type="text"
                    className="text-neutral-300 hover:text-white p-0 h-auto text-sm"
                    onClick={() => handleNavigate(`/catalog?category=${item.key}`)}
                  >
                    {item.label}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Info Links */}
          <Col xs={12} md={5} lg={5}>
            <Title level={5} className="text-white mb-4 font-display">
              {t('footer.information')}
            </Title>
            <div className="space-y-2">
              {infoItems.map((item) => (
                <div key={item.key}>
                  <Button
                    type="text"
                    className="text-neutral-300 hover:text-white p-0 h-auto text-sm"
                    onClick={() => handleNavigate(`/${item.key}`)}
                  >
                    {item.label}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
          
          {/* Contact Info */}
          <Col xs={24} md={6} lg={7}>
            <Title level={5} className="text-white mb-4 font-display">
              {t('footer.contacts')}
            </Title>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <PhoneOutlined className="text-primary mt-1" />
                <div>
                  <Button
                    type="text"
                    className="text-neutral-300 hover:text-white p-0 h-auto text-sm"
                    href="tel:+77771234567"
                  >
                    +7 (777) 123-45-67
                  </Button>
                  <Text className="block text-neutral-400 text-xs">
                    {t('footer.workTime')}
                  </Text>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MailOutlined className="text-primary" />
                <Button
                  type="text"
                  className="text-neutral-300 hover:text-white p-0 h-auto text-sm"
                  href="mailto:info@imperium.kz"
                >
                  info@imperium.kz
                </Button>
              </div>
              
              <div className="flex items-start space-x-3">
                <EnvironmentOutlined className="text-primary mt-1" />
                <Text className="text-neutral-300 text-sm">
                  г. Алматы, ул. Абая 150
                </Text>
              </div>
              
              <div className="flex items-center space-x-3">
                <WhatsAppOutlined className="text-green-400" />
                <Text className="text-neutral-300 text-sm">
                  {t('footer.whatsappOrders')}
                </Text>
              </div>
            </div>
          </Col>
        </Row>
        
        <Divider className="border-neutral-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-xs">
          <div className="mb-3 md:mb-0">
            © {currentYear} Imperium. {t('footer.allRightsReserved')}
          </div>
          <Space split={<Divider type="vertical" className="border-neutral-600 mx-2" />}>
            <Button
              type="text"
              size="small"
              className="text-neutral-400 hover:text-white p-0 h-auto text-xs"
              onClick={() => handleNavigate('/privacy')}
            >
              {t('footer.privacyPolicy')}
            </Button>
            <Button
              type="text"
              size="small"
              className="text-neutral-400 hover:text-white p-0 h-auto text-xs"
              onClick={() => handleNavigate('/terms')}
            >
              {t('footer.termsOfUse')}
            </Button>
          </Space>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;