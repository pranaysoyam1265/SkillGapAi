// Core data types for the application

export interface User {
  id: string;
  email: string;
  name: string;
  profileData: UserProfile;
  hasUploadedResume: boolean;
  enrolledCourses: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  targetRole?: string;
  experienceLevel?: 'entry' | 'mid' | 'senior' | 'executive';
  location?: string;
  preferences?: {
    learningStyle?: 'visual' | 'auditory' | 'kinesthetic';
    timeCommitment?: 'part-time' | 'full-time';
    budget?: 'free' | 'low' | 'medium' | 'high';
  };
}

export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: Date;
  analysisStatus: 'pending' | 'processing' | 'completed' | 'error';
  analysisResults?: SkillAnalysis;
}

export interface SkillAnalysis {
  skills: ExtractedSkill[];
  gaps: SkillGap[];
  recommendations: CourseRecommendation[];
  confidence: number;
  processedAt: Date;
}

export interface ExtractedSkill {
  name: string;
  category: string;
  proficiency: number;
  confidence: number;
  experience: string;
  marketDemand: 'Low' | 'Medium' | 'High' | 'Very High';
  trend: 'declining' | 'stable' | 'growing';
  salaryImpact: string;
  isStrength: boolean;
  isGap?: boolean;
}

export interface SkillGap {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  marketDemand: number;
  salaryImpact: string;
  timeToTarget: string;
  recommendedCourses: number;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  instructor: string;
  instructorAvatar?: string;
  rating: number;
  reviews: number;
  students: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  price: string;
  originalPrice?: string;
  category: string;
  skillsAddressed: string[];
  description: string;
  image: string;
  externalUrl: string;
  tags?: string[];
}

export interface CourseRecommendation extends Course {
  matchScore: number;
  reasonForRecommendation: string;
  skillsItAddresses: string[];
}

export interface EnrolledCourse {
  courseId: string;
  enrolledAt: Date;
  progress: number;
  timeSpent: number; // in minutes
  lastAccessedAt: Date;
  status: 'not-started' | 'in-progress' | 'completed' | 'paused';
  completedAt?: Date;
  certificateUrl?: string;
}

export interface LearningProgress {
  userId: string;
  enrolledCourses: EnrolledCourse[];
  skillImprovements: SkillImprovement[];
  achievements: Achievement[];
  totalTimeSpent: number;
  coursesCompleted: number;
  updatedAt: Date;
}

export interface SkillImprovement {
  skillName: string;
  beforeLevel: number;
  currentLevel: number;
  targetLevel: number;
  improvementDate: Date;
  sourceType: 'course' | 'project' | 'experience';
  sourceId: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: 'learning' | 'skill' | 'milestone' | 'streak';
}

export interface MarketTrend {
  skill: string;
  demand: number;
  growth: number;
  averageSalary: string;
  openJobs: string;
  trend: 'growing' | 'stable' | 'declining';
  category: string;
}