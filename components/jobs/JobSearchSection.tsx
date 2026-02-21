'use client';

import { useState } from 'react';
import {
  useSearchJobsQuery,
  useGenerateApplicationEmailMutation,
  useSaveJobMutation,
  useGetSavedJobsQuery,
  useGetJobProfileQuery,
} from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Search, Loader2, Bookmark, BookmarkCheck, Mail,
  ExternalLink, MapPin, Building2, Sparkles, Briefcase,
  DollarSign, ChevronDown, ChevronUp, X,
} from 'lucide-react';

interface Job {
  externalId: string;
  title: string;
  company: string;
  location?: string;
  description: string;
  url: string;
  salary?: string | null;
  platform: string;
}

export default function JobSearchSection() {
  const { data: profile } = useGetJobProfileQuery(undefined);
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const { data: jobData, isLoading, isFetching, error } = useSearchJobsQuery(activeSearch, {
    skip: false,
  });

  const [generateEmail, { isLoading: isGeneratingEmail }] = useGenerateApplicationEmailMutation();
  const [saveJob] = useSaveJobMutation();
  const { data: savedJobs } = useGetSavedJobsQuery(undefined);
  const { toast } = useToast();

  const [emailModal, setEmailModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const savedJobIds = new Set(savedJobs?.map((j: any) => j.externalId) || []);
  const jobs: Job[] = jobData?.jobs || [];

  // Profile skills for quick-search chips
  const softSkillSet = new Set([
    'communication', 'teamwork', 'leadership', 'adaptability', 'problem solving',
    'creativity', 'time management', 'attention to detail', 'critical thinking',
    'emotional intelligence', 'public speaking', 'digital literacy',
  ]);
  const suggestedKeywords = profile?.skills
    ?.filter((s: string) => !softSkillSet.has(s.toLowerCase()))
    ?.slice(0, 6) || [];

  const handleSearch = (keyword?: string) => {
    const q = keyword !== undefined ? keyword : searchInput.trim();
    setActiveSearch(q);
  };

  const handleGenerateEmail = async (job: Job) => {
    setSelectedJob(job);
    setEmailSubject('');
    setEmailBody('');
    setEmailModal(true);
    try {
      const result = await generateEmail({
        jobTitle: job.title,
        company: job.company,
        jobDescription: job.description,
      }).unwrap();
      setEmailSubject(result.subject);
      setEmailBody(result.body);
    } catch {
      toast({ title: 'Error', description: 'Failed to generate email', variant: 'destructive' });
      setEmailModal(false);
    }
  };

  const handleSaveJob = async (job: Job) => {
    try {
      await saveJob({
        externalId: job.externalId,
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
        url: job.url,
        salary: job.salary,
        platform: job.platform,
      }).unwrap();
      toast({ title: 'Job saved!' });
    } catch {
      toast({ title: 'Error', description: 'Failed to save job', variant: 'destructive' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
    toast({ title: 'Copied to clipboard!' });
  };

  return (
    <div className="space-y-6">
      {/* ── Search Bar ── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Find Jobs</h2>
            <p className="text-xs text-slate-400">
              {jobData?.source === 'adzuna' ? 'Live listings from Adzuna' : 'Matched from our database'}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Job title, skill, or keyword..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
            />
          </div>
          <Button
            onClick={() => handleSearch()}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5"
          >
            Search
          </Button>
        </div>

        {/* AI Recommended keywords */}
        {suggestedKeywords.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-medium text-slate-500">Based on your profile</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedKeywords.map((skill: string) => (
                <button
                  key={skill}
                  onClick={() => {
                    setSearchInput(skill);
                    handleSearch(skill);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    activeSearch === skill
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Results ── */}
      {(isLoading || isFetching) ? (
        <div className="flex flex-col items-center justify-center py-16 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin mb-3 text-blue-500" />
          <p className="text-sm font-medium">Searching jobs...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <p className="text-red-600 font-medium text-sm">Failed to load jobs</p>
          <p className="text-red-400 text-xs mt-1">Please check your search and try again</p>
        </div>
      ) : jobs.length > 0 ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-900">{jobs.length}</span> jobs found
              {activeSearch && <span> for "<span className="text-blue-600">{activeSearch}</span>"</span>}
            </p>
            {activeSearch && (
              <button
                onClick={() => { setActiveSearch(''); setSearchInput(''); }}
                className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          {jobs.map((job) => (
            <div
              key={job.externalId}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Company Logo placeholder */}
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 font-bold text-sm">
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Building2 className="w-3 h-3" /> {job.company}
                        </span>
                        {job.location && (
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin className="w-3 h-3" /> {job.location}
                          </span>
                        )}
                        {job.salary && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <DollarSign className="w-3 h-3" /> {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Platform badge */}
                  <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full shrink-0">
                    {job.platform}
                  </span>
                </div>

                {/* Description */}
                <div className="mt-3">
                  <p className={`text-xs text-slate-500 leading-relaxed ${expandedJob === job.externalId ? '' : 'line-clamp-2'}`}>
                    {job.description}
                  </p>
                  {job.description.length > 150 && (
                    <button
                      className="text-xs text-blue-500 hover:text-blue-600 mt-1 flex items-center gap-1"
                      onClick={() => setExpandedJob(
                        expandedJob === job.externalId ? null : job.externalId
                      )}
                    >
                      {expandedJob === job.externalId
                        ? <><ChevronUp className="w-3 h-3" /> Less</>
                        : <><ChevronDown className="w-3 h-3" /> More</>}
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-50">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs h-8"
                    onClick={() => handleGenerateEmail(job)}
                  >
                    <Mail className="w-3.5 h-3.5 mr-1.5" /> Apply with AI Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg text-xs h-8 border-slate-200"
                    onClick={() => handleSaveJob(job)}
                    disabled={savedJobIds.has(job.externalId)}
                  >
                    {savedJobIds.has(job.externalId)
                      ? <><BookmarkCheck className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> Saved</>
                      : <><Bookmark className="w-3.5 h-3.5 mr-1.5" /> Save</>}
                  </Button>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    View job <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : activeSearch !== '' ? (
        <div className="flex flex-col items-center justify-center py-16 text-slate-400">
          <Briefcase className="w-10 h-10 mb-3 opacity-30" />
          <p className="text-sm font-medium">No jobs found for "{activeSearch}"</p>
          <p className="text-xs mt-1">Try a different keyword</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-slate-400">
          <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <Search className="w-7 h-7 opacity-40" />
          </div>
          <p className="text-sm font-medium text-slate-600">Search for jobs</p>
          <p className="text-xs mt-1">
            {suggestedKeywords.length > 0
              ? 'Or click a suggested keyword above'
              : 'Enter a job title or skill to get started'}
          </p>
        </div>
      )}

      {/* ── Email Modal ── */}
      <Dialog open={emailModal} onOpenChange={setEmailModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-base">
              Application Email
              {selectedJob && (
                <span className="font-normal text-slate-500 ml-2 text-sm">
                  — {selectedJob.title} at {selectedJob.company}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          {isGeneratingEmail ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-3 text-blue-500" />
              <p className="text-sm">Generating personalized email...</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full mt-1.5 px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Body</label>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  rows={14}
                  className="w-full mt-1.5 px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 resize-none leading-relaxed"
                />
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setEmailModal(false)} className="rounded-xl">
              Close
            </Button>
            {!isGeneratingEmail && (
              <>
                <Button variant="outline" onClick={handleCopyEmail} className="rounded-xl">
                  Copy All
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                  }}
                  className="bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2" /> Open in Mail
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}