import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext({
  language: 'pl',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'pl' ? 'en' : 'pl')),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

