
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TestimonialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Dotted grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-modern-xl border border-gray-200/50 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-3 sm:p-4 shadow-lg">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>

            <div className="mb-6 sm:mb-8 pt-2 sm:pt-4">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
                {t('testimonial.quote')}
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">MP</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900 text-lg">{t('testimonial.authorName')}</div>
                <div className="text-gray-600 text-sm sm:text-base">{t('testimonial.authorTitle')}</div>
                <div className="text-sm text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t('testimonial.authorCredential')}
                </div>
              </div>
            </div>

            {/* Visual metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">{t('testimonial.metrics.contractors')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">{t('testimonial.metrics.missedRenewals')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">$2M+</div>
                <div className="text-sm text-gray-600">{t('testimonial.metrics.finesPrevented')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
