
import React from 'react';
import { Bell } from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="relative animate-fade-in-up-delay lg:block">
      <div className="relative">
        <div className="glass-effect rounded-3xl shadow-modern-xl p-8 transform rotate-1 hover:rotate-0 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              LicenseAlert Dashboard
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-gray-900">General Contractor License</div>
                  <div className="text-sm text-gray-500">Expires in 45 days</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">Active</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-gray-900">Specialized License - Plumbing</div>
                  <div className="text-sm text-gray-500">Expires in 15 days</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-yellow-700 bg-yellow-100 px-3 py-1.5 rounded-full">Warning</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-gray-900">Insurance Certificate</div>
                  <div className="text-sm text-gray-500">Expires in 90 days</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">Good</div>
            </div>
          </div>
        </div>

        {/* Animated urgent reminder notification */}
        <div className="absolute -top-6 -right-6 glass-effect rounded-2xl shadow-modern-lg p-6 hover:shadow-modern-xl hover:shadow-red-100/50 hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center">
              <Bell className="h-5 w-5 text-red-600 animate-bounce" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Urgent reminder</div>
              <div className="text-sm text-gray-500">License expires soon</div>
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="absolute -bottom-4 -left-4 glass-effect rounded-xl shadow-modern p-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">3 licenses tracked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
