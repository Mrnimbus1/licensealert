
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthLayout from './AuthLayout';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement forgot password logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <AuthLayout 
        title="Check your email" 
        subtitle="We've sent a password reset link to your email"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600">
              We've sent a password reset link to:
            </p>
            <p className="font-medium text-gray-900">{email}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full hover:shadow-md transition-all duration-200"
            >
              Try again
            </Button>
            
            <Link to="/auth/login">
              <Button 
                variant="ghost" 
                className="w-full hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {t('nav.login').toLowerCase()}
              </Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title={t('auth.forgotPassword')} 
      subtitle="No worries, we'll send you reset instructions"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            {t('contact.form.email')}
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200"
              required
            />
          </div>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : t('auth.resetPassword')}
        </Button>

        {/* Back to login */}
        <Link to="/auth/login">
          <Button 
            variant="ghost" 
            className="w-full hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {t('nav.login').toLowerCase()}
          </Button>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
