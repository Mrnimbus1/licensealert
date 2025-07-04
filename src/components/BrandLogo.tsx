import React from 'react';
import { Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className, 
  size = 'md', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'relative rounded-lg flex items-center justify-center bg-gradient-primary shadow-lg',
        sizeClasses[size]
      )}>
        <Shield className={cn(
          'text-white',
          size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
        )} />
        <Check className={cn(
          'absolute text-white font-bold',
          size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3 w-3'
        )} />
      </div>
      {showText && (
        <span className={cn(
          'font-bold text-gradient-primary',
          textSizeClasses[size]
        )}>
          LicenseAlert
        </span>
      )}
    </div>
  );
};