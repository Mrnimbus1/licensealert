
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthLayout from './AuthLayout';

const ResetPasswordPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // TODO: Implement password reset logic with token
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!token) {
    return (
      <AuthLayout 
        title="Invalid reset link" 
        subtitle="This password reset link is invalid or has expired"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
          
          <p className="text-gray-600">
            Please request a new password reset link.
          </p>
          
          <Link to="/auth/forgot-password">
            <Button className="w-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
              Request new link
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  if (isSuccess) {
    return (
      <AuthLayout 
        title="Password updated!" 
        subtitle="Your password has been successfully reset"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <p className="text-gray-600">
            You can now sign in with your new password.
          </p>
          
          <Link to="/auth/login">
            <Button className="w-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
              Continue to {t('nav.login').toLowerCase()}
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Set new password" 
      subtitle="Your new password must be different from previous passwords"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Password field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 font-medium">
            New password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a new password"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              className={`pl-10 pr-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
                errors.password ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && <p className="text-sm text-red-600 font-medium">{errors.password}</p>}
        </div>

        {/* Confirm Password field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
            Confirm new password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={(e) => updateFormData('confirmPassword', e.target.value)}
              className={`pl-10 pr-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
                errors.confirmPassword ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-600 font-medium">{errors.confirmPassword}</p>}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Updating password...' : 'Update password'}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
