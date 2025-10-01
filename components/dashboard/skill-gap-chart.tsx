"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const skillGapData = [
  { skill: 'JavaScript', current: 90, market: 95 },
  { skill: 'Python', current: 70, market: 90 },
  { skill: 'Machine Learning', current: 40, market: 85 },
  { skill: 'Data Analysis', current: 65, market: 88 },
  { skill: 'Cloud Computing', current: 55, market: 82 },
  { skill: 'DevOps', current: 50, market: 80 },
];

export function SkillGapChart() {
  return (
    <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-600" />
          <span>Skill Gap Analysis</span>
        </CardTitle>
        <CardDescription>
          Current proficiency vs. market requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skillGapData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: '#6b7280' }}
            />
            <Radar
              name="Market Requirements"
              dataKey="market"
              stroke="#f87171"
              fill="#f87171"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Your Proficiency"
              dataKey="current"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Legend
              wrapperStyle={{
                paddingTop: '20px'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
