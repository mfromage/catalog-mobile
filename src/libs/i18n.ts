import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '@/locales/en/translation.json';
import zodEn from '@/locales/en/zod.json';
import translationId from '@/locales/id/translation.json';
import zodId from '@/locales/id/zod.json';

i18n.use(initReactI18next).init({
  lng: 'id',
  fallbackLng: 'en',
  debug: false,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources: {
    en: {
      translation: translationEn,
      zod: zodEn,
    },
    id: {
      translation: translationId,
      zod: zodId,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
