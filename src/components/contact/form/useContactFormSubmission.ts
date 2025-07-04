
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ContactFormData } from './ContactFormSchema';

export const useContactFormSubmission = (form: UseFormReturn<ContactFormData>) => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save to Supabase contact_submissions table
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          message: data.message,
          subscribed_to_newsletter: data.subscribeToNewsletter || false,
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save contact submission');
      }

      // Send contact notification emails
      const { data: emailResponse, error: emailError } = await supabase.functions.invoke(
        'send-contact-email',
        {
          body: {
            name: data.name,
            email: data.email,
            message: data.message,
          },
        }
      );

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw here - we still want to show success since the submission was saved
      }

      // If they opted for newsletter, add to waitlist
      if (data.subscribeToNewsletter) {
        const { error: waitlistError } = await supabase
          .from('waitlist_emails')
          .insert({
            email: data.email,
            source: 'contact-form-newsletter',
            metadata: {
              name: data.name
            }
          })
          .select()
          .single();

        if (waitlistError && waitlistError.code !== '23505') { // Ignore unique constraint violations
          console.error('Waitlist error:', waitlistError);
        } else if (!waitlistError) {
          // Send welcome email for newsletter signup with current language
          await supabase.functions.invoke('send-welcome-email', {
            body: { 
              email: data.email,
              name: data.name,
              language: i18n.language
            }
          });
        }
      }
      
      console.log('Contact form submitted successfully');
      
      toast({
        title: t('contact.success.title'),
        description: data.subscribeToNewsletter ? 
          "Thanks for your message! You've also been added to our newsletter." :
          t('contact.success.description'),
      });
      
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    onSubmit,
    isSubmitting,
  };
};
