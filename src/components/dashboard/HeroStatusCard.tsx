
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroStatusCardProps {
  isHealthy: boolean;
  expiringCount: number;
  totalLicenses: number;
}

export const HeroStatusCard: React.FC<HeroStatusCardProps> = ({ 
  isHealthy, 
  expiringCount, 
  totalLicenses 
}) => {
  return (
    <Card className="bg-white shadow-sm rounded-xl border-0">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {isHealthy ? 'All licenses compliant' : `${expiringCount} licenses need attention`}
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                isHealthy 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-amber-50 text-amber-700'
              }`}>
                {isHealthy ? 'Compliant' : 'Action required'}
              </span>
              <span className="text-sm text-gray-500">{totalLicenses} total licenses</span>
            </div>
            <p className="text-gray-600">
              Track renewal dates and stay compliant with automated reminders.
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 text-sm">
              View details
            </Button>
            <Button variant="outline" className="text-gray-700 hover:bg-gray-50 px-4 py-2 text-sm">
              Export
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
