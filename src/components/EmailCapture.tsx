
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailCaptureForm from './email-capture/EmailCaptureForm';
import EmailCaptureSuccess from './email-capture/EmailCaptureSuccess';
import { useEmailSubmission } from './email-capture/useEmailSubmission';

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: 'default' | 'compact' | 'inline';
  onEmailSubmit?: (email: string) => void;
}

const EmailCapture = ({ 
  title = "Get Early Access",
  subtitle = "Join the waitlist and be the first to know when we launch",
  placeholder = "Enter your email address",
  buttonText = "Join Waitlist",
  variant = 'default',
  onEmailSubmit
}: EmailCaptureProps) => {
  const { t } = useTranslation();
  const { isSubmitted, isLoading, handleSubmit } = useEmailSubmission({
    variant,
    onEmailSubmit: (email) => {
      // Track email signup event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'email_signup', {
          'event_category': 'engagement',
          'event_label': variant,
          'value': 1
        });
      }
      onEmailSubmit?.(email);
    }
  });

  if (isSubmitted) {
    return <EmailCaptureSuccess />;
  }

  if (variant === 'compact' || variant === 'inline') {
    return (
      <EmailCaptureForm
        placeholder={placeholder}
        buttonText={buttonText}
        variant={variant}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="text-center max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <EmailCaptureForm
        placeholder={placeholder}
        buttonText={buttonText}
        variant={variant}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EmailCapture;
