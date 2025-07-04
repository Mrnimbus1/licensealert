
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, TrendingUp } from 'lucide-react';

interface PlanSummaryCardProps {
  className?: string;
}

export const PlanSummaryCard: React.FC<PlanSummaryCardProps> = ({ className }) => {
  const planData = {
    name: 'Free Plan',
    licensesUsed: 24,
    licensesLimit: 100,
    remindersUsed: 5,
    remindersLimit: 10,
    daysLeft: null // null for free plan
  };

  const usagePercentage = (planData.licensesUsed / planData.licensesLimit) * 100;

  return (
    <Card className={`bg-white border border-gray-200 ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{planData.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">Current subscription</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <CreditCard className="h-4 w-4 text-gray-600" />
          </div>
        </div>

        <div className="space-y-3">
          {/* License Usage */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Licenses</span>
              <span className="text-xs font-medium text-gray-900">
                {planData.licensesUsed}/{planData.licensesLimit}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className="bg-brand-purple h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
          </div>

          {/* Reminders Usage */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Reminders</span>
              <span className="text-xs font-medium text-gray-900">
                {planData.remindersUsed}/{planData.remindersLimit}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className="bg-brand-purple h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(planData.remindersUsed / planData.remindersLimit) * 100}%` }}
              />
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="pt-2 border-t border-gray-100">
            <Button
              size="sm"
              className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white text-xs h-7 transition-all duration-200 flex items-center gap-2"
            >
              <TrendingUp className="h-3 w-3" />
              Upgrade for unlimited
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
