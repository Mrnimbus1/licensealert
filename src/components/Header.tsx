
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { useNavigate, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // We're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    // Track CTA clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'header_get_started',
        'value': 1
      });
    }
    // Navigate to join waitlist page
    navigate('/auth/join-waitlist');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSticky ? 'bg-white/95 backdrop-blur-sm shadow-modern border-b border-gray-200/50' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-opacity"
              aria-label="LicenseAlert Home"
            >
              <BrandLogo size="md" />
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              aria-label="Go to home section"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              aria-label="Go to features section"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              aria-label="Go to pricing section"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              aria-label="Go to FAQ section"
            >
              {t('nav.faq')}
            </button>
            <button 
              onClick={handleContactClick} 
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              aria-label="Go to contact page"
            >
              {t('nav.contact')}
            </button>
            
            <LanguageToggle variant="compact" />
            
            <Button 
              className="font-medium px-6"
              onClick={handleAuthClick}
              aria-label="Get started with LicenseAlert"
            >
              {t('nav.getStarted')}
            </Button>
          </nav>

          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t('nav.faq')}
            </button>
            <button 
              onClick={handleContactClick} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            <div className="px-4 py-2">
              <LanguageToggle variant="compact" />
            </div>
            
            <div className="px-4 py-2">
              <Button 
                className="w-full h-12 text-base font-medium"
                onClick={handleAuthClick}
              >
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
