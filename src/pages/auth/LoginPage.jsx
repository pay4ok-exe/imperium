import React, { useState } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Divider,
  message,
  Row,
  Col,
  Checkbox,
  Space
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Title, Text, Paragraph } = Typography;

const LoginPage = ({ onNavigate, onLogin }) => {
  const { t, language } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('email'); // 'email' or 'phone'

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      message.success({
        content: t('auth.loginSuccess'),
        duration: 3,
      });
      
      // Simulate login success
      if (onLogin) {
        onLogin({
          id: '1',
          fullname: 'Demo User',
          email: values.emailOrPhone,
          role: 'client'
        });
      }
      
      if (onNavigate) {
        onNavigate('/');
      }
    } catch (error) {
      message.error('Ошибка входа. Проверьте данные.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    message.info(`Вход через ${provider} в разработке`);
  };

  const toggleLoginType = () => {
    setLoginType(loginType === 'email' ? 'phone' : 'email');
    form.resetFields(['emailOrPhone']);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-4xl">🏛️</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Imperium
            </span>
          </div>
          <Text type="secondary" className="text-lg">
            {language === 'kz' ? 'Сапалы жиһаз дүкені' : 'Магазин качественной мебели'}
          </Text>
        </div>

        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <Title level={2} className="text-gray-900 mb-2">
                {t('auth.signIn')}
              </Title>
              <Paragraph type="secondary" className="text-base">
                {language === 'kz' 
                  ? 'Аккаунтыңызға кіріңіз'
                  : 'Войдите в свой аккаунт'
                }
              </Paragraph>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              size="large"
              requiredMark={false}
            >
              <Form.Item
                name="emailOrPhone"
                label={
                  <Text strong>
                    {loginType === 'email' ? 'Email' : t('auth.phone')}
                  </Text>
                }
                rules={[
                  {
                    required: true,
                    message: loginType === 'email' ? t('auth.enterEmail') : t('auth.enterPhone')
                  },
                  ...(loginType === 'email' ? [{
                    type: 'email',
                    message: t('auth.emailInvalid')
                  }] : [{
                    pattern: /^\+?[0-9]{10,15}$/,
                    message: t('auth.phoneInvalid')
                  }])
                ]}
              >
                <Input
                  prefix={loginType === 'email' ? <MailOutlined /> : <PhoneOutlined />}
                  placeholder={
                    loginType === 'email' 
                      ? 'example@mail.com' 
                      : '+7 (777) 123-45-67'
                  }
                  className="rounded-xl h-12"
                />
              </Form.Item>

              <div className="text-center mb-4">
                <Button
                  type="link"
                  onClick={toggleLoginType}
                  className="text-orange-500 font-medium p-0"
                >
                  {loginType === 'email' 
                    ? (language === 'kz' ? 'Телефонмен кіру' : 'Войти по телефону')
                    : (language === 'kz' ? 'Email арқылы кіру' : 'Войти по email')
                  }
                </Button>
              </div>

              <Form.Item
                name="password"
                label={<Text strong>{t('auth.password')}</Text>}
                rules={[
                  {
                    required: true,
                    message: t('auth.enterPassword')
                  },
                  {
                    min: 8,
                    message: t('auth.passwordMin')
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder={t('auth.enterPassword')}
                  className="rounded-xl h-12"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <div className="flex items-center justify-between mb-6">
                <Form.Item name="remember" valuePropName="checked" className="mb-0">
                  <Checkbox className="text-gray-600">
                    {language === 'kz' ? 'Мені есте сақта' : 'Запомнить меня'}
                  </Checkbox>
                </Form.Item>
                <Button
                  type="link"
                  className="text-orange-500 font-medium p-0"
                  onClick={() => onNavigate && onNavigate('/forgot-password')}
                >
                  {t('auth.forgotPassword')}
                </Button>
              </div>

              <Form.Item className="mb-6">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-xl h-12 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  {loading ? t('common.loading') : t('auth.signIn')}
                </Button>
              </Form.Item>
            </Form>

            <Divider className="my-6">
              <Text type="secondary">
                {language === 'kz' ? 'немесе' : 'или'}
              </Text>
            </Divider>

            {/* Social Login */}
            <Space direction="vertical" className="w-full" size="middle">
              <Button
                size="large"
                block
                className="rounded-xl h-12 border-gray-300 hover:border-red-400 hover:text-red-500 transition-all duration-200"
                icon={<GoogleOutlined className="text-lg" />}
                onClick={() => handleSocialLogin('Google')}
              >
                {language === 'kz' ? 'Google арқылы кіру' : 'Войти через Google'}
              </Button>
              
              <Row gutter={12}>
                <Col span={12}>
                  <Button
                    size="large"
                    block
                    className="rounded-xl h-12 border-gray-300 hover:border-blue-400 hover:text-blue-500 transition-all duration-200"
                    icon={<FacebookOutlined className="text-lg" />}
                    onClick={() => handleSocialLogin('Facebook')}
                  >
                    Facebook
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    size="large"
                    block
                    className="rounded-xl h-12 border-gray-300 hover:border-gray-600 hover:text-gray-700 transition-all duration-200"
                    icon={<AppleOutlined className="text-lg" />}
                    onClick={() => handleSocialLogin('Apple')}
                  >
                    Apple
                  </Button>
                </Col>
              </Row>
            </Space>

            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <Text type="secondary">
                {t('auth.noAccount')} {' '}
                <Button
                  type="link"
                  className="text-orange-500 font-semibold p-0"
                  onClick={() => onNavigate && onNavigate('/register')}
                >
                  {t('auth.signUpNow')}
                </Button>
              </Text>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <Text type="secondary" className="text-sm">
            {language === 'kz' 
              ? '© 2024 Imperium. Барлық құқықтар қорғалған.'
              : '© 2024 Imperium. Все права защищены.'
            }
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;