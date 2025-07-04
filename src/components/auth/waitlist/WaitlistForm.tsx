
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '../AuthLayout';
import WaitlistBenefits from './WaitlistBenefits';

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || isLoading) return;

    setIsLoading(true);
    
    try {
      // Store email in Supabase waitlist
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([
          {
            email,
            source: 'join-waitlist-page',
            metadata: {
              name
            }
          }
        ])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already on our waitlist. We'll keep you updated!",
            variant: "default",
          });
          onSuccess();
          setIsLoading(false);
          return;
        }
        throw error;
      }

      // Try to send welcome email via Edge Function with current language
      try {
        const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
          body: { 
            email,
            name,
            language: i18n.language
          }
        });

        if (emailError) {
          console.error('Failed to send welcome email:', emailError);
        }
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
      }

      // Always show success regardless of email sending status
      toast({
        title: "Welcome to the waitlist!",
        description: "You're all set! We'll notify you when LicenseAlert is ready.",
        variant: "default",
      });

      onSuccess();
    } catch (error) {
      console.error('Error joining waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title={t('earlyAccess.cta')} 
      subtitle="Get early access to LicenseAlert and never miss a license renewal again"
    >
      <div className="space-y-6">
        {/* Benefits section */}
        <WaitlistBenefits />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-700 font-medium text-sm">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium text-sm">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 transition-all duration-200"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 group"
            disabled={isLoading || !name.trim() || !email.trim()}
          >
            {isLoading ? 'Joining waitlist...' : t('earlyAccess.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="text-center text-xs text-gray-500 space-y-2">
          <p>Join 500+ contractors already on the waitlist</p>
          <p>🔒 We respect your privacy. Unsubscribe at any time.</p>
        </div>

        {/* Back to home link */}
        <div className="text-center">
          <Link 
            to="/" 
            className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium text-sm transition-all duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default WaitlistForm;
