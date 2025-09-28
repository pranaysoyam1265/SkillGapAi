"use client";

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  Target,
  Settings,
  FileText,
  Save,
  Upload,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { toast } from 'sonner';

export default function ProfilePage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: user?.profileData?.location || '',
    targetRole: user?.profileData?.targetRole || '',
    experienceLevel: user?.profileData?.experienceLevel || '',
    learningStyle: user?.profileData?.preferences?.learningStyle || '',
    timeCommitment: user?.profileData?.preferences?.timeCommitment || '',
    budget: user?.profileData?.preferences?.budget || '',
  });

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // In production, this would update Firebase
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  // Mock resume history - in production this would come from Firebase
  const resumeHistory = [
    {
      id: '1',
      fileName: 'John_Doe_Resume_2024.pdf',
      uploadedAt: new Date('2024-01-15'),
      analysisStatus: 'completed',
      skillsFound: 24,
      gapsIdentified: 7,
    },
    {
      id: '2',
      fileName: 'John_Doe_Resume_Updated.pdf',
      uploadedAt: new Date('2024-01-10'),
      analysisStatus: 'completed',
      skillsFound: 22,
      gapsIdentified: 9,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-black dark:via-black dark:to-black">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Profile Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Manage your account settings and learning preferences
          </p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="resume">Resume History</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>
                  Update your personal details and professional information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    <AvatarFallback className="text-lg">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Profile Picture
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Upload a new profile picture
                    </p>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="pl-10"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetRole">Target Role</Label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="targetRole"
                        value={profileData.targetRole}
                        onChange={(e) => handleInputChange('targetRole', e.target.value)}
                        className="pl-10"
                        placeholder="e.g., Senior Software Engineer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel">Experience Level</Label>
                    <Select value={profileData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                        <SelectItem value="executive">Executive (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleSave} disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <span>Learning Preferences</span>
                </CardTitle>
                <CardDescription>
                  Customize your learning experience and course recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="learningStyle">Learning Style</Label>
                    <Select value={profileData.learningStyle} onValueChange={(value) => handleInputChange('learningStyle', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select learning style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visual">Visual Learner</SelectItem>
                        <SelectItem value="auditory">Auditory Learner</SelectItem>
                        <SelectItem value="kinesthetic">Hands-on Learner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeCommitment">Time Commitment</Label>
                    <Select value={profileData.timeCommitment} onValueChange={(value) => handleInputChange('timeCommitment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time commitment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="part-time">Part-time (1-5 hours/week)</SelectItem>
                        <SelectItem value="full-time">Full-time (20+ hours/week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Preference</Label>
                    <Select value={profileData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free courses only</SelectItem>
                        <SelectItem value="low">Low ($1-$50)</SelectItem>
                        <SelectItem value="medium">Medium ($51-$200)</SelectItem>
                        <SelectItem value="high">High ($200+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleSave} disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <span>Resume History</span>
                </CardTitle>
                <CardDescription>
                  View your uploaded resumes and analysis results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeHistory.map((resume) => (
                  <div key={resume.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gradient-to-r from-gray-50/50 to-emerald-50/50 dark:from-gray-800/80 dark:to-emerald-900/30 rounded-lg border border-gray-200/50 dark:border-gray-600">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-600/20 rounded-lg flex-shrink-0">
                        <FileText className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {resume.fileName}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {resume.skillsFound} skills found
                          </Badge>
                          <Badge variant="destructive" className="text-xs">
                            {resume.gapsIdentified} gaps identified
                          </Badge>
                          <Badge 
                            variant={resume.analysisStatus === 'completed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {resume.analysisStatus}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500 dark:text-gray-300">
                          <Calendar className="h-3 w-3" />
                          <span>Uploaded {resume.uploadedAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 flex-shrink-0">
                      <Button variant="outline" size="sm">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        View Analysis
                      </Button>
                      <Button variant="outline" size="sm">
                        Re-analyze
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="text-center py-8">
                  <Button asChild>
                    <a href="/analyze">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span>Account Settings</span>
                </CardTitle>
                <CardDescription>
                  Manage your account security and data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Update your account password
                      </p>
                    </div>
                    <Button variant="outline" className="mt-3 sm:mt-0">
                      Change Password
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Export Data</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Download all your data and analysis results
                      </p>
                    </div>
                    <Button variant="outline" className="mt-3 sm:mt-0">
                      Export Data
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-red-200 dark:border-red-600 rounded-lg bg-red-50/50 dark:bg-red-900/20">
                    <div>
                      <h3 className="font-medium text-red-900 dark:text-red-300">Delete Account</h3>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button variant="destructive" className="mt-3 sm:mt-0">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}