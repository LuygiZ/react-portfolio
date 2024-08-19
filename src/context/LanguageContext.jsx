import React, { createContext, useState } from 'react';

// Criação do contexto
export const LanguageContext = createContext();

// Provedor do contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('PT');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'PT' ? 'EN' : 'PT'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
