
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { FormData, validateSignupForm } from '@/utils/signupValidation';

export const useSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignup = async (formData: FormData) => {
    setErrors({});
    
    const newErrors = validateSignupForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      // Store email in Supabase waitlist
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([
          {
            email: formData.email,
            source: 'signup-form',
            metadata: {
              name: formData.name,
              timestamp: new Date().toISOString(),
              user_agent: navigator.userAgent,
              signup_type: 'full_signup'
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
          navigate('/auth/early-access-success');
          return;
        }
        throw error;
      }

      // Send welcome email via Edge Function with current language
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email: formData.email,
          name: formData.name,
          language: i18n.language
        }
      });

      if (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the entire process if email sending fails
        toast({
          title: "Successfully joined!",
          description: "You're on the waitlist! Welcome email will be sent shortly.",
          variant: "default",
        });
      } else {
        toast({
          title: "Welcome to the waitlist!",
          description: "Check your email for a welcome message from us.",
          variant: "default",
        });
      }

      // Track successful signup - Twitter
      if (typeof window !== 'undefined' && (window as any).twq) {
        (window as any).twq('event', 'tw-q3l9m-q3l9m', {
        });
      }
      
      // Redirect to early access success page
      navigate('/auth/early-access-success');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    // For Google signup, we'll also need to capture the email in the waitlist
    // This is a placeholder for now - would need proper Google OAuth integration
    console.log('Google signup clicked');
    
    // For now, just redirect to success page
    navigate('/auth/early-access-success');
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return {
    handleSignup,
    handleGoogleSignup,
    isLoading,
    errors,
    clearError
  };
};
