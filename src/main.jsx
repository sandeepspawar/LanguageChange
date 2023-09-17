import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './index.css'
import Eng from './locals/en/translation.json'
import Hind from './locals/hi/translation.json'
import Guj from './locals/gj/translation.json'
import App from './App'
i18n
  .use(initReactI18next) 
  .init({
  
    resources: {
      en: {
        translation: Eng
      },
      hi: {
        translation: Hind
      },
      gj: {
        translation: Guj
      }
    },
    lng: "en", 
        fallbackLng: "en",

    interpolation: {
      escapeValue: false  
    }
  });



const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);