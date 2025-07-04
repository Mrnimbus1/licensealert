
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../AuthLayout';

const WaitlistSuccess = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout 
      title="You're on the list!" 
      subtitle="We'll notify you as soon as LicenseAlert is ready"
    >
      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Welcome to the waitlist!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          You'll be among the first to know when LicenseAlert launches. 
          Keep an eye on your inbox for updates and early access opportunities.
        </p>
        
        <div className="space-y-3 text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Priority early access</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Exclusive updates and tips</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Special launch discount</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link 
          to="/" 
          className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium text-sm transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </AuthLayout>
  );
};

export default WaitlistSuccess;
