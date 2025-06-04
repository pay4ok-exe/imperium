import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ClientLayout from '../layouts/ClientLayout';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import OrdersPage from '../pages/OrdersPage';
import OrderDetailPage from '../pages/OrderDetailPage';
import FavoritesPage from '../pages/FavoritesPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={
        <ClientLayout>
          <HomePage />
        </ClientLayout>
      } />
      
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
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
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
        } />
        
        <Route path="/orders/:id" element={
          <ClientLayout>
            <OrderDetailPage />
          </ClientLayout>
        } />
        
        <Route path="/favorites" element={
          <ClientLayout>
            <FavoritesPage />
          </ClientLayout>
        } />
      </Route>
      
      {/* Catch all route */}
      <Route path="*" element={
        <ClientLayout>
          <NotFoundPage />
        </ClientLayout>
      } />
    </Routes>
  );
};

export default AppRouter;