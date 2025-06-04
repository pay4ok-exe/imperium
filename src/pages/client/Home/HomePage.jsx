import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Rate,
  Badge,
  Carousel,
  Tag,
  Statistic,
  message,
  Spin
} from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  EyeOutlined,
  StarFilled,
  FireOutlined,
  TruckOutlined,
  SafetyOutlined,
  CustomerServiceOutlined,
  GiftOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../../hooks/useTranslation';

const { Title, Text, Paragraph } = Typography;

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: 'Диван Комфорт Люкс',
    nameKz: 'Комфорт Люкс диваны',
    price: 450000,
    originalPrice: 520000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop',
    rating: 4.8,
    reviews: 124,
    category: 'sofas',
    isNew: true,
    isFeatured: true,
    colors: ['#8B4513', '#D2691E', '#F5F5DC'],
    sizes: ['M', 'L', 'XL'],
    description: 'Элегантный диван с ортопедическим матрасом',
    descriptionKz: 'Ортопедиялық матрасы бар элегантты диван'
  },
  {
    id: 2,
    name: 'Кресло Релакс',
    nameKz: 'Релакс креслосы',
    price: 180000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    rating: 4.5,
    reviews: 89,
    category: 'chairs',
    isNew: false,
    isFeatured: true,
    colors: ['#8B4513', '#2F4F4F'],
    sizes: ['M', 'L'],
    description: 'Удобное кресло для отдыха',
    descriptionKz: 'Демалыс үшін ыңғайлы кресло'
  },
  {
    id: 3,
    name: 'Стол обеденный Элегант',
    nameKz: 'Элегант ас үстелі',
    price: 320000,
    originalPrice: 380000,
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop',
    rating: 4.9,
    reviews: 156,
    category: 'tables',
    isNew: true,
    isFeatured: false,
    colors: ['#8B4513', '#D2691E'],
    sizes: ['L', 'XL'],
    description: 'Изысканный обеденный стол из массива',
    descriptionKz: 'Массивтен жасалған талғампаз ас үстелі'
  },
  {
    id: 4,
    name: 'Шкаф-купе Модерн',
    nameKz: 'Модерн шкафы',
    price: 680000,
    originalPrice: 750000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
    rating: 4.7,
    reviews: 67,
    category: 'wardrobes',
    isNew: false,
    isFeatured: true,
    colors: ['#FFFFFF', '#8B4513'],
    sizes: ['L', 'XL'],
    description: 'Современный шкаф-купе с зеркалами',
    descriptionKz: 'Айналы заманауи шкаф-купе'
  }
];

const HomePage = () => {
  const { t, language } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setFeaturedProducts(mockProducts.filter(p => p.isFeatured));
      setLoading(false);
    }, 1000);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₸';
  };

  const handleAddToCart = (product) => {
    const productName = language === 'kz' ? product.nameKz : product.name;
    message.success(`${productName} ${t('products.addedToCart')}`);
  };

  const handleToggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
      message.info(t('products.removedFromFavorites'));
    } else {
      newFavorites.add(productId);
      message.success(t('products.addedToFavorites'));
    }
    setFavorites(newFavorites);
  };

  const handleViewProduct = (productId) => {
    console.log('View product:', productId);
    // Navigate to product detail page
  };

  // Hero slides data
  const heroSlides = [
    {
      title: t('home.heroTitle1'),
      subtitle: t('home.heroSubtitle1'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
      cta: t('home.viewCatalog'),
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: t('home.heroTitle2'),
      subtitle: t('home.heroSubtitle2'),
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop',
      cta: t('home.buyNow'),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: t('home.heroTitle3'),
      subtitle: t('home.heroSubtitle3'),
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop',
      cta: t('home.viewNewItems'),
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  // Features data
  const features = [
    {
      icon: <TruckOutlined className="text-3xl text-blue-500" />,
      title: t('features.freeDelivery'),
      description: t('features.freeDeliveryDesc')
    },
    {
      icon: <SafetyOutlined className="text-3xl text-green-500" />,
      title: t('features.qualityGuarantee'),
      description: t('features.qualityGuaranteeDesc')
    },
    {
      icon: <CustomerServiceOutlined className="text-3xl text-purple-500" />,
      title: t('features.support247'),
      description: t('features.support247Desc')
    },
    {
      icon: <GiftOutlined className="text-3xl text-orange-500" />,
      title: t('features.specialOffers'),
      description: t('features.specialOffersDesc')
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" tip={t('common.loading')} />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Carousel autoplay effect="fade" dots={{ className: 'custom-dots' }}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative">
              <div
                className="h-96 md:h-[600px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} bg-opacity-70`} />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl">
                    <Title 
                      level={1} 
                      className="text-white mb-6 text-3xl md:text-6xl font-bold animate-fade-in"
                    >
                      {slide.title}
                    </Title>
                    <Paragraph className="text-white text-lg md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                      {slide.subtitle}
                    </Paragraph>
                    <Button
                      type="primary"
                      size="large"
                      className="bg-white text-gray-800 border-none rounded-full px-12 py-6 h-auto text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-100"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <div className="text-center">
                <Statistic
                  value={15000}
                  suffix="+"
                  valueStyle={{ color: '#D2691E', fontSize: '2.5rem', fontWeight: 'bold' }}
                />
                <Text className="text-gray-600 text-lg">
                  {t('home.satisfiedClients')}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="text-center">
                <Statistic
                  value={500}
                  suffix="+"
                  valueStyle={{ color: '#D2691E', fontSize: '2.5rem', fontWeight: 'bold' }}
                />
                <Text className="text-gray-600 text-lg">
                  {t('home.productsInCatalog')}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="text-center">
                <Statistic
                  value={10}
                  suffix="+"
                  valueStyle={{ color: '#D2691E', fontSize: '2.5rem', fontWeight: 'bold' }}
                />
                <Text className="text-gray-600 text-lg">
                  {t('home.yearsOnMarket')}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="text-center">
                <Statistic
                  value={99}
                  suffix="%"
                  valueStyle={{ color: '#D2691E', fontSize: '2.5rem', fontWeight: 'bold' }}
                />
                <Text className="text-gray-600 text-lg">
                  {t('home.positiveReviews')}
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Title level={2} className="mb-4">
              <FireOutlined className="text-orange-500 mr-3" />
              {t('home.featuredProducts')}
            </Title>
            <Text type="secondary" className="text-lg">
              {t('home.featuredSubtitle')}
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {featuredProducts.map((product) => (
              <Col xs={24} sm={12} md={6} key={product.id}>
                <Card
                  hoverable
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  cover={
                    <div className="relative group">
                      <img
                        alt={product.name}
                        src={product.image}
                        className="h-48 md:h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.isNew && (
                          <Tag color="green" className="rounded-full px-3 py-1 font-bold">
                            {t('products.newProduct')}
                          </Tag>
                        )}
                        {product.originalPrice && (
                          <Tag color="red" className="rounded-full px-3 py-1 font-bold">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </Tag>
                        )}
                        <Tag color="gold" className="rounded-full px-3 py-1">
                          <FireOutlined /> {t('products.featured')}
                        </Tag>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
                        <Button
                          type="text"
                          icon={favorites.has(product.id) ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
                          className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 shadow-lg"
                          onClick={() => handleToggleFavorite(product.id)}
                        />
                        <Button
                          type="text"
                          icon={<EyeOutlined />}
                          className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 shadow-lg"
                          onClick={() => handleViewProduct(product.id)}
                        />
                      </div>

                      {/* Color Options */}
                      <div className="absolute bottom-3 left-3 flex space-x-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  }
                  actions={[
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      onClick={() => handleAddToCart(product)}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 border-none rounded-full mx-2"
                      block
                    >
                      {t('products.addToCart')}
                    </Button>
                  ]}
                >
                  <div className="p-2">
                    <Title level={4} className="mb-2 line-clamp-2 h-12">
                      {language === 'kz' ? product.nameKz : product.name}
                    </Title>
                    
                    <div className="flex items-center mb-3">
                      <Rate disabled value={product.rating} allowHalf className="text-sm" />
                      <Text type="secondary" className="ml-2">
                        ({product.reviews})
                      </Text>
                    </div>

                    <Text type="secondary" className="block mb-3 line-clamp-2 text-sm">
                      {language === 'kz' ? product.descriptionKz : product.description}
                    </Text>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <Text strong className="text-xl text-orange-600">
                          {formatPrice(product.price)}
                        </Text>
                        {product.originalPrice && (
                          <Text delete type="secondary" className="text-sm">
                            {formatPrice(product.originalPrice)}
                          </Text>
                        )}
                      </div>
                      
                      <div className="flex space-x-1">
                        {product.sizes.map((size, index) => (
                          <Tag key={index} className="rounded-full text-xs">
                            {size}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12">
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-orange-500 to-amber-500 border-none rounded-full px-12 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {t('home.viewFullCatalog')}
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Title level={2} className="mb-4">
              {t('home.whyChooseUs')}
            </Title>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  className="text-center border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <Title level={4} className="mb-2">
                      {feature.title}
                    </Title>
                    <Text type="secondary" className="text-base">
                      {feature.description}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;