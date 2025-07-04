
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InsightsPanelProps {
  expiringCount: number;
  complianceScore: number;
  totalLicenses: number;
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({
  expiringCount,
  complianceScore,
  totalLicenses
}) => {
  const insights = [
    {
      title: 'Renewal Required',
      description: `${expiringCount} licenses expire within 30 days`,
      action: 'Review schedule'
    },
    {
      title: 'Compliance Score',
      description: `${complianceScore}% - Good standing`,
      action: 'View details'
    },
    {
      title: 'Active Monitoring',
      description: `${totalLicenses} licenses tracked`,
      action: 'Manage all'
    }
  ];

  return (
    <Card className="bg-white shadow-sm rounded-xl border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Insights</CardTitle>
        <p className="text-sm text-gray-600">Key updates and recommendations</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
                <button className="text-xs text-gray-700 hover:text-gray-900 font-medium">
                  {insight.action} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
