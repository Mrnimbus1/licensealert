
import React from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up-delay-2">
      <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">4.9/5</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-sm font-medium">500+ contractors</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-sm font-medium">98% satisfaction</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
