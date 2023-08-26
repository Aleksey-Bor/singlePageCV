const customTranslator = (text, t, i18n) => {
  return i18n.language === "en" ? text : t(text);
};

export default customTranslator;
