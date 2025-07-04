
import React from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { BrandLogo } from '@/components/BrandLogo';
import { useNavigate } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({
  children,
  title,
  subtitle
}: AuthLayoutProps) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-xl opacity-70 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      
      {/* Language toggle */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageToggle variant="compact" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md animate-form-enter">
          {/* Logo */}
          <div className="text-center mb-8">
            <button 
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-opacity mb-2 inline-flex"
            >
              <BrandLogo size="lg" />
            </button>
            {title && (
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Form container */}
          <div className="glass-effect rounded-3xl p-8 shadow-modern-xl border border-gray-200/50">
            {children}
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500">© 2025 LicenseAlert. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
