
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Bell, ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FinalCTASection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Dotted grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              {t('finalCta.badge')}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('finalCta.title')}
              <span className="block text-gradient-primary">
                {t('finalCta.titleGradient')}
              </span>
            </h2>
            
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('finalCta.subtitle')}
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm flex-wrap">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                <span className="text-green-700 font-medium">{t('finalCta.freeTrial')}</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                <span className="text-blue-700 font-medium">{t('finalCta.noCreditCard')}</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                <span className="text-purple-700 font-medium">{t('finalCta.cancelAnytime')}</span>
              </div>
            </div>

            <div className="flex justify-center mb-4 animate-fade-in-up-delay">
              <Button 
                size="lg" 
                className="px-10 py-6 text-xl font-semibold rounded-2xl group shadow-2xl hover:shadow-modern-xl"
                onClick={() => navigate('/auth/join-waitlist')}
              >
                {t('finalCta.startTrial')}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Early access subtext */}
            <p className="text-sm text-gray-500 mb-12 max-w-md mx-auto">
              {t('earlyAccess.subtext')}
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up-delay-2">
            <div className="flex flex-col items-center group">
              <div className="glass-effect p-6 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 border border-gray-200/50 shadow-modern">
                <Shield className="h-10 w-10 text-indigo-600 mx-auto" />
              </div>
              <div className="font-semibold mb-2 text-gray-900">{t('finalCta.secure')}</div>
              <div className="text-sm text-gray-600">{t('finalCta.secureDesc')}</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="glass-effect p-6 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 border border-gray-200/50 shadow-modern">
                <Clock className="h-10 w-10 text-purple-600 mx-auto" />
              </div>
              <div className="font-semibold mb-2 text-gray-900">{t('finalCta.quickSetup')}</div>
              <div className="text-sm text-gray-600">{t('finalCta.quickSetupDesc')}</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="glass-effect p-6 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 border border-gray-200/50 shadow-modern">
                <Bell className="h-10 w-10 text-green-600 mx-auto" />
              </div>
              <div className="font-semibold mb-2 text-gray-900">{t('finalCta.instantAlerts')}</div>
              <div className="text-sm text-gray-600">{t('finalCta.instantAlertsDesc')}</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up-delay-2">
            <p className="text-sm text-gray-600 mb-4">{t('finalCta.trustedBy')}</p>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{t('finalCta.otherContractors')}</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">{t('finalCta.rating')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
