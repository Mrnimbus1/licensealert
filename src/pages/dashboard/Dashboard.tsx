
import React from 'react';
import { FileText, AlertTriangle, Bell, Shield, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { CompactCalendar } from '@/components/dashboard/CompactCalendar';

const Dashboard = () => {
  // Mock data for charts
  const complianceData = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 88 },
    { month: 'Mar', score: 92 },
    { month: 'Apr', score: 89 },
    { month: 'May', score: 94 },
    { month: 'Jun', score: 94 }
  ];

  const kpiData = [
    {
      title: 'Active Licenses',
      value: '12',
      change: '+2 this month',
      trend: 'up',
      icon: FileText,
      ctaText: 'View all',
      updateTime: '2m ago',
    },
    {
      title: 'Expiring Soon',
      value: '3',
      change: 'Next 30 days',
      trend: 'neutral',
      icon: AlertTriangle,
      ctaText: 'Review',
      updateTime: '5m ago',
    },
    {
      title: 'Active Reminders',
      value: '8',
      change: '+1 this week',
      trend: 'up',
      icon: Bell,
      ctaText: 'Manage',
      updateTime: '1h ago',
    },
    {
      title: 'Compliance Score',
      value: '94%',
      change: '+2% from last month',
      trend: 'up',
      icon: Shield,
      ctaText: 'Details',
      updateTime: '1h ago',
    },
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'Renewal',
      details: 'Medical License → March 2026',
      time: '2h ago',
    },
    {
      id: '2',
      type: 'Reminder',
      details: 'Electrical license set',
      time: '1d ago',
    },
    {
      id: '3',
      type: 'Warning',
      details: 'Teaching Certificate expires in 30 days',
      time: '2d ago',
    },
    {
      id: '4',
      type: 'Renewal',
      details: 'HVAC License → June 2026',
      time: '3d ago',
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor your license compliance and renewal status</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((item) => (
          <div key={item.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">{item.title}</div>
              <item.icon className="h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">{item.value}</div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-gray-500'}`}>
                  {item.change}
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  {item.ctaText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insights Panel */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-2">System Insights</h3>
            <p className="text-sm text-blue-800 mb-3">
              3 licenses expire this week. Review your renewal schedule to stay compliant.
            </p>
            <button className="text-sm text-blue-700 font-medium hover:text-blue-800">
              View renewal schedule →
            </button>
          </div>
        </div>
      </div>

      {/* Charts and Calendar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Compliance Trend Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Compliance Trend</h3>
                <p className="text-sm text-gray-600">Your compliance score over time</p>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">+5% this month</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complianceData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs text-gray-500" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs text-gray-500" />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3b82f6" 
                    strokeWidth={2} 
                    dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{activity.type}</div>
                      <div className="text-sm text-gray-600">{activity.details}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <CompactCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
