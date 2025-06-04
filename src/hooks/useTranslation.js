import { useState, useEffect } from 'react';
import { getTranslation } from '../locales';

export const useTranslation = (initialLanguage = 'ru') => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || initialLanguage
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => getTranslation(language, key);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return { t, language, changeLanguage };
};