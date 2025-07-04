
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface UseEmailSubmissionProps {
  variant: 'default' | 'compact' | 'inline';
  onEmailSubmit?: (email: string) => void;
}

export const useEmailSubmission = ({ variant, onEmailSubmit }: UseEmailSubmissionProps) => {
  const { toast } = useToast();
  const { i18n } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (email: string) => {
    setIsLoading(true);
    
    try {
      // Store email in Supabase
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([
          {
            email,
            source: 'email-capture',
            metadata: {
              variant
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
          setIsSubmitted(true);
          setIsLoading(false);
          return;
        }
        throw error;
      }

      // Send welcome email via Edge Function with current language
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email,
          name: email.split('@')[0], // Use email prefix as name fallback
          language: i18n.language
        }
      });

      if (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the entire process if email sending fails
        toast({
          title: "Subscribed successfully!",
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

      if (onEmailSubmit) {
        onEmailSubmit(email);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isSubmitted,
    isLoading,
    handleSubmit
  };
};
