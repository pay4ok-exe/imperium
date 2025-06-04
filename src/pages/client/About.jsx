import React from 'react';
import { Typography, Row, Col, Card, Image, Timeline, Statistic } from 'antd';
import { 
  TrophyOutlined, 
  TeamOutlined, 
  HeartOutlined, 
  GlobalOutlined 
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Title, Paragraph, Text } = Typography;

const AboutPage = () => {
  const { t, language } = useTranslation();

  const timelineItems = [
    {
      color: 'green',
      children: (
        <div>
          <Text strong>2014</Text>
          <br />
          <Text>{language === 'ru' ? 'Основание компании' : 'Компания құрылуы'}</Text>
        </div>
      )
    },
    {
      color: 'blue',
      children: (
        <div>
          <Text strong>2017</Text>
          <br />
          <Text>{language === 'ru' ? 'Открытие первого салона' : 'Алғашқы салонның ашылуы'}</Text>
        </div>
      )
    },
    {
      color: 'orange',
      children: (
        <div>
          <Text strong>2020</Text>
          <br />
          <Text>{language === 'ru' ? 'Запуск интернет-магазина' : 'Интернет дүкеннің іске қосылуы'}</Text>
        </div>
      )
    },
    {
      color: 'purple',
      children: (
        <div>
          <Text strong>2024</Text>
          <br />
          <Text>{language === 'ru' ? 'Более 15,000 довольных клиентов' : '15,000-нан астам қанағаттанған клиент'}</Text>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Title level={1} className="text-white mb-6">
            {t('navigation.about')}
          </Title>
          <Paragraph className="text-white text-xl max-w-3xl mx-auto">
            {language === 'ru' 
              ? 'Мы создаем качественную мебель, которая превращает дом в уютное место для жизни'
              : 'Біз үйді өмір сүру үшін жайлы орынға айналдыратын сапалы жиһаз жасаймыз'
            }
          </Paragraph>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Story Section */}
        <Row gutter={[48, 48]} className="mb-16">
          <Col xs={24} md={12}>
            <Card className="h-full border-0 shadow-lg">
              <Title level={2} className="mb-6">
                {language === 'ru' ? 'Наша история' : 'Біздің тарихымыз'}
              </Title>
              <Paragraph className="text-lg leading-relaxed mb-4">
                {language === 'ru' 
                  ? 'Более 10 лет назад мы начали с простой идеи: создавать мебель, которая объединяет комфорт, качество и стиль. Сегодня Imperium — это команда профессионалов, которая помогает тысячам семей создать дом их мечты.'
                  : '10 жылдан астам уақыт бұрын біз қарапайым идеядан бастадық: ыңғайлылық, сапа және стильді біріктіретін жиһаз жасау. Бүгінгі таңда Imperium — мыңдаған отбасыларға арман үйін жасауға көмектесетін кәсіпқойлар командасы.'
                }
              </Paragraph>
              <Paragraph className="text-lg leading-relaxed">
                {language === 'ru'
                  ? 'Каждое изделие создается с любовью и вниманием к деталям, используя только качественные материалы и современные технологии производства.'
                  : 'Әрбір бұйым сүйіспеншілікпен және бөлшектерге назар аудара отырып, тек сапалы материалдар мен заманауи өндіріс технологияларын пайдалана отырып жасалады.'
                }
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <div className="h-full">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                alt="About us"
                className="rounded-2xl w-full h-full object-cover"
                preview={false}
              />
            </div>
          </Col>
        </Row>

        {/* Values Section */}
        <Row gutter={[32, 32]} className="mb-16">
          <Col xs={24}>
            <Title level={2} className="text-center mb-12">
              {language === 'ru' ? 'Наши ценности' : 'Біздің құндылықтарымыз'}
            </Title>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <TrophyOutlined className="text-5xl text-orange-500 mb-4" />
              <Title level={4}>
                {language === 'ru' ? 'Качество' : 'Сапа'}
              </Title>
              <Text type="secondary">
                {language === 'ru' 
                  ? 'Только лучшие материалы и проверенные технологии'
                  : 'Тек ең жақсы материалдар мен тексерілген технологиялар'
                }
              </Text>
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <TeamOutlined className="text-5xl text-blue-500 mb-4" />
              <Title level={4}>
                {language === 'ru' ? 'Команда' : 'Команда'}
              </Title>
              <Text type="secondary">
                {language === 'ru'
                  ? 'Профессионалы своего дела с многолетним опытом'
                  : 'Көп жылдық тәжірибесі бар өз ісінің кәсіпқойлары'
                }
              </Text>
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <HeartOutlined className="text-5xl text-red-500 mb-4" />
              <Title level={4}>
                {language === 'ru' ? 'Забота' : 'Қамқорлық'}
              </Title>
              <Text type="secondary">
                {language === 'ru'
                  ? 'Индивидуальный подход к каждому клиенту'
                  : 'Әрбір клиентке жеке көзқарас'
                }
              </Text>
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <GlobalOutlined className="text-5xl text-green-500 mb-4" />
              <Title level={4}>
                {language === 'ru' ? 'Инновации' : 'Инновациялар'}
              </Title>
              <Text type="secondary">
                {language === 'ru'
                  ? 'Современные решения для современного дома'
                  : 'Заманауи үй үшін заманауи шешімдер'
                }
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Timeline */}
        <Row gutter={[48, 48]}>
          <Col xs={24} md={12}>
            <Title level={2} className="mb-8">
              {language === 'ru' ? 'Путь развития' : 'Даму жолы'}
            </Title>
            <Timeline items={timelineItems} />
          </Col>
          
          <Col xs={24} md={12}>
            <Title level={2} className="mb-8">
              {language === 'ru' ? 'Достижения' : 'Жетістіктер'}
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={12}>
                <Statistic
                  title={t('home.satisfiedClients')}
                  value={15000}
                  suffix="+"
                  valueStyle={{ color: '#D2691E' }}
                />
              </Col>
              <Col xs={12}>
                <Statistic
                  title={language === 'ru' ? 'Проектов завершено' : 'Аяқталған жобалар'}
                  value={2500}
                  suffix="+"
                  valueStyle={{ color: '#D2691E' }}
                />
              </Col>
              <Col xs={12}>
                <Statistic
                  title={language === 'ru' ? 'Городов присутствия' : 'Қатысу қалалары'}
                  value={12}
                  valueStyle={{ color: '#D2691E' }}
                />
              </Col>
              <Col xs={12}>
                <Statistic
                  title={language === 'ru' ? 'Лет опыта' : 'Тәжірибе жылдары'}
                  value={10}
                  suffix="+"
                  valueStyle={{ color: '#D2691E' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;