import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'header', 'banner', 'countdown', 'about', 'games', 'partners', 'footer'],
    defaultNS: 'common',
  });

export default i18n;
