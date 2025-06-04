import React, { createContext, useState, useContext, useEffect } from 'react';
import { ru, kz } from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ru';
  });
  
  const [translations, setTranslations] = useState(() => {
    return language === 'ru' ? ru : kz;
  });

  useEffect(() => {
    setTranslations(language === 'ru' ? ru : kz);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (!value[k]) return key;
      value = value[k];
    }
    
    return value;
  };

  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'ru' || newLanguage === 'kz') {
      setLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);