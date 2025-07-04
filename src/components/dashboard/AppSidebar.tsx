
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  LogOut,
  User,
  CreditCard,
  ChevronDown,
  Settings
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../LanguageToggle';

const navigation = [
  {
    title: 'dashboard.title',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'dashboard.licenses',
    url: '/dashboard/licenses',
    icon: FileText,
  },
  {
    title: 'dashboard.reminders',
    url: '/dashboard/reminders',
    icon: Bell,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD',
    plan: 'Free Plan'
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/auth/login');
  };

  const handleSettingsClick = () => {
    navigate('/dashboard/settings');
  };

  return (
    <Sidebar className="bg-white hidden md:flex">
      <SidebarHeader className="p-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 w-full justify-start p-3 hover:bg-gray-50 transition-all duration-200 rounded-lg text-gray-900"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user.initials}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">{user.name}</div>
                <div className="text-xs text-gray-500 truncate">{user.plan}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64 bg-white shadow-xl rounded-xl p-2 border-0">
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
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={`relative px-3 py-2.5 text-sm transition-all duration-200 rounded-lg ${
                        isActive 
                          ? 'bg-gray-100 text-gray-900 font-semibold' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <a href={item.url} onClick={(e) => {
                        e.preventDefault();
                        navigate(item.url);
                      }}>
                        <item.icon className="h-4 w-4" />
                        <span className="ml-3">{t(item.title)}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
