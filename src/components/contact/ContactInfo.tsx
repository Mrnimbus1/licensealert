
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Direct Support */}
      <Card className="glass-effect border border-gray-200/50 shadow-modern">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-gray-900">
            <Mail className="h-5 w-5 mr-3 text-indigo-600" />
            {t('contact.support.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            {t('contact.support.description')}
          </p>
          <a
            href="mailto:hello.licensealert@gmail.com"
            className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            hello.licensealert@gmail.com
          </a>
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card className="glass-effect border border-gray-200/50 shadow-modern">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-gray-900">
            <Clock className="h-5 w-5 mr-3 text-green-600" />
            {t('contact.response.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {t('contact.response.description')}
          </p>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-3">{t('contact.urgent.title')}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {t('contact.urgent.description')}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
