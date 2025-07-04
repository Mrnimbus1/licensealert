
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactFormSchema, ContactFormData } from './form/ContactFormSchema';
import ContactFormFields from './form/ContactFormFields';
import { useContactFormSubmission } from './form/useContactFormSubmission';

const ContactForm = () => {
  const { t } = useTranslation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      subscribeToNewsletter: true,
    },
  });

  const { onSubmit, isSubmitting } = useContactFormSubmission(form);

  const handleSubmit = (data: ContactFormData) => {
    // Track contact form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        'event_category': 'engagement',
        'event_label': 'contact_page',
        'value': 1
      });
    }
    onSubmit(data);
  };

  return (
    <Card className="glass-effect border border-gray-200/50 shadow-modern">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-gray-900">
          <MessageCircle className="h-6 w-6 mr-3 text-indigo-600" />
          {t('contact.form.sendMessage')}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {t('contact.form.fillOut')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <ContactFormFields form={form} />

            <Button
              type="submit"
              size="lg"
              className="w-full font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
