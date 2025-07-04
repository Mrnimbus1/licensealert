
import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroContent from './hero/HeroContent';
import FeatureHighlights from './hero/FeatureHighlights';
import SocialProof from './hero/SocialProof';
import DashboardMockup from './hero/DashboardMockup';

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-indigo-50"
      aria-label="Hero section - LicenseAlert introduction"
    >
      {/* Consistent dotted grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="order-1 lg:order-1">
              <HeroContent />
              <FeatureHighlights />
              <SocialProof />
            </div>

            {/* Right side - Dashboard mockup */}
            <div className="order-2 lg:order-2">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
