
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, User, Bell, Shield, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your account and application preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-gray-600 mb-4">
              Update your personal information and account details.
            </p>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Bell className="h-4 w-4 text-gray-600" />
              </div>
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-gray-600 mb-4">
              Configure how and when you receive notifications.
            </p>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              Manage Notifications
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-gray-600" />
              </div>
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-gray-600 mb-4">
              Manage your password and security preferences.
            </p>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              Security Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-gray-600" />
              </div>
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-gray-600 mb-4">
              Customize your app experience and regional settings.
            </p>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              App Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
