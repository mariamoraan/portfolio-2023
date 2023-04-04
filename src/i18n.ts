import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import localizableEN from './translations/en/localizableEN.json';
import localizableES from './translations/es/localizableES.json';

const resources = { 
  en: {
    translation: localizableEN
  },
  es: {
    translation: localizableES
  }
}

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng: 'en',
});