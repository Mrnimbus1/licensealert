import React, { createContext, useContext, ReactNode } from 'react';

// This context is deprecated - use react-i18next directly
// Keeping for backwards compatibility only
interface TranslationContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  // Empty provider - components should use useTranslation from react-i18next instead
  const value = {
    language: 'en' as const,
    setLanguage: () => {},
    t: (key: string) => key
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
