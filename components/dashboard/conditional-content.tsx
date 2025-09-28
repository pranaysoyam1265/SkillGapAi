@@ .. @@
 import { EmptyState } from './empty-state';
 import { SkillsOverview } from './skills-overview';
 import { CourseRecommendations } from './course-recommendations';
+import { useAuth } from '@/lib/auth-context';
 
 export function ConditionalContent() {
-  // This would check if user has uploaded resume
-  const hasUploadedResume = false; // Replace with actual check
+  const { user } = useAuth();
+  const hasUploadedResume = user?.hasUploadedResume || false;
 
   if (!hasUploadedResume) {