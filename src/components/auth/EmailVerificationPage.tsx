
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, AlertCircle, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthLayout from './AuthLayout';

const EmailVerificationPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [verificationState, setVerificationState] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [isResending, setIsResending] = useState(false);

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (token) {
      // Simulate verification process
      setTimeout(() => {
        // TODO: Implement actual email verification logic
        const success = Math.random() > 0.3; // Simulate success/failure
        setVerificationState(success ? 'success' : 'error');
      }, 2000);
    } else {
      setVerificationState('error');
    }
  }, [token]);

  const handleResendEmail = async () => {
    setIsResending(true);
    // TODO: Implement resend verification email logic
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  if (verificationState === 'loading') {
    return (
      <AuthLayout 
        title="Verifying your email" 
        subtitle="Please wait while we verify your email address"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <Loader className="h-8 w-8 text-indigo-600 animate-spin" />
          </div>
          
          <p className="text-gray-600">
            This should only take a moment...
          </p>
        </div>
      </AuthLayout>
    );
  }

  if (verificationState === 'success') {
    return (
      <AuthLayout 
        title="Email verified!" 
        subtitle="Your email has been successfully verified"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600">
              Welcome to LicenseAlert! Your account is now active.
            </p>
            {email && (
              <p className="text-sm text-gray-500">
                Verified: {email}
              </p>
            )}
          </div>
          
          <Link to="/auth/login">
            <Button className="w-full">
              Continue to {t('nav.login').toLowerCase()}
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Verification failed" 
      subtitle="We couldn't verify your email address"
    >
      <div className="text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle className="h-8 w-8 text-red-600" />
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-600">
            This verification link may be invalid or expired.
          </p>
          {email && (
            <p className="text-sm text-gray-500">
              Email: {email}
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            {isResending ? 'Sending...' : 'Resend verification email'}
          </Button>
          
          <Link to="/auth/signup">
            <Button variant="outline" className="w-full">
              Create new account
            </Button>
          </Link>
          
          <Link to="/auth/login">
            <Button variant="ghost" className="w-full">
              Back to {t('nav.login').toLowerCase()}
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default EmailVerificationPage;
