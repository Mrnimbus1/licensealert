
import React from 'react';
import { Shield, Bell, Clock } from 'lucide-react';

const FeatureHighlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up-delay-2">
      <div className="flex items-center justify-center lg:justify-start space-x-3 group cursor-pointer">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Shield className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">Fully Compliant</div>
          <div className="text-xs sm:text-sm text-gray-500 leading-tight">100% certified</div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start space-x-3 group cursor-pointer">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Bell className="h-6 w-6 text-green-600" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">Auto reminders</div>
          <div className="text-xs sm:text-sm text-gray-500 leading-tight">Never late again</div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start space-x-3 group cursor-pointer">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Clock className="h-6 w-6 text-orange-600" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">Save 5h/week</div>
          <div className="text-xs sm:text-sm text-gray-500 leading-tight">More free time</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
