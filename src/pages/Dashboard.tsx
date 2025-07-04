
import React from 'react';
import { FileText, Clock, Bell, TrendingUp } from 'lucide-react';
import { HeroStatusCard } from '@/components/dashboard/HeroStatusCard';
import { KPICard } from '@/components/dashboard/KPICard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { CompactCalendar } from '@/components/dashboard/CompactCalendar';
import { ComplianceChart } from '@/components/dashboard/ComplianceChart';
import { InsightsPanel } from '@/components/dashboard/InsightsPanel';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  
  // Mock data
  const expiringLicenses = 3;
  const totalLicenses = 24;
  const activeReminders = 5;
  const complianceScore = 87;
  const isHealthy = expiringLicenses <= 5;

  const activities = [
    {
      id: '1',
      title: 'Medical License renewed',
      description: 'Valid until March 2026',
      timestamp: '2h ago',
      icon: '●',
      iconBg: 'bg-transparent'
    },
    {
      id: '2',
      title: 'HVAC License expiring',
      description: 'Renewal required in 14 days',
      timestamp: '1d ago',
      icon: '●',
      iconBg: 'bg-transparent'
    },
    {
      id: '3',
      title: 'Reminder created',
      description: 'Electrical license notification set',
      timestamp: '3d ago',
      icon: '●',
      iconBg: 'bg-transparent'
    }
  ];

  const kpiCards = [
    {
      title: t('dashboard.activeLicenses'),
      value: totalLicenses,
      change: { value: '+2 this month', trend: 'up' as const },
      icon: FileText,
      ctaText: t('dashboard.viewAll'),
      updateTime: '2h ago'
    },
    {
      title: t('dashboard.expiringSoon'),
      value: expiringLicenses,
      change: { value: 'Next 30 days', trend: 'neutral' as const },
      icon: Clock,
      ctaText: t('dashboard.review'),
      updateTime: '1h ago'
    },
    {
      title: t('dashboard.reminders'),
      value: activeReminders,
      change: { value: 'All configured', trend: 'neutral' as const },
      icon: Bell,
      ctaText: t('dashboard.manage'),
      updateTime: '30m ago'
    },
    {
      title: t('dashboard.compliance'),
      value: `${complianceScore}%`,
      change: { value: '+5% this month', trend: 'up' as const },
      icon: TrendingUp,
      ctaText: t('dashboard.details'),
      updateTime: '15m ago'
    }
  ];

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      {/* Mobile-optimized header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mb-1">
          {t('dashboard.title')}
        </h1>
        <p className="text-gray-600 text-base">
          {t('dashboard.subtitle')}
        </p>
      </div>

      {/* Status overview */}
      <HeroStatusCard 
        isHealthy={isHealthy}
        expiringCount={expiringLicenses}
        totalLicenses={totalLicenses}
      />

      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card, index) => (
          <KPICard
            key={card.title}
            {...card}
          />
        ))}
      </div>

      {/* Content sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ComplianceChart />
          <RecentActivity activities={activities} />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <InsightsPanel 
            expiringCount={expiringLicenses}
            complianceScore={complianceScore}
            totalLicenses={totalLicenses}
          />
          <CompactCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
