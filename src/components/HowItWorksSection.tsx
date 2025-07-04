
import React from 'react';
import { Calendar, Bell, FileText, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Calendar,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      step: "01",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Bell,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      step: "02",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      step: "03",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 h-full border border-gray-100 group-hover:border-indigo-200">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`bg-gradient-to-r ${step.gradient} rounded-2xl p-3 sm:p-4 mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-indigo-600 font-bold text-xl sm:text-2xl">{step.step}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {step.description}
                </p>

                <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  {t('features.learnMore')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
              
              {/* Desktop arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 xl:-right-6 transform -translate-y-1/2 z-10">
                  <div className="w-6 xl:w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                  <ArrowRight className="h-4 w-4 text-indigo-400 absolute -right-2 -top-2" />
                </div>
              )}

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4 sm:my-6">
                  <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-fade-in-up-delay-2">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base px-4">{t('howItWorks.readyToStart')}</p>
          <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full text-indigo-700 font-medium hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 cursor-pointer text-sm sm:text-base">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            {t('howItWorks.setupTime')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
