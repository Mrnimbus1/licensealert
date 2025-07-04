
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ContactFormData } from './ContactFormSchema';

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 font-medium">
              {t('contact.form.name')}
            </FormLabel>
            <FormControl>
              <Input
                placeholder="John Smith"
                className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 font-medium">
              {t('contact.form.email')}
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="john@example.com"
                className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 font-medium">
              {t('contact.form.message')}
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us how we can help you..."
                className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 min-h-[120px] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="subscribeToNewsletter"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mt-0.5"
              />
            </FormControl>
            <div className="space-y-1 leading-none flex-1">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-indigo-600" />
                <FormLabel className="text-sm font-medium text-indigo-900">
                  Subscribe to our newsletter
                </FormLabel>
              </div>
              <div className="text-xs text-indigo-700">
                Get weekly compliance tips and early access to new features. No spam, unsubscribe anytime.
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default ContactFormFields;
