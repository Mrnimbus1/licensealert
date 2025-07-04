
import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const WaitlistBenefits = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
      <div className="flex items-center mb-4">
        <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
        <span className="font-semibold text-indigo-900">What you'll get:</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-indigo-800">
          <CheckCircle className="h-4 w-4 mr-2 text-indigo-600" />
          Priority early access to LicenseAlert
        </div>
        <div className="flex items-center text-sm text-indigo-800">
          <CheckCircle className="h-4 w-4 mr-2 text-indigo-600" />
          Weekly tips for license management
        </div>
        <div className="flex items-center text-sm text-indigo-800">
          <CheckCircle className="h-4 w-4 mr-2 text-indigo-600" />
          Exclusive launch discount
        </div>
      </div>
    </div>
  );
};

export default WaitlistBenefits;
