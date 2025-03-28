import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

import en from '../locales/en.json';
import hi from '../locales/hi.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.getLocales()[0].languageCode || 'en',
    fallbackLng: 'en',
    saveMissing: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
