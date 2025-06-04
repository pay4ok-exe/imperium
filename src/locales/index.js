import ru from './ru.json';
import kz from './kz.json';

export const translations = {
  ru,
  kz
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value[k];
    if (!value) break;
  }
  
  return value || key;
};

export default translations;