
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { TopNavbar } from './TopNavbar';
import { MobileNavigation } from './MobileNavigation';

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full [&>*]:border-0">
        <AppSidebar />
        <div className="flex-1 flex flex-col border-0">
          <TopNavbar />
          <main className="flex-1 pt-16 md:pt-0 border-0">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Outlet />
            </div>
          </main>
        </div>
        <MobileNavigation />
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
