
import React from 'react';
import { Mail, MapPin, Shield, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-16 relative overflow-hidden border-t border-gray-200">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.1)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4 text-gray-900">
              {t('footer.brand')}
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-3 text-indigo-500" />
                <a href="mailto:hello.licensealert@gmail.com" className="hover:text-indigo-600 transition-colors">
                  hello.licensealert@gmail.com
                </a>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-3 text-indigo-500" />
                <span>Canada & U.S.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-900">{t('footer.product')}</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-indigo-600 transition-colors text-left"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="hover:text-indigo-600 transition-colors text-left"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-indigo-600 transition-colors text-left"
                >
                  {t('nav.faq')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-900">{t('footer.support')}</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <button 
                  onClick={() => navigate('/contact')} 
                  className="hover:text-indigo-600 transition-colors text-left"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 glass-effect rounded-2xl border border-gray-200/50 shadow-modern">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="bg-indigo-500 rounded-lg p-2">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{t('footer.enterpriseSecurity')}</div>
              <div className="text-sm text-gray-600">{t('footer.bankLevel')}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="bg-green-500 rounded-lg p-2">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{t('footer.uptime')}</div>
              <div className="text-sm text-gray-600">{t('footer.reliableService')}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="bg-purple-500 rounded-lg p-2">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{t('footer.support24')}</div>
              <div className="text-sm text-gray-600">{t('footer.alwaysHere')}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>{t('footer.copyright')}</p>
              <p className="mt-1">{t('footer.proudlyServing')}</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <strong className="text-gray-900">{t('footer.bilingualService')}</strong> {t('footer.questions')}
              <a href="mailto:hello.licensealert@gmail.com" className="text-indigo-500 hover:text-indigo-600 hover:underline ml-1">
                hello.licensealert@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
