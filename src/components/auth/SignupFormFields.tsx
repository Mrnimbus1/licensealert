
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FormData } from '@/utils/signupValidation';

interface SignupFormFieldsProps {
  formData: FormData;
  errors: Record<string, string>;
  showPassword: boolean;
  showConfirmPassword: boolean;
  onFieldChange: (field: string, value: string | boolean) => void;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
}

const SignupFormFields = ({
  formData,
  errors,
  showPassword,
  showConfirmPassword,
  onFieldChange,
  onTogglePassword,
  onToggleConfirmPassword
}: SignupFormFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Name field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700 font-medium">
          {t('contact.form.name')}
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => onFieldChange('name', e.target.value)}
            className={`pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
              errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
            }`}
            required
          />
        </div>
        {errors.name && <p className="text-sm text-red-600 font-medium">{errors.name}</p>}
      </div>

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
            value={formData.email}
            onChange={(e) => onFieldChange('email', e.target.value)}
            className={`pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
              errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
            }`}
            required
          />
        </div>
        {errors.email && <p className="text-sm text-red-600 font-medium">{errors.email}</p>}
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700 font-medium">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => onFieldChange('password', e.target.value)}
            className={`pl-10 pr-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
              errors.password ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
            }`}
            required
          />
          <button
            type="button"
            onClick={onTogglePassword}
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
          Confirm password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => onFieldChange('confirmPassword', e.target.value)}
            className={`pl-10 pr-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200 ${
              errors.confirmPassword ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''
            }`}
            required
          />
          <button
            type="button"
            onClick={onToggleConfirmPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-sm text-red-600 font-medium">{errors.confirmPassword}</p>}
      </div>

      {/* Terms checkbox */}
      <div className="space-y-2">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => onFieldChange('agreeToTerms', checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            I agree to the{' '}
            <a 
              href="/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium transition-all duration-200"
            >
              {t('footer.termsOfService')}
            </a>{' '}
            and{' '}
            <a 
              href="/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium transition-all duration-200"
            >
              {t('footer.privacyPolicy')}
            </a>
          </Label>
        </div>
        {errors.terms && <p className="text-sm text-red-600 font-medium">{errors.terms}</p>}
      </div>
    </>
  );
};

export default SignupFormFields;
