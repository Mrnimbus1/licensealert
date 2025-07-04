
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface KPICardProps {
  title: string;
  value: number | string;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon: LucideIcon;
  ctaText: string;
  updateTime: string;
  loading?: boolean;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  ctaText,
  updateTime,
  loading = false
}) => {
  if (loading) {
    return (
      <Card className="bg-white shadow-sm rounded-xl border-0">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="w-6 h-6 bg-gray-200 rounded mb-3"></div>
            <div className="w-16 h-8 bg-gray-200 rounded mb-2"></div>
            <div className="w-12 h-4 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-sm rounded-xl border-0 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Icon className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-500">{updateTime}</span>
        </div>
        
        <div className="mb-3">
          <div className="text-2xl font-semibold text-gray-900 mb-1">{value}</div>
          {change && (
            <div className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
              change.trend === 'up' 
                ? 'bg-green-50 text-green-700' 
                : change.trend === 'down'
                ? 'bg-red-50 text-red-700'
                : 'bg-gray-50 text-gray-700'
            }`}>
              {change.value}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            {ctaText}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
