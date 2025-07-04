
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import EarlyAccessBanner from '@/components/EarlyAccessBanner';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialSection from '@/components/TestimonialSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen font-inter">
      <EarlyAccessBanner />
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TestimonialSection />
        <FeaturesSection />
        <NewsletterSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
