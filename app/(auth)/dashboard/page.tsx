'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PostGenerator from '@/components/PostGenerator';
import PostList from '@/components/PostList';
import LinkedInConnect from '@/components/LinkedInConnect';

export default function DashboardPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PostGenerator />
          </div>
          <div>
            <LinkedInConnect />
          </div>
          <div className="lg:col-span-3">
            <PostList />
          </div>
        </div>
      </div>
    </div>
  );
}