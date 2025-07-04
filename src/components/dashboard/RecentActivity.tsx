
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  iconBg: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
  isCollapsible?: boolean;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ 
  activities, 
  isCollapsible = false 
}) => {
  return (
    <Card className="bg-white shadow-sm rounded-xl border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent activity</CardTitle>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm mb-1">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {activity.description}
                </p>
                <div className="text-xs text-gray-500">
                  {activity.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
