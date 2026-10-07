import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types/index';
import { TRANSLATIONS } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Read the previous key to preserve existing visitors' preferences.
    const saved =
      localStorage.getItem('tosdevelop_lang') ??
      localStorage.getItem('kromdev_lang');
    return saved === 'km' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (language === 'km') {
      root.classList.add('lang-km');
      root.setAttribute('lang', 'km');
    } else {
      root.classList.remove('lang-km');
      root.setAttribute('lang', 'en');
    }
    localStorage.setItem('tosdevelop_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'km' : 'en'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
