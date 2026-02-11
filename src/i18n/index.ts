import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import arTranslations from './locales/ar.json';

// Check if we're on the client side
const isClient = typeof window !== 'undefined';

// Initialize with default language for SSR
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations,
        },
        fr: {
          translation: frTranslations,
        },
        ar: {
          translation: arTranslations,
        },
      },
      lng: isClient ? undefined : 'en', // Use 'en' for SSR, let detector work on client
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      // Only use language detector on client side
      detection: isClient ? {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      } : undefined,
    });
}

export default i18n;

