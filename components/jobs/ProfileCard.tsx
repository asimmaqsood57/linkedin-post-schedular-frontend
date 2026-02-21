'use client';

import { useState } from 'react';
import { useGetJobProfileQuery, useGetLinkedInAccountQuery } from '@/lib/features/api/apiSlice';
import {
  MapPin, Phone, Mail, Briefcase, GraduationCap,
  Award, Globe, ChevronDown, ChevronUp, FileText,
  User, Star, Code, Sparkles, ExternalLink,
  CheckCircle, AlertCircle, BarChart3,
} from 'lucide-react';

function calculateProfileRating(profile: any) {
    console.log('profile', profile);
  const breakdown = [
    {
      label: 'Contact Info',
      score: (profile.email ? 10 : 0) + (profile.phone ? 10 : 0) + (profile.location ? 10 : 0),
      max: 30,
      tip: 'Add email, phone, and location',
    },
    {
      label: 'Work Experience',
      score: Math.min(((profile.experience as any[])?.length || 0) * 10, 30),
      max: 30,
      tip: 'Add more work experience entries',
    },
    {
      label: 'Education',
      score: Math.min(((profile.education as any[])?.length || 0) * 10, 20),
      max: 20,
      tip: 'Add your educational background',
    },
    {
      label: 'Skills',
      score: Math.min((profile.skills?.length || 0) * 2, 20),
      max: 20,
      tip: 'Add more skills to your profile',
    },
    {
      label: 'Summary',
      score: profile.profileSummary ? 10 : 0,
      max: 10,
      tip: 'Analyze your profile to generate a summary',
    },
    {
      label: 'Certifications',
      score: Math.min(((profile.certifications as string[])?.length || 0) * 5, 10),
      max: 10,
      tip: 'Add certifications to stand out',
    },
  ];

  const total = breakdown.reduce((a, b) => a + b.score, 0);
  const maxTotal = breakdown.reduce((a, b) => a + b.max, 0);
  const pct = Math.round((total / maxTotal) * 100);

  let grade = 'D'; let color = '#ef4444'; let bgColor = '#fef2f2';
  if (pct >= 85) { grade = 'A+'; color = '#16a34a'; bgColor = '#f0fdf4'; }
  else if (pct >= 70) { grade = 'A'; color = '#16a34a'; bgColor = '#f0fdf4'; }
  else if (pct >= 55) { grade = 'B'; color = '#2563eb'; bgColor = '#eff6ff'; }
  else if (pct >= 40) { grade = 'C'; color = '#d97706'; bgColor = '#fffbeb'; }

  return { score: pct, grade, color, bgColor, breakdown };
}

function CircularProgress({ value, size = 96, stroke = 8, color }: { value: number; size?: number; stroke?: number; color: string }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease' }} />
    </svg>
  );
}

export default function ProfileCard() {
  const { data: profile, isLoading } = useGetJobProfileQuery(undefined);
  const { data: linkedinAccount } = useGetLinkedInAccountQuery(undefined);
  const [showFullCv, setShowFullCv] = useState(false);
  const [showAllExp, setShowAllExp] = useState(false);
  const [showAllEdu, setShowAllEdu] = useState(false);

  const experience = profile?.experience as any[] | null;
  const education = profile?.education as any[] | null;
  const visibleExp = showAllExp ? experience : experience?.slice(0, 3);
  const visibleEdu = showAllEdu ? education : education?.slice(0, 2);

  const softSkillSet = new Set([
    'communication', 'teamwork', 'leadership', 'adaptability', 'problem solving',
    'creativity', 'time management', 'attention to detail', 'critical thinking',
    'emotional intelligence', 'public speaking', 'digital literacy',
    'continuous learning', 'strategic planning', 'collaboration',
    'organisation', 'organization', 'multitasking', 'work ethic',
    'interpersonal skills', 'project management',
  ]);

  const technicalSkills = profile?.skills?.filter((s: string) => !softSkillSet.has(s.toLowerCase())) || [];
  const softSkills = profile?.skills?.filter((s: string) => softSkillSet.has(s.toLowerCase())) || [];

  const cvScoreColor = (s: number) => s >= 80 ? '#16a34a' : s >= 60 ? '#d97706' : '#dc2626';
  const cvScoreLabel = (s: number) => s >= 80 ? 'Excellent' : s >= 60 ? 'Good' : 'Needs Work';

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 animate-pulse">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-slate-200 rounded-2xl" />
          <div className="space-y-2 flex-1">
            <div className="h-5 w-48 bg-slate-200 rounded" />
            <div className="h-4 w-32 bg-slate-200 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1,2,3].map(i => <div key={i} className="h-20 bg-slate-100 rounded-xl" />)}
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
        <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-7 h-7 text-slate-400" />
        </div>
        <h3 className="font-semibold text-slate-700 mb-1">No profile yet</h3>
        <p className="text-sm text-slate-400 max-w-xs mx-auto">
          Upload your CV below and click "Analyze with AI" to extract and display your full profile
        </p>
      </div>
    );
  }

  const rating = calculateProfileRating(profile);

  const displayName = (profile.fullName && !profile.fullName.includes('undefined'))
    ? profile.fullName
    : (!linkedinAccount?.name?.includes('undefined') ? linkedinAccount?.name : null) || null;

  const initials = displayName
    ? displayName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
    : profile.email?.slice(0, 2).toUpperCase() || 'ME';

  return (
    <div className="space-y-4">

      {/* HERO CARD */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="h-28 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%)' }}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '25px 25px',
          }} />
          <div className="absolute top-4 right-6 text-center">
            <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center border-2 border-white/30 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.15)' }}>
              <span className="text-white font-bold text-xl leading-none">{rating.grade}</span>
            </div>
            <span className="text-white/70 text-xs mt-1 block">Grade</span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-15">
          <div className="flex items-end gap-4 -mt-8 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center font-bold text-blue-600 text-xl shrink-0">
              {initials}
            </div>
            <div className="pb-1 flex-1 min-w-0">
              {displayName && <h2 className="text-lg font-bold text-slate-900 truncate">{displayName}</h2>}
              {profile.jobTitle && <p className="text-sm text-slate-500 truncate">{profile.jobTitle}</p>}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-5">
            {profile.email && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> {profile.email}
              </span>
            )}
            {profile.phone && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {profile.phone}
              </span>
            )}
            {profile.location && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {profile.location}
              </span>
            )}
            {profile.languages?.length > 0 && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Globe className="w-3.5 h-3.5 text-slate-400" /> {(profile.languages as string[]).join(', ')}
              </span>
            )}
          </div>

          {profile.profileSummary && (
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 mb-5">
              {profile.profileSummary}
            </p>
          )}

          <div className="space-y-3">
            {technicalSkills.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Code className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technical Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.map((s: string) => (
                    <span key={s} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {softSkills.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Soft Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((s: string) => (
                    <span key={s} className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-lg border border-amber-100">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {profile.certifications?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Award className="w-3.5 h-3.5 text-purple-500" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Certifications</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.certifications as string[]).map((c: string) => (
                    <span key={c} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-100">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PROFILE RATING */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Profile Rating</h3>
        </div>

        <div className="flex items-center gap-8 mb-6">
          <div className="relative shrink-0">
            <CircularProgress value={rating.score} size={96} stroke={8} color={rating.color} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold" style={{ color: rating.color }}>{rating.score}</span>
              <span className="text-xs text-slate-400">/ 100</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold" style={{ color: rating.color }}>{rating.grade}</span>
              <span className="text-slate-500 text-sm">
                {rating.score >= 85 ? 'Outstanding' : rating.score >= 70 ? 'Strong profile' :
                 rating.score >= 55 ? 'Good profile' : rating.score >= 40 ? 'Average' : 'Needs improvement'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${rating.score}%`, backgroundColor: rating.color }} />
            </div>
            <p className="text-xs text-slate-400 mt-2">Based on completeness of extracted profile data</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {rating.breakdown.map((item) => {
            const pct = Math.round((item.score / item.max) * 100);
            const done = item.score === item.max;
            return (
              <div key={item.label}
                className={`p-3 rounded-xl border ${done ? 'bg-green-50 border-green-100' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-slate-600">{item.label}</span>
                  {done
                    ? <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    : <AlertCircle className="w-3.5 h-3.5 text-slate-300" />}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, backgroundColor: done ? '#16a34a' : '#3b82f6' }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 shrink-0">{item.score}/{item.max}</span>
                </div>
                {!done && <p className="text-xs text-slate-400 mt-1">{item.tip}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPERIENCE + EDUCATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {experience && experience.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Experience</h3>
              <span className="ml-auto text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full">{experience.length}</span>
            </div>
            <div className="space-y-5">
              {visibleExp?.map((exp: any, i: number) => (
                <div key={i} className="relative pl-5">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                  {i < (visibleExp?.length ?? 0) - 1 && (
                    <div className="absolute left-[4px] top-5 bottom-0 w-px bg-slate-100" />
                  )}
                  <p className="font-semibold text-sm text-slate-900">{exp.title}</p>
                  <p className="text-xs text-blue-600 font-medium mt-0.5">{exp.company}</p>
                  {exp.duration && <p className="text-xs text-slate-400 mt-0.5">{exp.duration}</p>}
                  {exp.description && (
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
            {experience.length > 3 && (
              <button className="mt-4 text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
                onClick={() => setShowAllExp(!showAllExp)}>
                {showAllExp ? <><ChevronUp className="w-3.5 h-3.5" /> Show less</> : <><ChevronDown className="w-3.5 h-3.5" /> {experience.length - 3} more positions</>}
              </button>
            )}
          </div>
        )}

        {education && education.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Education</h3>
              <span className="ml-auto text-xs bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">{education.length}</span>
            </div>
            <div className="space-y-5">
              {visibleEdu?.map((edu: any, i: number) => (
                <div key={i} className="relative pl-5">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                  {i < (visibleEdu?.length ?? 0) - 1 && (
                    <div className="absolute left-[4px] top-5 bottom-0 w-px bg-slate-100" />
                  )}
                  <p className="font-semibold text-sm text-slate-900">{edu.degree}</p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">{edu.institution}</p>
                  {edu.year && <p className="text-xs text-slate-400 mt-0.5">{edu.year}</p>}
                </div>
              ))}
            </div>
            {education.length > 2 && (
              <button className="mt-4 text-xs text-emerald-600 flex items-center gap-1 font-medium"
                onClick={() => setShowAllEdu(!showAllEdu)}>
                {showAllEdu ? <><ChevronUp className="w-3.5 h-3.5" /> Show less</> : <><ChevronDown className="w-3.5 h-3.5" /> {education.length - 2} more</>}
              </button>
            )}
          </div>
        )}
      </div>

      {/* CV SCORE + TIPS */}
      {profile.cvScore !== null && profile.cvScore !== undefined && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900">CV Score & Improvement Tips</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-28 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${profile.cvScore}%`, backgroundColor: cvScoreColor(profile.cvScore) }} />
              </div>
              <div className="text-right">
                <span className="text-lg font-bold" style={{ color: cvScoreColor(profile.cvScore) }}>{profile.cvScore}</span>
                <span className="text-slate-400 text-sm">/100</span>
                <p className="text-xs font-medium" style={{ color: cvScoreColor(profile.cvScore) }}>{cvScoreLabel(profile.cvScore)}</p>
              </div>
            </div>
          </div>
          {profile.cvFeedback?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {(profile.cvFeedback as string[]).map((tip: string, i: number) => (
                <div key={i} className="flex gap-3 p-3.5 bg-amber-50 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-xs text-amber-900 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* FULL CV VIEWER */}
      {profile.cvEditableText && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
            onClick={() => setShowFullCv(!showFullCv)}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-slate-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 text-sm">Full CV Text</p>
                {profile.cvFileName && <p className="text-xs text-slate-400">{profile.cvFileName}</p>}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {profile.cvDownloadUrl && (
                <a href={profile.cvDownloadUrl} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-blue-600 font-medium px-2.5 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
                  <ExternalLink className="w-3 h-3" /> Download
                </a>
              )}
              <span className="text-xs text-slate-400 flex items-center gap-1">
                {showFullCv ? <><ChevronUp className="w-4 h-4" /> Collapse</> : <><ChevronDown className="w-4 h-4" /> View Full CV</>}
              </span>
            </div>
          </button>
          {showFullCv && (
            <div className="border-t border-slate-100 p-6">
              <pre className="whitespace-pre-wrap font-mono text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-5 border border-slate-100 max-h-[500px] overflow-y-auto">
                {profile.cvEditableText}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}