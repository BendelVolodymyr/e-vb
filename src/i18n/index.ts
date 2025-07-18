import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import uk from './locales/uk/translation.json';
import cs from './locales/cs/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      cs: { translation: cs },
    },
  });

export default i18n;
