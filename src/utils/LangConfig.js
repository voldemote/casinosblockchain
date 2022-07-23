import { English } from "./Languages/English";
import { French } from "./Languages/French";
import { Indonesian } from "./Languages/Indonesian";
import { Korean } from "./Languages/Korean";
import { Portuguese } from "./Languages/Portuguese";
import { Spanish } from "./Languages/Spanish";
import { Turkish } from "./Languages/Turkish";
import { Vietnamese } from "./Languages/Vietnamese";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: English
    },
    fr: {
      translations: French
    },
    id: {
      translations: Indonesian
    },
    kr: {
      translations: Korean
    },
    pt: {
      translations: Portuguese
    },
    sp: {
      translations: Spanish
    },
    tr: {
      translations: Turkish
    },
    vi: {
      translations: Vietnamese
    },
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ["en", "fr", "id", "kr", "pt", "sp", "tr", "vi"];

export default i18n;