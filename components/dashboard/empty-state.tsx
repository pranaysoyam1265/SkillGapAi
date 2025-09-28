"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Brain, 
  Target, 
  BookOpen, 
  TrendingUp,
  Zap,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export function EmptyState() {
  return (
    <div className="space-y-8">
      {/* Main CTA */}
      <Card className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-600/50">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <Upload className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Upload Your Resume to Get Started
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our AI will analyze your resume to identify your skills, find gaps, and recommend personalized courses to advance your career.
          </p>
          <Link href="/analyze">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Upload className="h-5 w-5 mr-2" />
              Upload Resume Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Feature Preview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center mb-3">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">AI Skill Analysis</CardTitle>
            <CardDescription className="text-sm">
              Advanced ML algorithms extract and categorize your skills with confidence scores
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Skills Identified</span>
                <Badge variant="secondary">24+</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Confidence Level</span>
                <Badge variant="secondary">95%</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Categories</span>
                <Badge variant="secondary">8</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-600/20 rounded-lg flex items-center justify-center mb-3">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-lg">Gap Analysis</CardTitle>
            <CardDescription className="text-sm">
              Identify skill gaps and prioritize learning based on market demand and salary impact
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Priority Gaps</span>
                <Badge variant="destructive">7</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Salary Impact</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">+$60K</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Market Demand</span>
                <Badge variant="secondary">High</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-600/20 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg">Course Recommendations</CardTitle>
            <CardDescription className="text-sm">
              Get personalized course suggestions from top platforms matched to your skill gaps
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Matched Courses</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Match Score</span>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">95%</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Platforms</span>
                <Badge variant="secondary">6</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
        <CardHeader>
          <CardTitle className="text-center text-xl">How It Works</CardTitle>
          <CardDescription className="text-center">
            Get personalized career insights in three simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upload Resume</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Upload your resume in PDF, DOCX, or TXT format for AI analysis
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our ML models extract skills, identify gaps, and analyze market trends
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get Recommendations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Receive personalized course recommendations and learning paths
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50/80 to-blue-50/80 dark:from-emerald-900/30 dark:to-blue-900/30 border border-emerald-200/50 dark:border-emerald-600/50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Career Growth</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Identify high-impact skills that can boost your salary and career prospects
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                +$60K Salary Impact
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                45% More Opportunities
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-200/50 dark:border-orange-600/50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-6 w-6 text-orange-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Smart Learning</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Get personalized course recommendations based on your specific skill gaps
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                95% Match Accuracy
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                6 Top Platforms
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}