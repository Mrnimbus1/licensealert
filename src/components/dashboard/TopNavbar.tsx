
import React from 'react';
import { Bell, User, ChevronDown, LogOut, Settings, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../LanguageToggle';

export const TopNavbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD'
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/auth/login');
  };

  const handleSettingsClick = () => {
    navigate('/dashboard/settings');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 rounded" onClick={() => navigate('/dashboard')}>
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <div className="text-lg font-bold text-gray-900">
            {t('header.brand')}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Notifications Bell */}
          <Button
            variant="ghost"
            size="sm"
            className="relative p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          {/* User Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="flex items-center space-x-2 hover:bg-gray-50 px-2 py-2 rounded-lg transition-all duration-200 active:scale-95"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {user.initials}
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white shadow-xl rounded-xl p-2 border-0">
              <div className="px-3 py-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors duration-200 mb-1">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 font-medium">{t('auth.manageAccount')}</span>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleSettingsClick}
                className="hover:bg-gray-50 cursor-pointer px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors duration-200 mb-1"
              >
                <Settings className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 font-medium">{t('dashboard.settings')}</span>
              </DropdownMenuItem>
              
              <div className="px-3 py-2.5 mb-1">
                <LanguageToggle variant="minimal" />
              </div>
              
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors duration-200 mb-1">
                <CreditCard className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700 font-medium">{t('auth.upgradePlan')}</span>
              </DropdownMenuItem>
              
              <div className="h-px bg-gray-100 my-2" />
              
              <DropdownMenuItem 
                onClick={handleLogout}
                className="hover:bg-gray-50 text-gray-700 cursor-pointer px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-colors duration-200"
              >
                <LogOut className="h-4 w-4 text-gray-500" />
                <span className="font-medium">{t('auth.signOut')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
