import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);

  const handleJoinWaitlist = () => {
    navigate('/auth/join-waitlist');
  };

  const plans = [
    {
      name: t('pricing.free'),
      price: isYearly ? "$0" : "$0",
      period: isYearly ? t('pricing.perYear') : t('pricing.perMonth'),
      description: t('pricing.freeDesc'),
      features: [
        t('pricing.features.free.trackLicenses'),
        t('pricing.features.free.basicReminders'),
        t('pricing.features.free.dashboardAccess'),
        t('pricing.features.free.complianceUpdates')
      ],
      cta: t('pricing.startFree'),
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: t('pricing.pro'),
      price: isYearly ? "$50" : "$5",
      period: isYearly ? t('pricing.perYear') : t('pricing.perMonth'),
      originalPrice: isYearly ? "$60" : "$6",
      description: t('pricing.proDesc'),
      features: [
        t('pricing.features.pro.unlimitedLicenses'),
        t('pricing.features.pro.smsEmailReminders'),
        t('pricing.features.pro.calendarIntegration'),
        t('pricing.features.pro.teamManagement'),
        t('pricing.features.pro.prioritySupport'),
        t('pricing.features.pro.advancedReporting'),
        t('pricing.features.pro.apiAccess'),
        t('pricing.features.pro.customNotifications')
      ],
      cta: t('pricing.tryPro'),
      popular: true,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Dotted grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('pricing.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 px-2">
            {t('pricing.title')}
            <span className="text-gradient-primary block">{t('pricing.titleGradient')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            {t('pricing.subtitle')}
          </p>

          {/* Pricing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-6 sm:mb-8">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                !isYearly 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                isYearly 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.yearly')}
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {t('pricing.save')}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-modern transition-all duration-500 hover:shadow-modern-lg hover:scale-[1.02] border-2 animate-fade-in-up ${
                plan.popular 
                  ? 'border-indigo-500 shadow-modern-xl lg:scale-105' 
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-2" />
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg sm:text-xl text-gray-400 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base px-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className={`w-full group text-sm sm:text-base ${plan.popular ? 'shadow-lg' : ''}`}
                onClick={handleJoinWaitlist}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-fade-in-up-delay px-4">
          <p className="text-gray-600 text-sm sm:text-base">
            <strong>{t('pricing.disclaimer')}</strong> {t('pricing.questions')}
            <a href="/contact" className="text-indigo-600 hover:text-indigo-700 hover:underline ml-1 font-medium">{t('pricing.contactUs')}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
