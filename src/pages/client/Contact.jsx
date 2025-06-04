import React from 'react';
import { Typography, Row, Col, Card, Form, Input, Button, message } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Title, Text, Paragraph } = Typography;

const ContactPage = () => {
  const { t, language } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Contact form:', values);
    message.success(
      language === 'ru' 
        ? 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.'
        : 'Сіздің хабарламаңыз жіберілді! Біз жақын арада сізбен байланысамыз.'
    );
    form.resetFields();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            {t('navigation.contact')}
          </Title>
          <Paragraph className="text-white text-xl max-w-3xl mx-auto">
            {language === 'ru'
              ? 'Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!'
              : 'Бізбен кез келген ыңғайлы тәсілмен байланысыңыз. Біз әрдайым көмектесуге дайынбыз!'
            }
          </Paragraph>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Row gutter={[48, 48]}>
          {/* Contact Information */}
          <Col xs={24} md={12}>
            <Title level={2} className="mb-8">
              {language === 'ru' ? 'Контактная информация' : 'Байланыс ақпараты'}
            </Title>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <PhoneOutlined className="text-orange-500 text-2xl mt-1" />
                  <div>
                    <Title level={4} className="mb-1">
                      {language === 'ru' ? 'Телефон' : 'Телефон'}
                    </Title>
                    <Text strong className="text-lg">+7 (777) 123-45-67</Text>
                    <br />
                    <Text type="secondary">{t('footer.workTime')}</Text>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <WhatsAppOutlined className="text-green-500 text-2xl mt-1" />
                  <div>
                    <Title level={4} className="mb-1">
                      WhatsApp
                    </Title>
                    <Text strong className="text-lg">+7 (777) 123-45-67</Text>
                    <br />
                    <Text type="secondary">
                      {language === 'ru' ? 'Быстрые заказы и консультации' : 'Жылдам тапсырыстар мен кеңестер'}
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <MailOutlined className="text-blue-500 text-2xl mt-1" />
                  <div>
                    <Title level={4} className="mb-1">
                      Email
                    </Title>
                    <Text strong className="text-lg">info@imperium.kz</Text>
                    <br />
                    <Text type="secondary">
                      {language === 'ru' ? 'Для деловых вопросов' : 'Іскерлік сұрақтар үшін'}
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <EnvironmentOutlined className="text-red-500 text-2xl mt-1" />
                  <div>
                    <Title level={4} className="mb-1">
                      {language === 'ru' ? 'Адрес' : 'Мекен-жай'}
                    </Title>
                    <Text strong className="text-lg">
                      {language === 'ru' ? 'г. Алматы, ул. Абая 150' : 'Алматы қ., Абай к-сі 150'}
                    </Text>
                    <br />
                    <Text type="secondary">
                      {language === 'ru' ? 'Главный офис и шоу-рум' : 'Бас кеңсе және шоу-рум'}
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <ClockCircleOutlined className="text-purple-500 text-2xl mt-1" />
                  <div>
                    <Title level={4} className="mb-1">
                      {language === 'ru' ? 'Режим работы' : 'Жұмыс уақыты'}
                    </Title>
                    <Text strong className="text-lg">{t('footer.workTime')}</Text>
                    <br />
                    <Text type="secondary">
                      {language === 'ru' ? 'Без выходных' : 'Демалыссыз'}
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          
          {/* Contact Form */}
          <Col xs={24} md={12}>
            <Card className="border-0 shadow-lg">
              <Title level={2} className="mb-8">
                {language === 'ru' ? 'Напишите нам' : 'Бізге жазыңыз'}
              </Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                size="large"
              >
                <Form.Item 
                  name="name" 
                  label={language === 'ru' ? 'Ваше имя' : 'Сіздің атыңыз'}
                  rules={[{ 
                    required: true, 
                    message: language === 'ru' ? 'Пожалуйста, введите ваше имя' : 'Атыңызды енгізіңіз' 
                  }]}
                >
                  <Input 
                    placeholder={language === 'ru' ? 'Иван Иванов' : 'Иван Иванов'}
                    className="rounded-lg"
                  />
                </Form.Item>
                
                <Form.Item 
                  name="email" 
                  label="Email"
                  rules={[
                    { 
                      required: true, 
                      message: language === 'ru' ? 'Пожалуйста, введите email' : 'Email енгізіңіз' 
                    },
                    { 
                      type: 'email', 
                      message: language === 'ru' ? 'Некорректный email' : 'Дұрыс емес email' 
                    }
                  ]}
                >
                  <Input 
                    placeholder="example@mail.com"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item 
                  name="phone" 
                  label={language === 'ru' ? 'Телефон' : 'Телефон'}
                  rules={[{ 
                    required: true, 
                    message: language === 'ru' ? 'Пожалуйста, введите телефон' : 'Телефонды енгізіңіз' 
                  }]}
                >
                  <Input 
                    placeholder="+7 (777) 123-45-67"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item 
                  name="subject" 
                  label={language === 'ru' ? 'Тема' : 'Тақырып'}
                  rules={[{ 
                    required: true, 
                    message: language === 'ru' ? 'Пожалуйста, введите тему' : 'Тақырыпты енгізіңіз' 
                  }]}
                >
                  <Input 
                    placeholder={language === 'ru' ? 'Тема вашего обращения' : 'Сіздің өтінішіңіздің тақырыбы'}
                    className="rounded-lg"
                  />
                </Form.Item>
                
                <Form.Item 
                  name="message" 
                  label={language === 'ru' ? 'Сообщение' : 'Хабарлама'}
                  rules={[{ 
                    required: true, 
                    message: language === 'ru' ? 'Пожалуйста, введите сообщение' : 'Хабарламаны енгізіңіз' 
                  }]}
                >
                  <Input.TextArea 
                    rows={6} 
                    placeholder={language === 'ru' ? 'Расскажите подробнее о вашем вопросе...' : 'Сұрағыңыз туралы толығырақ айтыңыз...'}
                    className="rounded-lg"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large" 
                    block
                    className="bg-gradient-to-r from-orange-500 to-amber-500 border-none rounded-lg h-12 font-medium"
                  >
                    {language === 'ru' ? 'Отправить сообщение' : 'Хабарлама жіберу'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;