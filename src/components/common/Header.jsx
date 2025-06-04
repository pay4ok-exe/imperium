import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Layout,
  Button,
  Input,
  Badge,
  Dropdown,
  Menu,
  Space,
  Avatar,
  Drawer,
  Typography,
  Select
} from 'antd';
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  UserOutlined,
  GlobalOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const { Header } = Layout;
const { Text } = Typography;
const { Option } = Select;

const AppHeader = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { cartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuVisible(false);
  };

  const handleSearch = (value) => {
    navigate(`/catalog?search=${encodeURIComponent(value)}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // User dropdown menu items
  const userMenuItems = [
    {
      key: 'profile',
      label: t('common.profile'),
      onClick: () => navigate('/profile')
    },
    {
      key: 'orders',
      label: t('common.orders'),
      onClick: () => navigate('/orders')
    },
    {
      key: 'favorites',
      label: t('common.favorites'),
      onClick: () => navigate('/favorites')
    },
    {
      key: 'logout',
      label: t('common.logout'),
      danger: true,
      onClick: handleLogout
    }
  ];

  // Mobile menu items
  const mobileMenuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: t('navigation.home'),
      onClick: () => handleNavigate('/')
    },
    {
      key: 'catalog',
      icon: <AppstoreOutlined />,
      label: t('navigation.catalog'),
      onClick: () => handleNavigate('/catalog')
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      label: t('navigation.about'),
      onClick: () => handleNavigate('/about')
    },
    {
      key: 'contact',
      icon: <PhoneOutlined />,
      label: t('navigation.contact'),
      onClick: () => handleNavigate('/contact')
    }
  ];

  return (
    <>
      <Header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md h-16' : 'bg-transparent h-20'
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              type="text"
              icon={<MenuOutlined className="text-neutral-700" />}
              className="md:hidden"
              onClick={() => setMobileMenuVisible(true)}
            />
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl animate-float">🏛️</span>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Imperium
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              type="text" 
              className={`text-neutral-700 hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
              onClick={() => navigate('/')}
            >
              {t('navigation.home')}
            </Button>
            <Button 
              type="text" 
              className={`text-neutral-700 hover:text-primary ${
                location.pathname === '/catalog' ? 'text-primary' : ''
              }`}
              onClick={() => navigate('/catalog')}
            >
              {t('navigation.catalog')}
            </Button>
            <Button 
              type="text" 
              className={`text-neutral-700 hover:text-primary ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
              onClick={() => navigate('/about')}
            >
              {t('navigation.about')}
            </Button>
            <Button 
              type="text" 
              className={`text-neutral-700 hover:text-primary ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
              onClick={() => navigate('/contact')}
            >
              {t('navigation.contact')}
            </Button>
          </div>

          {/* Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <Input.Search
              placeholder={t('common.searchPlaceholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              className="rounded-full"
              enterButton={<SearchOutlined />}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              type="text"
              icon={<SearchOutlined className="text-neutral-700" />}
              className="md:hidden"
              onClick={() => navigate('/search')}
            />
            
            <Select
              value={language}
              onChange={changeLanguage}
              bordered={false}
              dropdownMatchSelectWidth={false}
              className="hidden md:inline-block"
            >
              <Option value="ru">
                <Space>
                  <span>🇷🇺</span>
                  <span className="font-medium">РУС</span>
                </Space>
              </Option>
              <Option value="kz">
                <Space>
                  <span>🇰🇿</span>
                  <span className="font-medium">ҚАЗ</span>
                </Space>
              </Option>
            </Select>

            <Badge count={favoritesCount} size="small" offset={[-2, 2]}>
              <Button
                type="text"
                icon={<HeartOutlined className="text-neutral-700 hover:text-red-500" />}
                onClick={() => navigate('/favorites')}
              />
            </Badge>

            <Badge count={cartCount} size="small" offset={[-2, 2]}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined className="text-neutral-700 hover:text-primary" />}
                onClick={() => navigate('/cart')}
              />
            </Badge>

            {isAuthenticated() ? (
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                arrow
              >
                <Button type="text">
                  <Avatar 
                    size="small" 
                    icon={<UserOutlined />}
                    className="bg-primary"
                  />
                  <span className="ml-2 hidden md:inline text-neutral-700">
                    {user?.fullname.split(' ')[0]}
                  </span>
                </Button>
              </Dropdown>
            ) : (
              <Button 
                type="primary"
                onClick={() => navigate('/login')}
                className="hidden md:inline-block"
              >
                {t('common.login')}
              </Button>
            )}
          </div>
        </div>
      </Header>

      {/* Empty space to offset fixed header */}
      <div className={scrolled ? 'h-16' : 'h-20'} />

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏛️</span>
              <span className="text-lg font-display font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Imperium
              </span>
            </div>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setMobileMenuVisible(false)}
            />
          </div>
        }
        placement="left"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        className="md:hidden"
        headerStyle={{ borderBottom: 'none' }}
      >
        <div className="space-y-4">
          {/* Mobile Search */}
          <Input.Search
            placeholder={t('common.searchMobile')}
            onSearch={handleSearch}
            className="mb-6"
          />

          {/* Mobile Menu Items */}
          <Menu
            mode="vertical"
            items={mobileMenuItems}
            className="border-none"
            selectedKeys={[location.pathname === '/' ? 'home' : location.pathname.split('/')[1]]}
          />

          {/* Language Switcher */}
          <div className="pt-4 border-t border-neutral-100">
            <Text strong className="block mb-3">
              {t('common.language')}
            </Text>
            <div className="flex space-x-2">
              <Button
                type={language === 'ru' ? 'primary' : 'default'}
                onClick={() => changeLanguage('ru')}
                className="flex-1"
              >
                🇷🇺 Русский
              </Button>
              <Button
                type={language === 'kz' ? 'primary' : 'default'}
                onClick={() => changeLanguage('kz')}
                className="flex-1"
              >
                🇰🇿 Қазақша
              </Button>
            </div>
          </div>

          {/* User Authentication */}
          <div className="pt-4 border-t border-neutral-100">
            {isAuthenticated() ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar icon={<UserOutlined />} className="bg-primary" />
                  <div>
                    <Text strong>{user?.fullname}</Text>
                    <Text type="secondary" className="block text-sm">{user?.email}</Text>
                  </div>
                </div>
                <Button 
                  block 
                  onClick={() => handleNavigate('/profile')}
                >
                  {t('common.profile')}
                </Button>
                <Button 
                  block
                  onClick={() => handleNavigate('/orders')}
                >
                  {t('common.orders')}
                </Button>
                <Button 
                  block 
                  onClick={() => handleNavigate('/favorites')}
                >
                  {t('common.favorites')}
                </Button>
                <Button 
                  block 
                  danger 
                  onClick={handleLogout}
                >
                  {t('common.logout')}
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button 
                  type="primary" 
                  block 
                  onClick={() => handleNavigate('/login')}
                >
                  {t('common.login')}
                </Button>
                <Button 
                  block 
                  onClick={() => handleNavigate('/register')}
                >
                  {t('common.register')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;