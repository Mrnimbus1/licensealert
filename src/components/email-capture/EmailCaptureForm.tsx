
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailCaptureFormProps {
  placeholder: string;
  buttonText: string;
  variant: 'default' | 'compact' | 'inline';
  isLoading: boolean;
  onSubmit: (email: string) => void;
}

const EmailCaptureForm = ({ 
  placeholder, 
  buttonText, 
  variant, 
  isLoading, 
  onSubmit 
}: EmailCaptureFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;
    onSubmit(email);
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-11 text-sm"
            required
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !email}
          className="px-4 h-11 text-sm font-medium"
        >
          {isLoading ? 'Joining...' : buttonText}
        </Button>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg w-full">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12"
            required
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          disabled={isLoading || !email} 
          className="group min-w-[140px]"
        >
          {isLoading ? 'Joining...' : buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-12 text-center"
          required
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        size="lg" 
        className="w-full group" 
        disabled={isLoading || !email}
      >
        {isLoading ? 'Joining...' : buttonText}
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};

export default EmailCaptureForm;
