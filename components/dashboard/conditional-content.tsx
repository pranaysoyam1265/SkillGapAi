"use client";

import { useAuth } from '@/lib/auth-context';
import { EmptyState } from './empty-state';
import { MetricsCards } from './metrics-cards';
import { SkillsOverview } from './skills-overview';
import { CourseRecommendations } from './course-recommendations';
import { RecentActivity } from './recent-activity';
import { MarketTrends } from './market-trends';

export function ConditionalContent() {
  const { user } = useAuth();
  const hasUploadedResume = user?.hasUploadedResume || false;

  if (!hasUploadedResume) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-8">
      <MetricsCards />
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SkillsOverview />
          <MarketTrends />
        </div>
        <div className="space-y-8">
          <CourseRecommendations />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}