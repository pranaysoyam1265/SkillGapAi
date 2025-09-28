"use client";

import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target,
  Play,
  CheckCircle,
  Award,
  TrendingUp,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function LearningPage() {
  const { user } = useAuth();
  
  // Only show content if user has enrolled courses
  const hasEnrolledCourses = user?.enrolledCourses && user.enrolledCourses.length > 0;

  if (!hasEnrolledCourses) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-black dark:via-black dark:to-black">
        <DashboardHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Start Your Learning Journey
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Enroll in courses to track your progress and achievements here
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Track Progress</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Monitor your learning progress with detailed analytics
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Earn Achievements</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Unlock badges and certificates as you complete courses
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Skill Growth</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Visualize your skill improvements over time
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" asChild>
              <a href="/courses">
                Browse Courses
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Mock enrolled courses data - in production this would come from Firebase
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete Machine Learning Bootcamp 2024',
      provider: 'Coursera',
      instructor: 'Dr. Sarah Chen',
      progress: 65,
      timeSpent: 1240, // minutes
      status: 'in-progress',
      enrolledAt: new Date('2024-01-15'),
      lastAccessedAt: new Date('2024-01-20'),
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      totalDuration: 2400, // minutes
      completedLessons: 12,
      totalLessons: 18,
    },
    {
      id: '2',
      title: 'Kubernetes for Developers',
      provider: 'Udemy',
      instructor: 'Alex Rodriguez',
      progress: 100,
      timeSpent: 960,
      status: 'completed',
      enrolledAt: new Date('2024-01-01'),
      completedAt: new Date('2024-01-14'),
      certificateUrl: '#',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      totalDuration: 960,
      completedLessons: 15,
      totalLessons: 15,
    },
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Course Completed',
      description: 'Completed your first course',
      icon: '🎓',
      earnedAt: new Date('2024-01-14'),
      category: 'milestone',
    },
    {
      id: '2',
      title: 'Machine Learning Explorer',
      description: 'Started learning Machine Learning',
      icon: '🤖',
      earnedAt: new Date('2024-01-15'),
      category: 'skill',
    },
    {
      id: '3',
      title: '7-Day Streak',
      description: 'Learned for 7 consecutive days',
      icon: '🔥',
      earnedAt: new Date('2024-01-18'),
      category: 'streak',
    },
  ];

  const totalTimeSpent = enrolledCourses.reduce((total, course) => total + course.timeSpent, 0);
  const completedCourses = enrolledCourses.filter(course => course.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-black dark:via-black dark:to-black">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Learning Progress
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track your learning journey, monitor progress, and celebrate achievements
          </p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{enrolledCourses.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Enrolled Courses</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{completedCourses}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{Math.round(totalTimeSpent / 60)}h</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Time Spent</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{achievements.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Achievements</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>My Courses</span>
                </CardTitle>
                <CardDescription>
                  Your enrolled courses and progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-gradient-to-r from-gray-50/50 to-blue-50/50 dark:from-gray-800/80 dark:to-blue-900/30 rounded-lg border border-gray-200/50 dark:border-gray-600">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full sm:w-24 h-32 sm:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                            by {course.instructor} • {course.provider}
                          </p>
                        </div>
                        <Badge 
                          variant={course.status === 'completed' ? 'default' : 'secondary'}
                          className="flex-shrink-0"
                        >
                          {course.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{Math.round(course.timeSpent / 60)}h spent</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="h-3 w-3" />
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                        {course.status === 'completed' && course.certificateUrl && (
                          <Button variant="outline" size="sm" className="h-6 text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span>Achievements</span>
                </CardTitle>
                <CardDescription>
                  Your learning milestones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-200/50 dark:border-yellow-600/50">
                    <div className="text-2xl flex-shrink-0">{achievement.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                        {achievement.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        {achievement.description}
                      </p>
                      <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500 dark:text-gray-300">
                        <Calendar className="h-3 w-3" />
                        <span>{achievement.earnedAt.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}