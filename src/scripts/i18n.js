import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импортируем JSON как модули
import translationRU from "../locales/ru/translation.json";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN },
    de: { translation: translationDE },
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
