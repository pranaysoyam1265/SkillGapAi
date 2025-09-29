import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { MetricsCards } from '@/components/dashboard/metrics-cards';
import { SkillsOverview } from '@/components/dashboard/skills-overview';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { CourseRecommendations } from '@/components/dashboard/course-recommendations';
import { MarketTrends } from '@/components/dashboard/market-trends';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-black dark:via-black dark:to-black">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="pt-4">
          <ConditionalContent />
        </div>
      </div>
    </div>
  );
}