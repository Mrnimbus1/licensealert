
import React from 'react';
import { Bell, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../LanguageToggle';

interface DashboardHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title, 
  onToggleSidebar 
}) => {
  const { t } = useTranslation();

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD'
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-4 md:space-x-6">
          <SidebarTrigger className="lg:hidden hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-0" />
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">{title}</h1>
            <p className="text-xs md:text-sm text-gray-600 mt-0.5 hidden sm:block">Welcome back, {user.name.split(' ')[0]}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Language Toggle - Hidden on mobile */}
          <div className="hidden md:block">
            <LanguageToggle variant="compact" />
          </div>

          {/* Notifications Bell */}
          <Button
            variant="ghost"
            size="sm"
            className="relative p-2 md:p-3 hover:bg-gray-100 rounded-lg group focus:outline-none focus:ring-0"
          >
            <Bell className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-indigo-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-sm animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </Button>

          {/* User Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="flex items-center space-x-2 md:space-x-3 hover:bg-gray-100 rounded-lg px-2 md:px-4 py-2 group focus:outline-none focus:ring-0"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold shadow-md group-hover:shadow-lg group-hover:scale-105">
                  {user.initials}
                </div>
                <div className="hidden lg:block text-left min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-gray-700 hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 md:w-64 bg-white border border-gray-200 shadow-xl rounded-xl p-2">
              <div className="px-3 py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                    {user.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
              </div>
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer transition-colors px-3 py-2.5 rounded-lg flex items-center gap-3 my-1">
                <User className="h-4 w-4 text-gray-600" />
                <span className="font-medium text-gray-700">Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer transition-colors px-3 py-2.5 rounded-lg my-1">
                <span className="font-medium text-gray-700">Account Settings</span>
              </DropdownMenuItem>
              {/* Mobile-only language option */}
              <div className="md:hidden px-3 py-2.5 my-1">
                <LanguageToggle variant="minimal" />
              </div>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="hover:bg-red-50 text-red-600 cursor-pointer transition-colors px-3 py-2.5 rounded-lg font-medium my-1">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
