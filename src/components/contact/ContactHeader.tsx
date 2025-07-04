
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        {t('contact.title')}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {t('contact.subtitle')}
      </p>
    </div>
  );
};

export default ContactHeader;
