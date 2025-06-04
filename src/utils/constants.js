export const APP_CONFIG = {
    LANGUAGES: {
      RU: 'ru',
      KZ: 'kz'
    },
    ROLES: {
      CLIENT: 'client',
      ADMIN: 'admin'
    },
    ORDER_STATUS: {
      PENDING: 'pending',
      SENT_TO_ADMIN: 'sent_to_admin',
      CONFIRMED: 'confirmed',
      CANCELLED: 'cancelled'
    }
  };
  
  export const ROUTES = {
    // Public routes
    HOME: '/',
    AUTH: '/auth',
    LOGIN: '/login',
    REGISTER: '/register',
    ABOUT: '/about',
    CONTACT: '/contact',
    
    // Client routes
    CATALOG: '/catalog',
    PRODUCT: '/product/:id',
    CART: '/cart',
    CHECKOUT: '/checkout',
    PROFILE: '/profile',
    ORDERS: '/orders',
    FAVORITES: '/favorites',
    
    // Admin routes
    ADMIN_DASHBOARD: '/admin',
    ADMIN_PRODUCTS: '/admin/products',
    ADMIN_ORDERS: '/admin/orders',
    ADMIN_USERS: '/admin/users',
    ADMIN_ANALYTICS: '/admin/analytics'
  };
  
  // Mock categories
  export const CATEGORIES = [
    { key: 'all', name: 'Все категории', nameKz: 'Барлық санаттар', icon: '🏠' },
    { key: 'sofas', name: 'Диваны', nameKz: 'Диваны', icon: '🛋️' },
    { key: 'chairs', name: 'Кресла', nameKz: 'Креслолар', icon: '🪑' },
    { key: 'tables', name: 'Столы', nameKz: 'Үстелдер', icon: '🪑' },
    { key: 'beds', name: 'Кровати', nameKz: 'Төсектер', icon: '🛏️' },
    { key: 'wardrobes', name: 'Шкафы', nameKz: 'Шкафтар', icon: '🚪' },
    { key: 'storage', name: 'Хранение', nameKz: 'Сақтау', icon: '📦' }
  ];