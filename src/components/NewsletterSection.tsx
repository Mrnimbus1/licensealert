
import React from 'react';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import EmailCapture from './EmailCapture';

const NewsletterSection = () => {
  const { t } = useTranslation();

  const benefits = [
    t('newsletter.benefits.earlyAccess'),
    t('newsletter.benefits.weeklyTips'),
    t('newsletter.benefits.industryUpdates'),
    t('newsletter.benefits.exclusiveResources')
  ];

  return (
    <section 
      data-section="email-capture" 
      className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.1)_1px,_transparent_0)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              {t('newsletter.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t('newsletter.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t('newsletter.whatYouGet')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mt-4 sm:mt-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-blue-900 text-sm sm:text-base">{t('newsletter.weeklyNewsletter')}</div>
                    <div className="text-xs sm:text-sm text-blue-700 mt-1">
                      {t('newsletter.joinContractors')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Email capture */}
            <div className="glass-effect rounded-2xl p-6 sm:p-8 shadow-modern border border-gray-200/50 mx-4 sm:mx-0">
              <EmailCapture 
                title={t('newsletter.joinTitle')}
                subtitle={t('newsletter.joinSubtitle')}
                placeholder={t('newsletter.emailPlaceholder')}
                buttonText={t('newsletter.subscribeButton')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
