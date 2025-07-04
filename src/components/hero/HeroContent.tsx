
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EmailCapture from '../EmailCapture';

const HeroContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    // Track CTA clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'hero_primary_cta',
        'value': 1
      });
    }
    // Navigate to join waitlist page
    navigate('/auth/join-waitlist');
  };

  return (
    <div className="text-center lg:text-left animate-fade-in-up">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 text-indigo-700 text-sm font-medium mb-8 shadow-sm">
        <Shield className="h-4 w-4 mr-2" />
        {t('hero.trustedBy')}
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] max-w-4xl mx-auto lg:mx-0">
        {t('hero.title')}
      </h1>
      
      <p className="text-lg sm:text-xl lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-[1.6]">
        {t('hero.subtitle')}
      </p>

      <div className="mb-4 animate-fade-in-up-delay">
        <div className="flex flex-col sm:items-center lg:items-start space-y-6">
          <div className="flex justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-2xl group shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
              onClick={handlePrimaryClick}
            >
              {t('hero.startTrial')}
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="text-center lg:text-left w-full max-w-md mx-auto lg:mx-0">
            <p className="text-sm text-gray-500 mb-4">Or join our waitlist for early access:</p>
            <div className="flex justify-center lg:justify-start">
              <EmailCapture 
                title=""
                subtitle=""
                placeholder="your@email.com"
                buttonText="Join Waitlist"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
        {t('earlyAccess.subtext')}
      </p>
    </div>
  );
};

export default HeroContent;
