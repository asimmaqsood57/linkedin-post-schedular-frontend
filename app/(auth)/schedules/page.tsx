'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ScheduleCreator from '@/components/ScheduleCreator';
import ScheduleList from '@/components/ScheduleList';

export default function SchedulesPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Automated Schedules</h1>
          <p className="text-gray-600 mt-2">
            Set up recurring posts and never worry about posting manually again
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScheduleCreator />
          <ScheduleList />
        </div>
      </div>
    </div>
  );
}