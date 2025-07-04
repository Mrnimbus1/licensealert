
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import AuthLayout from './AuthLayout';
import GoogleSignupButton from './GoogleSignupButton';
import SignupFormFields from './SignupFormFields';
import { useSignup } from '@/hooks/useSignup';
import { FormData } from '@/utils/signupValidation';

const SignupPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const { handleSignup, handleGoogleSignup, isLoading, errors, clearError } = useSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignup(formData);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    clearError(field);
  };

  return (
    <AuthLayout 
      title={t('earlyAccess.cta')} 
      subtitle="Get early access to LicenseAlert"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Google signup */}
        <GoogleSignupButton onClick={handleGoogleSignup} />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or sign up with email</span>
          </div>
        </div>

        <SignupFormFields
          formData={formData}
          errors={errors}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          onFieldChange={updateFormData}
          onTogglePassword={() => setShowPassword(!showPassword)}
          onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Joining waitlist...' : t('earlyAccess.cta')}
        </Button>

        {/* Sign in link */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link 
            to="/auth/login" 
            className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium transition-all duration-200"
          >
            {t('nav.login')}
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
