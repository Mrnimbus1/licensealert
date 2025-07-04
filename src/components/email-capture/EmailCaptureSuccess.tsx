
import React, { useEffect } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const EmailCaptureSuccess = () => {
  useEffect(() => {
    // Track successful email signup - Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'G-9X10D3X19J/email_signup',
        'value': 1.0,
        'currency': 'USD'
      });
    }
    
    // Track successful email signup - Twitter
    if (typeof window !== 'undefined' && (window as any).twq) {
      (window as any).twq('event', 'tw-q3l9m-q3l9m', {
      });
    }
  }, []);

  return (
    <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20" aria-hidden="true"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
          <CheckCircle className="h-8 w-8 text-green-600" />
          <Sparkles className="h-4 w-4 text-green-400 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">You're on the list! 🎉</h3>
        <p className="text-gray-600 mb-2">We'll notify you as soon as LicenseAlert is ready.</p>
        <p className="text-sm text-gray-500">Check your email for a welcome message from us!</p>
      </div>
    </div>
  );
};

export default EmailCaptureSuccess;
