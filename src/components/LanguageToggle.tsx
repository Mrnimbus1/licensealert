
import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  variant?: 'default' | 'compact' | 'minimal';
  className?: string;
}

export const LanguageToggle = ({ variant = 'default', className = '' }: LanguageToggleProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    console.log('Switching language from', i18n.language, 'to', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const currentLanguage = i18n.language === 'fr' ? 'FR' : 'EN';

  if (variant === 'minimal') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className={`flex items-center gap-2 hover:bg-gray-50 transition-colors ${className}`}
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{currentLanguage}</span>
      </Button>
    );
  }

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer ${className}`}
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{currentLanguage}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
    >
      <Globe className="h-4 w-4 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">{currentLanguage}</span>
    </Button>
  );
};
