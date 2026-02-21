'use client';

import { useState } from 'react';
import {
  useGetSavedJobsQuery,
  useRemoveSavedJobMutation,
  useGenerateApplicationEmailMutation,
} from '@/lib/features/api/apiSlice';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Bookmark, Trash2, Mail, ExternalLink, Loader2,
  MapPin, Building2, DollarSign, ChevronDown, ChevronUp,
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

export default function SavedJobsSection() {
  const { data: savedJobs, isLoading } = useGetSavedJobsQuery(undefined);
  const [removeSavedJob] = useRemoveSavedJobMutation();
  const [generateEmail, { isLoading: isGeneratingEmail }] = useGenerateApplicationEmailMutation();
  const { toast } = useToast();

  const [emailModal, setEmailModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const handleRemove = async (externalId: string) => {
    try {
      await removeSavedJob(externalId).unwrap();
      toast({ title: 'Job removed' });
    } catch {
      toast({ title: 'Error', description: 'Failed to remove job', variant: 'destructive' });
    }
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
    toast({ title: 'Copied to clipboard!' });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <Bookmark className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Saved Jobs</h2>
            <p className="text-xs text-slate-400">
              {savedJobs?.length || 0} saved {savedJobs?.length === 1 ? 'job' : 'jobs'}
            </p>
          </div>
        </div>
      </div>

      {/* Jobs */}
      {!savedJobs || savedJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-slate-400">
          <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <Bookmark className="w-7 h-7 opacity-40" />
          </div>
          <p className="text-sm font-medium text-slate-600">No saved jobs yet</p>
          <p className="text-xs mt-1">Save jobs from the Find Jobs tab</p>
        </div>
      ) : (
        <div className="space-y-3">
          {savedJobs.map((job: Job) => (
            <div
              key={job.externalId}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 font-bold text-sm">
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm">{job.title}</h3>
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
                  <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full shrink-0">
                    {job.platform}
                  </span>
                </div>

                <div className="mt-3">
                  <p className={`text-xs text-slate-500 leading-relaxed ${expandedJob === job.externalId ? '' : 'line-clamp-2'}`}>
                    {job.description}
                  </p>
                  {job.description.length > 150 && (
                    <button
                      className="text-xs text-blue-500 hover:text-blue-600 mt-1 flex items-center gap-1"
                      onClick={() => setExpandedJob(expandedJob === job.externalId ? null : job.externalId)}
                    >
                      {expandedJob === job.externalId
                        ? <><ChevronUp className="w-3 h-3" /> Less</>
                        : <><ChevronDown className="w-3 h-3" /> More</>}
                    </button>
                  )}
                </div>

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
                    className="rounded-lg text-xs h-8 border-red-200 text-red-500 hover:bg-red-50"
                    onClick={() => handleRemove(job.externalId)}
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Remove
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
      )}

      {/* Email Modal */}
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
            <Button variant="outline" onClick={() => setEmailModal(false)} className="rounded-xl">Close</Button>
            {!isGeneratingEmail && (
              <>
                <Button variant="outline" onClick={handleCopyEmail} className="rounded-xl">Copy All</Button>
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