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
  Spin,
  Image,
  Divider,
  Avatar
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
  GiftOutlined,
  RightOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../../hooks/useTranslation';

const { Title, Text, Paragraph } = Typography;

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: 'Диван модерн "Элегант"',
    nameKz: 'Модерн диваны "Элегант"',
    price: 485000,
    originalPrice: 580000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    rating: 4.9,
    reviews: 156,
    category: 'sofas',
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    colors: ['#8B4513', '#2F4F4F', '#F5F5DC'],
    sizes: ['M', 'L', 'XL'],
    description: 'Премиум диван с итальянской обивкой',
    descriptionKz: 'Италиялық жаппенен премиум диван',
    material: 'Натуральная кожа',
    dimensions: '220x95x85 см'
  },
  {
    id: 2,
    name: 'Кресло "Релакс Люкс"',
    nameKz: 'Релакс Люкс креслосы',
    price: 245000,
    originalPrice: 295000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    rating: 4.8,
    reviews: 98,
    category: 'chairs',
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    colors: ['#8B4513', '#2F4F4F'],
    sizes: ['M', 'L'],
    description: 'Эргономичное кресло для отдыха',
    descriptionKz: 'Демалыс үшін эргономикалық кресло',
    material: 'Эко-кожа',
    dimensions: '85x90x95 см'
  },
  {
    id: 3,
    name: 'Стол обеденный "Престиж"',
    nameKz: 'Престиж ас үстелі',
    price: 380000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop'
    ],
    rating: 4.7,
    reviews: 134,
    category: 'tables',
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    colors: ['#8B4513', '#D2691E'],
    sizes: ['L', 'XL'],
    description: 'Массив дуба, классический дизайн',
    descriptionKz: 'Емен ағашынан, классикалық дизайн',
    material: 'Массив дуба',
    dimensions: '180x90x75 см'
  },
  {
    id: 4,
    name: 'Спальный гарнитур "Роял"',
    nameKz: 'Роял жатын гарнитуры',
    price: 890000,
    originalPrice: 1050000,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop'
    ],
    rating: 4.9,
    reviews: 89,
    category: 'beds',
    isNew: false,
    isFeatured: true,
    isBestseller: false,
    colors: ['#FFFFFF', '#8B4513'],
    sizes: ['L', 'XL'],
    description: 'Полный комплект для спальни',
    descriptionKz: 'Жатын бөлмеге толық жиынтық',
    material: 'МДФ, натуральный шпон',
    dimensions: '200x160x90 см'
  }
];

// Categories data
const categories = [
  {
    id: 1,
    name: 'Гостиная',
    nameKz: 'Қонақ бөлме',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
    productCount: 150,
    icon: '🛋️'
  },
  {
    id: 2,
    name: 'Столовая',
    nameKz: 'Ас ішетін бөлме',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=200&fit=crop',
    productCount: 85,
    icon: '🍽️'
  },
  {
    id: 3,
    name: 'Спальня',
    nameKz: 'Жатын бөлме',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop',
    productCount: 120,
    icon: '🛏️'
  },
  {
    id: 4,
    name: 'Офис',
    nameKz: 'Кеңсе',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop',
    productCount: 95,
    icon: '💼'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Анна Смирнова',
    nameKz: 'Анна Смирнова',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Великолепное качество мебели! Диван превзошел все ожидания.',
    textKz: 'Жиһаздың керемет сапасы! Диван барлық күтуден асып түсті.',
    location: 'Алматы'
  },
  {
    id: 2,
    name: 'Дмитрий Козлов',
    nameKz: 'Дмитрий Козлов',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Отличный сервис и быстрая доставка. Рекомендую!',
    textKz: 'Мықты қызмет және жылдам жеткізу. Ұсынамын!',
    location: 'Нур-Султан'
  },
  {
    id: 3,
    name: 'Мария Петрова',
    nameKz: 'Мария Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Стильная мебель по разумным ценам. Очень довольна покупкой.',
    textKz: 'Ақылға қонымды бағамен стильді жиһаз. Сатып алуымнан мәз болдым.',
    location: 'Шымкент'
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
    message.success({
      content: `${productName} ${t('products.addedToCart')}`,
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });
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

  const handleCategoryClick = (categoryId) => {
    console.log('Navigate to category:', categoryId);
    // Navigate to catalog with category filter
  };

  // Features data
  const features = [
    {
      icon: <TruckOutlined className="text-4xl text-blue-500" />,
      title: t('home.freeShipping'),
      description: t('home.freeShippingDesc'),
      color: 'blue'
    },
    {
      icon: <SafetyOutlined className="text-4xl text-green-500" />,
      title: t('home.qualityGuarantee'),
      description: t('home.qualityGuaranteeDesc'),
      color: 'green'
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-orange-500" />,
      title: t('home.fastDelivery'),
      description: t('home.fastDeliveryDesc'),
      color: 'orange'
    },
    {
      icon: <CustomerServiceOutlined className="text-4xl text-purple-500" />,
      title: t('home.professionalAssembly'),
      description: t('home.professionalAssemblyDesc'),
      color: 'purple'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Spin size="large" tip={t('common.loading')} />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Text className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                    {t('home.newCollection')}
                  </Text>
                  <Title level={1} className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {t('home.heroTitle')}
                  </Title>
                  <Paragraph className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                    {t('home.heroSubtitle')}
                  </Paragraph>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="primary"
                    size="large"
                    className="bg-gradient-to-r from-orange-500 to-red-500 border-none rounded-full px-8 py-6 h-auto text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    icon={<ShoppingCartOutlined />}
                  >
                    {t('home.shopNow')}
                  </Button>
                  <Button
                    size="large"
                    className="border-2 border-gray-300 text-gray-700 rounded-full px-8 py-6 h-auto text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                    icon={<ArrowRightOutlined />}
                  >
                    {t('home.discoverMore')}
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <Text className="block text-2xl md:text-3xl font-bold text-gray-900">15K+</Text>
                    <Text className="text-gray-600">{t('home.satisfiedClients')}</Text>
                  </div>
                  <div className="text-center">
                    <Text className="block text-2xl md:text-3xl font-bold text-gray-900">500+</Text>
                    <Text className="text-gray-600">{t('home.productsInStock')}</Text>
                  </div>
                  <div className="text-center">
                    <Text className="block text-2xl md:text-3xl font-bold text-gray-900">10+</Text>
                    <Text className="text-gray-600">{t('home.yearsExperience')}</Text>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col xs={24} lg={12}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop"
                  alt="Hero furniture"
                  className="rounded-3xl shadow-2xl relative z-10"
                  preview={false}
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center space-x-3">
                    <CrownOutlined className="text-2xl text-orange-500" />
                    <div>
                      <Text strong className="block">{t('home.premiumFurniture')}</Text>
                      <Text type="secondary" className="text-sm">{t('home.modernDesign')}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Title level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.shopByCategory')}
            </Title>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.categorySubtitle')}
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {categories.map((category) => (
              <Col xs={24} sm={12} lg={6} key={category.id}>
                <Card
                  hoverable
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                  cover={
                    <div className="relative overflow-hidden">
                      <img
                        alt={category.name}
                        src={category.image}
                        className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Text className="text-3xl block mb-1">{category.icon}</Text>
                        <Title level={4} className="text-white mb-1">
                          {language === 'kz' ? category.nameKz : category.name}
                        </Title>
                        <Text className="text-white/90">
                          {category.productCount} {language === 'kz' ? 'тауар' : 'товаров'}
                        </Text>
                      </div>
                    </div>
                  }
                  onClick={() => handleCategoryClick(category.id)}
                  bodyStyle={{ padding: '16px' }}
                >
                  <div className="text-center">
                    <Button
                      type="link"
                      className="text-orange-500 font-semibold p-0"
                      icon={<RightOutlined />}
                    >
                      {t('home.viewAll')}
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Title level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <FireOutlined className="text-orange-500 mr-3" />
              {t('home.featuredProducts')}
            </Title>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.featuredSubtitle')}
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {featuredProducts.map((product) => (
              <Col xs={24} sm={12} lg={6} key={product.id}>
                <Card
                  hoverable
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                  cover={
                    <div className="relative group overflow-hidden">
                      <img
                        alt={product.name}
                        src={product.image}
                        className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.isNew && (
                          <Tag color="green" className="rounded-full px-3 py-1 font-bold border-0">
                            {t('products.newProduct')}
                          </Tag>
                        )}
                        {product.isBestseller && (
                          <Tag color="gold" className="rounded-full px-3 py-1 font-bold border-0">
                            <CrownOutlined /> {t('products.bestseller')}
                          </Tag>
                        )}
                        {product.originalPrice && (
                          <Tag color="red" className="rounded-full px-3 py-1 font-bold border-0">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </Tag>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
                        <Button
                          type="text"
                          icon={favorites.has(product.id) ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
                          className="bg-white/90 hover:bg-white rounded-full w-10 h-10 shadow-lg border-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleFavorite(product.id);
                          }}
                        />
                        <Button
                          type="text"
                          icon={<EyeOutlined />}
                          className="bg-white/90 hover:bg-white rounded-full w-10 h-10 shadow-lg border-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProduct(product.id);
                          }}
                        />
                      </div>

                      {/* Color Options */}
                      <div className="absolute bottom-3 left-3 flex space-x-2">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: '20px' }}
                >
                  <div className="space-y-3">
                    <Title level={4} className="mb-2 line-clamp-2 text-gray-900">
                      {language === 'kz' ? product.nameKz : product.name}
                    </Title>
                    
                    <div className="flex items-center space-x-2">
                      <Rate disabled value={product.rating} allowHalf className="text-sm" />
                      <Text type="secondary" className="text-sm">
                        ({product.reviews})
                      </Text>
                    </div>

                    <Text type="secondary" className="block text-sm line-clamp-2">
                      {language === 'kz' ? product.descriptionKz : product.description}
                    </Text>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Text strong className="text-xl text-gray-900 block">
                          {formatPrice(product.price)}
                        </Text>
                        {product.originalPrice && (
                          <Text delete type="secondary" className="text-sm">
                            {formatPrice(product.originalPrice)}
                          </Text>
                        )}
                      </div>
                      
                      <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        {t('products.addToCart')}
                      </Button>
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
              className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-full px-12 py-6 h-auto text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              icon={<ArrowRightOutlined />}
            >
              {t('home.viewAll')}
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  className="text-center border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto`}>
                      {feature.icon}
                    </div>
                    <Title level={4} className="text-gray-900">
                      {feature.title}
                    </Title>
                    <Text type="secondary" className="text-base leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Title level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.testimonials')}
            </Title>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.testimonialsSubtitle')}
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {testimonials.map((testimonial) => (
              <Col xs={24} md={8} key={testimonial.id}>
                <Card
                  className="border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="space-y-4">
                    <Rate disabled value={testimonial.rating} className="text-yellow-400" />
                    <Paragraph className="text-gray-600 text-base leading-relaxed italic">
                      "{language === 'kz' ? testimonial.textKz : testimonial.text}"
                    </Paragraph>
                    <div className="flex items-center space-x-3">
                      <Avatar
                        src={testimonial.avatar}
                        size={48}
                        className="border-2 border-orange-200"
                      />
                      <div>
                        <Text strong className="block text-gray-900">
                          {language === 'kz' ? testimonial.nameKz : testimonial.name}
                        </Text>
                        <Text type="secondary" className="text-sm">
                          {testimonial.location}
                        </Text>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Title level={2} className="text-white text-3xl md:text-4xl font-bold mb-6">
            {language === 'kz' ? 'Сапалы жиһазбен өміріңізді өзгертіңіз' : 'Преобразите свой дом качественной мебелью'}
          </Title>
          <Paragraph className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {language === 'kz' 
              ? 'Премиум класс жиһаздың үлкен таңдауы мен тегін жеткізу. Бүгін тапсырыс беріңіз!'
              : 'Огромный выбор премиальной мебели и бесплатная доставка. Закажите сегодня!'
            }
          </Paragraph>
          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              className="bg-white text-orange-500 border-0 rounded-full px-12 py-6 h-auto text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              icon={<ShoppingCartOutlined />}
            >
              {t('home.shopNow')}
            </Button>
            <Button
              size="large"
              className="border-2 border-white text-white rounded-full px-12 py-6 h-auto text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
              icon={<ArrowRightOutlined />}
            >
              {t('navigation.contact')}
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HomePage;