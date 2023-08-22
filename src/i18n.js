// i18n.js

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    backend: {
      loadPath: `/locales/${lng}/${ns}.json`,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
