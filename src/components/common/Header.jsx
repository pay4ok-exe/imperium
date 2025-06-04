import React, { useState } from 'react';
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
  Typography
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
  PhoneOutlined
} from '@ant-design/icons';
import { useTranslation } from '../../hooks/useTranslation';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = ({ 
  isAuthenticated = false,
  userRole = null,
  cartItemsCount = 0,
  favoritesCount = 0,
  onNavigate
}) => {
  const { t, language, changeLanguage } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Language menu
  const languageMenu = (
    <Menu
      items={[
        { 
          key: 'ru', 
          label: 'Русский', 
          icon: '🇷🇺',
          onClick: () => changeLanguage('ru')
        },
        { 
          key: 'kz', 
          label: 'Қазақша', 
          icon: '🇰🇿',
          onClick: () => changeLanguage('kz')
        }
      ]}
    />
  );

  // User menu
  const userMenu = (
    <Menu
      items={isAuthenticated ? [
        { 
          key: 'profile', 
          label: t('common.profile'), 
          icon: <UserOutlined />,
          onClick: () => onNavigate && onNavigate('/profile')
        },
        { 
          key: 'orders', 
          label: t('common.orders'), 
          icon: <ShoppingCartOutlined />,
          onClick: () => onNavigate && onNavigate('/orders')
        },
        { 
          key: 'favorites', 
          label: t('common.favorites'), 
          icon: <HeartOutlined />,
          onClick: () => onNavigate && onNavigate('/favorites')
        },
        { type: 'divider' },
        { 
          key: 'logout', 
          label: t('common.logout'), 
          danger: true 
        }
      ] : [
        { 
          key: 'login', 
          label: t('common.login'),
          onClick: () => onNavigate && onNavigate('/login')
        },
        { 
          key: 'register', 
          label: t('common.register'),
          onClick: () => onNavigate && onNavigate('/register')
        }
      ]}
    />
  );

  // Mobile menu items
  const mobileMenuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: t('navigation.home'),
      onClick: () => {
        onNavigate && onNavigate('/');
        setMobileMenuVisible(false);
      }
    },
    {
      key: 'catalog',
      icon: <AppstoreOutlined />,
      label: t('navigation.catalog'),
      onClick: () => {
        onNavigate && onNavigate('/catalog');
        setMobileMenuVisible(false);
      }
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      label: t('navigation.about'),
      onClick: () => {
        onNavigate && onNavigate('/about');
        setMobileMenuVisible(false);
      }
    },
    {
      key: 'contact',
      icon: <PhoneOutlined />,
      label: t('navigation.contact'),
      onClick: () => {
        onNavigate && onNavigate('/contact');
        setMobileMenuVisible(false);
      }
    }
  ];

  const handleSearch = (value) => {
    console.log('Search:', value);
    // Implement search functionality
  };

  return (
    <>
      <Header className="bg-white shadow-lg sticky top-0 z-50 px-4 md:px-8 border-b border-gray-100">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="md:hidden text-gray-600 hover:text-orange-500"
              onClick={() => setMobileMenuVisible(true)}
            />
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onNavigate && onNavigate('/')}
            >
              <span className="text-3xl animate-float">🏛️</span>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Imperium
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              type="text" 
              className="text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => onNavigate && onNavigate('/')}
            >
              {t('navigation.home')}
            </Button>
            <Button 
              type="text" 
              className="text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => onNavigate && onNavigate('/catalog')}
            >
              {t('navigation.catalog')}
            </Button>
            <Button 
              type="text" 
              className="text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => onNavigate && onNavigate('/about')}
            >
              {t('navigation.about')}
            </Button>
            <Button 
              type="text" 
              className="text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => onNavigate && onNavigate('/contact')}
            >
              {t('navigation.contact')}
            </Button>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <Input.Search
              placeholder={t('common.searchPlaceholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              size="large"
              className="rounded-full"
              enterButton={<SearchOutlined />}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              type="text"
              icon={<SearchOutlined />}
              className="md:hidden text-gray-600 hover:text-orange-500"
              size="large"
            />
            
            <Dropdown overlay={languageMenu} placement="bottomRight">
              <Button
                type="text"
                icon={<GlobalOutlined />}
                className="hidden md:flex items-center text-gray-600 hover:text-orange-500"
              >
                <Text className="ml-1 font-medium">
                  {language === 'ru' ? 'РУ' : 'ҚЗ'}
                </Text>
              </Button>
            </Dropdown>

            <Badge count={favoritesCount} size="small" offset={[-2, 2]}>
              <Button
                type="text"
                icon={<HeartOutlined />}
                size="large"
                className="text-gray-600 hover:text-red-500 transition-colors"
                onClick={() => onNavigate && onNavigate('/favorites')}
              />
            </Badge>

            <Badge count={cartItemsCount} size="small" offset={[-2, 2]}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                size="large"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => onNavigate && onNavigate('/cart')}
              />
            </Badge>

            <Dropdown overlay={userMenu} placement="bottomRight">
              <Button
                type="text"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <Avatar 
                  size="small" 
                  icon={<UserOutlined />}
                  className="bg-gradient-to-r from-orange-400 to-amber-500"
                />
                {isAuthenticated && (
                  <Text className="ml-2 hidden md:inline font-medium">
                    {userRole === 'admin' ? t('common.admin') : t('common.user')}
                  </Text>
                )}
              </Button>
            </Dropdown>
          </div>
        </div>
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Imperium
            </span>
          </div>
        }
        placement="left"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        className="md:hidden"
      >
        <div className="space-y-4">
          {/* Mobile Search */}
          <Input.Search
            placeholder={t('common.searchMobile')}
            onSearch={handleSearch}
            className="mb-6"
            size="large"
          />

          {/* Mobile Menu Items */}
          <Menu
            mode="vertical"
            items={mobileMenuItems}
            className="border-none"
          />

          {/* Language Switcher */}
          <div className="pt-4 border-t border-gray-200">
            <Text strong className="block mb-3">
              {t('common.language')}
            </Text>
            <div className="flex space-x-2">
              <Button
                type={language === 'ru' ? 'primary' : 'default'}
                onClick={() => {
                  changeLanguage('ru');
                  setMobileMenuVisible(false);
                }}
                className="flex-1"
              >
                🇷🇺 Русский
              </Button>
              <Button
                type={language === 'kz' ? 'primary' : 'default'}
                onClick={() => {
                  changeLanguage('kz');
                  setMobileMenuVisible(false);
                }}
                className="flex-1"
              >
                🇰🇿 Қазақша
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;