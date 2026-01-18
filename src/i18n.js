import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationKO from './locales/ko/translation.json';
import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';
import translationES from './locales/es/translation.json';
import translationVI from './locales/vi/translation.json';

// the translations
const resources = {
  ko: {
    translation: translationKO,
  },
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
  es: {
    translation: translationES,
  },
  vi: {
    translation: translationVI,
  },
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ko', // fallback language is Korean
    debug: true, // set to true to see logs

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
