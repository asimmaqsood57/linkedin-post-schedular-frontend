'use client';

import { useState } from 'react';
import ProfileSection from './jobs/ProfileSection';
import JobSearchSection from './jobs/JobSearchSection';
import SavedJobsSection from './jobs/SavedJobsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Search, Bookmark } from 'lucide-react';

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Job Finder</h1>
        <p className="text-gray-500 mt-1">
          Analyze your profile, discover matched jobs, and apply with AI-written emails
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" /> My Profile
          </TabsTrigger>
          <TabsTrigger value="search" className="flex items-center gap-2">
            <Search className="w-4 h-4" /> Find Jobs
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" /> Saved Jobs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
        <TabsContent value="search">
          <JobSearchSection />
        </TabsContent>
        <TabsContent value="saved">
          <SavedJobsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}