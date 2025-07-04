
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { ChevronRight, User, Shield, Bell, CreditCard, Database, Settings, Globe, Clock } from 'lucide-react';

const DashboardSettings = () => {
  const personalSettings = [
    {
      title: 'Personal details',
      description: 'Update your profile information, password, and communication preferences.',
      icon: User,
      lastUpdated: '2 days ago'
    },
    {
      title: 'Language & Preferences',
      description: 'Customize your language, timezone, and display preferences.',
      icon: Globe,
      lastUpdated: '1 week ago'
    }
  ];

  const accountSettings = [
    {
      title: 'Security',
      description: 'Manage your password and two-factor authentication settings.',
      icon: Shield,
      lastUpdated: '3 days ago'
    },
    {
      title: 'Notifications',
      description: 'Configure renewal notifications and alert preferences.',
      icon: Bell,
      lastUpdated: '1 day ago'
    },
    {
      title: 'Subscription Plan',
      description: 'Manage your billing information and subscription details.',
      icon: CreditCard,
      lastUpdated: '1 week ago'
    }
  ];

  const productSettings = [
    {
      title: 'Data Management',
      description: 'Export your data and manage integrations with external services.',
      icon: Database,
      lastUpdated: '5 days ago'
    },
    {
      title: 'License Settings',
      description: 'Configure default reminder times and auto-renewal preferences.',
      icon: Settings,
      lastUpdated: '2 days ago'
    }
  ];

  const SettingItem = ({ title, description, icon: Icon, lastUpdated }) => (
    <div className="group flex items-center justify-between py-6 cursor-pointer hover:bg-gray-50 -mx-6 px-6 transition-colors rounded-lg">
      <div className="flex items-center space-x-5 flex-1 min-w-0">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            {description}
          </p>
          <p className="text-xs text-gray-400">
            Last updated {lastUpdated}
          </p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
    </div>
  );

  return (
    <div className="w-full max-w-6xl space-y-12 pb-20 md:pb-0">
      {/* Mobile-optimized header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mb-1">Settings</h1>
        <p className="text-gray-600 text-base">Manage your account preferences and application settings</p>
      </div>

      {/* Personal Settings Section */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal</h2>
        <div className="space-y-0">
          {personalSettings.map((setting, index) => (
            <SettingItem key={index} {...setting} />
          ))}
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Account</h2>
        <div className="space-y-0">
          {accountSettings.map((setting, index) => (
            <SettingItem key={index} {...setting} />
          ))}
        </div>
      </div>

      {/* Product Settings Section */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Product</h2>
        <div className="space-y-0">
          {productSettings.map((setting, index) => (
            <SettingItem key={index} {...setting} />
          ))}
        </div>
      </div>

      {/* Quick Settings */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Preferences</h2>
        <div className="space-y-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-5">
              <Clock className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Auto-renew reminders</div>
                <div className="text-sm text-gray-600 leading-relaxed">Automatically create reminders for expiring licenses</div>
              </div>
            </div>
            <Switch className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200" />
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-5">
              <Bell className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Email notifications</div>
                <div className="text-sm text-gray-600 leading-relaxed">Receive email alerts for important updates</div>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
