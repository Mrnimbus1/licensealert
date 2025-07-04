import React from 'react';
import { Bell, Calendar, Shield, Users, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: Bell,
      title: t('features.smartReminders'),
      description: t('features.smartRemindersDesc'),
      highlight: t('features.neverLate'),
      gradient: "from-indigo-500 to-purple-500",
      tag: t('features.mostPopularTag')
    },
    {
      icon: Calendar,
      title: t('features.calendar'),
      description: t('features.calendarDesc'),
      highlight: t('features.fullVisibility'),
      gradient: "from-purple-500 to-pink-500",
      tag: t('features.timeSaverTag')
    },
    {
      icon: Shield,
      title: t('features.compliance'),
      description: t('features.complianceDesc'),
      highlight: t('features.alwaysCompliant'),
      gradient: "from-green-500 to-emerald-500",
      tag: t('features.essentialTag')
    },
    {
      icon: Users,
      title: t('features.teamManagement'),
      description: t('features.teamManagementDesc'),
      highlight: t('features.scalableSolution'),
      gradient: "from-orange-500 to-red-500",
      tag: t('features.teamFeatureTag')
    }
  ];

  const handleJoinWaitlist = () => {
    navigate('/auth/join-waitlist');
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('features.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 px-2">
            {t('features.title')}
            <span className="text-gradient-primary block">{t('features.titleGradient')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative glass-effect rounded-2xl p-6 sm:p-8 shadow-modern hover:shadow-modern-lg transition-all duration-500 hover:scale-[1.02] animate-fade-in-up border border-gray-200/50" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}>
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} rounded-xl p-2.5 sm:p-3 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 sm:px-3 py-1 rounded-full group-hover:bg-indigo-100 transition-colors duration-300">
                    {feature.tag}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-600">{feature.highlight}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {feature.description}
                </p>

                <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                  {t('features.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up-delay-2">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 shadow-modern-lg border border-gray-200/50 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {t('features.ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base px-2">{t('features.ctaSubtitle')}</p>
            <div className="flex justify-center">
              <Button size="lg" className="shadow-lg group text-sm sm:text-base" onClick={handleJoinWaitlist}>
                {t('features.startTrial')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
