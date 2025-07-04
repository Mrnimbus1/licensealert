
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 text-sm font-medium mb-4 sm:mb-6">
              <HelpCircle className="h-4 w-4 mr-2" />
              {t('nav.faq')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 px-2">
              {t('faq.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="animate-fade-in-up-delay">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-effect rounded-2xl px-4 sm:px-6 shadow-modern border border-gray-200/50 hover:shadow-modern-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-indigo-600 py-4 sm:py-6 pr-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8 sm:mt-12 animate-fade-in-up-delay-2">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 shadow-modern border border-gray-200/50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {t('faq.stillHaveQuestions')}
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base px-2">
                {t('faq.supportText')}
              </p>
              <Button asChild className="group shadow-lg text-sm sm:text-base">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t('faq.contactSupport')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
