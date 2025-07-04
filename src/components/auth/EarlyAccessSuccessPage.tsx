
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthLayout from './AuthLayout';

const EarlyAccessSuccessPage = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout 
      title="You're on the list!" 
      subtitle=""
    >
      <div className="text-center space-y-6">
        <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('earlyAccess.signupSuccess')}
          </p>
        </div>

        <Link to="/">
          <Button 
            size="lg" 
            className="w-full h-12 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t('earlyAccess.backToHome')}
          </Button>
        </Link>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Questions? Email us at{' '}
            <a 
              href="mailto:hello.licensealert@gmail.com" 
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              hello.licensealert@gmail.com
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default EarlyAccessSuccessPage;
