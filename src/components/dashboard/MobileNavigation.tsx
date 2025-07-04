
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  Settings
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const navigation = [
  {
    titleKey: 'dashboard.title',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    titleKey: 'dashboard.licenses',
    url: '/dashboard/licenses',
    icon: FileText,
  },
  {
    titleKey: 'dashboard.reminders',
    url: '/dashboard/reminders',
    icon: Bell,
  },
  {
    titleKey: 'dashboard.settings',
    url: '/dashboard/settings',
    icon: Settings,
  },
];

export const MobileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg md:hidden">
      <div className="grid grid-cols-4 h-16 px-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <button
              key={item.titleKey}
              onClick={() => navigate(item.url)}
              className={`
                flex flex-col items-center justify-center gap-1 h-full transition-all duration-200 rounded-lg mx-1 my-2 
                ${isActive 
                  ? 'text-gray-900 bg-gray-100' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:scale-95'
                }
              `}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{t(item.titleKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
