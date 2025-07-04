import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Mail, MessageSquare, Calendar } from 'lucide-react';
const Reminders = () => {
  const handleCreateReminder = () => {
    console.log('Create Reminder button clicked');
    // TODO: Implement create reminder functionality
  };
  return <div className="space-y-8 pb-20 md:pb-0">
      {/* Mobile-optimized header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mb-1">Reminders</h1>
          <p className="text-gray-600 text-base">Set up renewal notifications</p>
        </div>
        <Button onClick={handleCreateReminder} className="bg-gray-900 hover:bg-gray-800 text-white shadow-sm">
          <Plus className="h-4 w-4 mr-2" />
          Create Reminder
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">No reminders configured</h3>
            <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
              Set up notifications for license renewals and stay ahead of deadlines with automated alerts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={handleCreateReminder} className="bg-gray-900 hover:bg-gray-800 text-white shadow-sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Reminder
            </Button>
            <Button variant="outline" className="text-gray-700 hover:bg-gray-50">
              Learn More
            </Button>
          </div>
          
          
        </div>
      </div>
    </div>;
};
export default Reminders;