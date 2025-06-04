import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ClientLayout from '../layouts/ClientLayout';
import HomePage from '../pages/client/Home/HomePage';
import AboutPage from '../pages/client/About';
import ContactPage from '../pages/client/Contact';
// import CatalogPage from '../pages/client/Catalog';
// import CartPage from '../pages/client/Cart';
// import ProductDetailPage from '../pages/client/ProductDetail';
// import FavoritesPage from '../pages/client/Favorites';
// import CheckoutPage from '../pages/client/Checkout';
// import ProfilePage from '../pages/client/Profile';
// import OrdersPage from '../pages/client/Orders';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ClientLayout>
          <HomePage />
        </ClientLayout>
      } />
{/*       
      <Route path="/catalog" element={
        <ClientLayout>
          <CatalogPage />
        </ClientLayout>
      } />
      
      <Route path="/product/:id" element={
        <ClientLayout>
          <ProductDetailPage />
        </ClientLayout>
      } />
      
      <Route path="/cart" element={
        <ClientLayout>
          <CartPage />
        </ClientLayout>
      } />
      
      <Route path="/favorites" element={
        <ClientLayout>
          <FavoritesPage />
        </ClientLayout>
      } />
      
      <Route path="/checkout" element={
        <ClientLayout>
          <CheckoutPage />
        </ClientLayout>
      } />
      
      <Route path="/profile" element={
        <ClientLayout>
          <ProfilePage />
        </ClientLayout>
      } />
      
      <Route path="/orders" element={
        <ClientLayout>
          <OrdersPage />
        </ClientLayout>
      } /> */}
      
      <Route path="/about" element={
        <ClientLayout>
          <AboutPage />
        </ClientLayout>
      } />
      
      <Route path="/contact" element={
        <ClientLayout>
          <ContactPage />
        </ClientLayout>
      } />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;