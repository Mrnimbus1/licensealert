
import React from 'react';
import { useTranslation } from 'react-i18next';

const EarlyAccessBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base font-medium">
          {t('earlyAccess.banner')}
        </p>
      </div>
    </div>
  );
};

export default EarlyAccessBanner;
