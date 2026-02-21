"use client";

import { useState } from "react";
import ProfileSection from "@/components/jobs/ProfileSection";
import JobSearchSection from "@/components/jobs/JobSearchSection";
import SavedJobsSection from "@/components/jobs/SavedJobsSection";
import ProfileCard from "@/components/jobs/ProfileCard";
import { User, Search, Bookmark, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

type Tab = "profile" | "jobs" | "saved";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const tabs = [
    { id: "profile" as Tab, label: "My Profile", icon: User },
    { id: "jobs" as Tab, label: "Find Jobs", icon: Search },
    { id: "saved" as Tab, label: "Saved Jobs", icon: Bookmark },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* ── Header ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Job Finder
                </h1>
              </div>
              <p className="text-slate-500 text-sm ml-11">
                Analyze your profile, discover matched jobs, and apply with
                AI-written emails
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-6 bg-slate-100 p-1 rounded-lg w-fit">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "profile" && (
          <div className="space-y-8">
            {/* Profile Card always shown at top */}
            <ProfileCard />
            {/* Build/analyze section below */}
            <ProfileSection />
          </div>
        )}
        {activeTab === "jobs" && <JobSearchSection />}
        {activeTab === "saved" && <SavedJobsSection />}
      </div>
    </div>
  );
}
