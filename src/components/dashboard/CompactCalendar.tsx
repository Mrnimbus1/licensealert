
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CompactCalendarProps {
  className?: string;
}

export const CompactCalendar: React.FC<CompactCalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(new Date().getDate());
  
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Enhanced expiring license dates with colors and tooltips
  const expiringDates = [
    { day: 15, count: 2, type: 'urgent', color: 'bg-red-500', licenses: ['HVAC License', 'Teaching Certificate'] },
    { day: 23, count: 1, type: 'warning', color: 'bg-yellow-500', licenses: ['Electrical License'] },
    { day: 28, count: 3, type: 'normal', color: 'bg-blue-500', licenses: ['Medical License', 'Real Estate License', 'Legal License'] }
  ];
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };
  
  const isToday = (day: number) => {
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };
  
  const getExpiryInfo = (day: number) => {
    return expiringDates.find(item => item.day === day);
  };
  
  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };
  
  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-9 w-9"></div>
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const expiryInfo = getExpiryInfo(day);
      const isSelected = selectedDay === day;
      const todayStyle = isToday(day) && !isSelected;
      
      let dayClass = 'h-9 w-9 text-sm flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer relative';
      
      if (isSelected) {
        dayClass += ' bg-gray-900 text-white font-semibold';
      } else if (todayStyle) {
        dayClass += ' bg-blue-50 text-blue-600 font-medium';
      } else {
        dayClass += ' text-gray-700';
      }
      
      days.push(
        <button
          key={day}
          className={dayClass}
          onClick={() => handleDayClick(day)}
          title={expiryInfo ? `${expiryInfo.count} license${expiryInfo.count > 1 ? 's' : ''} expiring: ${expiryInfo.licenses.join(', ')}` : ''}
        >
          <span>{day}</span>
          {expiryInfo && (
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${expiryInfo.color}`} />
          )}
        </button>
      );
    }
    
    return days;
  };
  
  return (
    <Card className={`bg-white shadow-sm rounded-xl border-0 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {monthNames[month]} {year}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={previousMonth}
              className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextMonth}
              className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Urgent</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600">Warning</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Upcoming</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="h-9 w-9 text-xs text-gray-500 flex items-center justify-center font-medium"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {renderCalendarDays()}
        </div>
      </CardContent>
    </Card>
  );
};
