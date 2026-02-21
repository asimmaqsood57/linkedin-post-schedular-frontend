// 'use client';

// import { useState, useRef } from 'react';
// import {
//   useGetJobProfileQuery,
//   useAnalyzeProfileMutation,
//   useUploadCvMutation,
//   useGetLinkedInAccountQuery,
//   useDeleteCvMutation,
//   useUpdateCvTextMutation,
// } from '@/lib/features/api/apiSlice';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import {
//   Upload, Sparkles, FileText, Linkedin,
//   CheckCircle, Loader2, Pencil, Trash2, X, Save,
// } from 'lucide-react';

// export default function ProfileSection() {
//   const { data: profile } = useGetJobProfileQuery(undefined);
//   const { data: linkedinAccount } = useGetLinkedInAccountQuery(undefined);
//   const [analyzeProfile, { isLoading: isAnalyzing }] = useAnalyzeProfileMutation();
//   const [uploadCv, { isLoading: isUploading }] = useUploadCvMutation();
//   const [deleteCv, { isLoading: isDeletingCv }] = useDeleteCvMutation();
//   const [updateCvText, { isLoading: isSavingCv }] = useUpdateCvTextMutation();
//   const { toast } = useToast();

//   const [linkedinBio, setLinkedinBio] = useState('');
//   const [uploadedCvKey, setUploadedCvKey] = useState('');
//   const [uploadedCvName, setUploadedCvName] = useState('');
//   const [uploadedCvMime, setUploadedCvMime] = useState('');
//   const [activeTab, setActiveTab] = useState<'linkedin' | 'cv'>('cv');
//   const [showCvEditor, setShowCvEditor] = useState(false);
//   const [editedCvText, setEditedCvText] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const formData = new FormData();
//     formData.append('file', file);
//     try {
//       const result = await uploadCv(formData).unwrap();
//       setUploadedCvKey(result.key);
//       setUploadedCvName(result.fileName);
//       setUploadedCvMime(result.mimeType || file.type || 'application/pdf');
//       toast({ title: 'CV uploaded ✓', description: `${file.name} ready — now click Analyze` });
//     } catch {
//       toast({ title: 'Upload failed', description: 'Could not upload CV', variant: 'destructive' });
//     }
//     e.target.value = '';
//   };

//   const handleAnalyze = async () => {
//     const useLinkedin = activeTab === 'linkedin';
//     const useCv = activeTab === 'cv';
//     const hasBio = useLinkedin && (linkedinBio.trim() || linkedinAccount);
//     const hasCv = useCv && (uploadedCvKey || profile?.cvS3Key);
//     if (!hasBio && !hasCv) {
//       toast({ title: 'Nothing to analyze', description: useCv ? 'Please upload a CV first' : 'Connect LinkedIn or paste text', variant: 'destructive' });
//       return;
//     }
//     try {
//       await analyzeProfile({
//         linkedinBio: useLinkedin ? linkedinBio || undefined : undefined,
//         cvS3Key: useCv ? (uploadedCvKey || profile?.cvS3Key || undefined) : undefined,
//         cvFileName: useCv ? (uploadedCvName || profile?.cvFileName || undefined) : undefined,
//         cvMimeType: useCv ? (uploadedCvMime || profile?.cvMimeType || 'application/pdf') : undefined,
//       }).unwrap();
//       toast({ title: '✅ Analysis complete!', description: 'All CV data extracted and saved to your profile' });
//     } catch (err: any) {
//       toast({ title: 'Analysis failed', description: err?.data?.message || 'Please try again', variant: 'destructive' });
//     }
//   };

//   const handleDeleteCv = async () => {
//     if (!confirm('Delete your uploaded CV?')) return;
//     try {
//       await deleteCv(undefined).unwrap();
//       setUploadedCvKey(''); setUploadedCvName(''); setUploadedCvMime('');
//       toast({ title: 'CV deleted' });
//     } catch {
//       toast({ title: 'Error', description: 'Failed to delete CV', variant: 'destructive' });
//     }
//   };

//   const handleSaveCvText = async () => {
//     try {
//       await updateCvText({ cvText: editedCvText }).unwrap();
//       setShowCvEditor(false);
//       toast({ title: 'CV text saved' });
//     } catch {
//       toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
//     }
//   };

//   const hasExistingCv = !!(profile?.cvS3Key || profile?.cvFileName);

//   return (
//     <div className="bg-white rounded-2xl border border-slate-200 p-6">
//       <h3 className="font-semibold text-slate-900 mb-1">Update Profile</h3>
//       <p className="text-sm text-slate-400 mb-5">Re-analyze with new data or upload an updated CV</p>

//       {linkedinAccount ? (
//         <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-sm mb-4">
//           <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
//           <span className="text-blue-800">
//             LinkedIn connected as <strong>{linkedinAccount.name?.includes('undefined') ? linkedinAccount.email : linkedinAccount.name}</strong> — included automatically
//           </span>
//         </div>
//       ) : (
//         <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800 mb-4">
//           Connect LinkedIn from the Dashboard for richer profile analysis
//         </div>
//       )}

//       <div className="flex rounded-xl bg-slate-100 p-1 gap-1 mb-5">
//         {(['linkedin', 'cv'] as const).map((tab) => (
//           <button
//             key={tab}
//             className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
//               activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab === 'linkedin' ? <><Linkedin className="w-4 h-4" /> LinkedIn Bio</> : <><FileText className="w-4 h-4" /> Upload CV</>}
//           </button>
//         ))}
//       </div>

//       {activeTab === 'linkedin' ? (
//         <Textarea
//           value={linkedinBio}
//           onChange={(e) => setLinkedinBio(e.target.value)}
//           placeholder="Paste your LinkedIn About section, experience, education, and skills here..."
//           rows={7}
//           className="mb-4 text-sm"
//         />
//       ) : (
//         <div className="mb-4 space-y-3">
//           <div
//             className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
//               uploadedCvKey ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/30'
//             }`}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             {isUploading ? (
//               <div className="flex flex-col items-center gap-2 text-blue-600">
//                 <Loader2 className="w-8 h-8 animate-spin" />
//                 <p className="text-sm font-medium">Uploading…</p>
//               </div>
//             ) : uploadedCvKey ? (
//               <div className="flex flex-col items-center gap-2 text-emerald-600">
//                 <CheckCircle className="w-8 h-8" />
//                 <p className="text-sm font-semibold">{uploadedCvName}</p>
//                 <p className="text-xs text-slate-400">Click to replace</p>
//               </div>
//             ) : (
//               <>
//                 <Upload className="w-8 h-8 mx-auto text-slate-300 mb-2" />
//                 <p className="text-sm text-slate-600 font-medium">Click to upload CV</p>
//                 <p className="text-xs text-slate-400 mt-1">PDF or TXT — all data will be extracted</p>
//               </>
//             )}
//             <input ref={fileInputRef} type="file" accept=".pdf,.txt" onChange={handleFileUpload} className="hidden" />
//           </div>

//           {hasExistingCv && !uploadedCvKey && (
//             <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
//               <div className="flex items-center gap-2">
//                 <FileText className="w-4 h-4 text-slate-400" />
//                 <div>
//                   <p className="text-xs font-medium text-slate-700">{profile?.cvFileName || 'Uploaded CV'}</p>
//                   <p className="text-xs text-slate-400">Previously uploaded</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1">
//                 {profile?.cvEditableText && (
//                   <button onClick={handleOpenCvEditor} className="flex items-center gap-1 text-xs text-blue-600 px-2 py-1.5 rounded-lg hover:bg-blue-50">
//                     <Pencil className="w-3 h-3" /> Edit
//                   </button>
//                 )}
//                 <button onClick={handleDeleteCv} disabled={isDeletingCv} className="flex items-center gap-1 text-xs text-red-500 px-2 py-1.5 rounded-lg hover:bg-red-50">
//                   {isDeletingCv ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />} Delete
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       <button
//         className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
//           isAnalyzing || isUploading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-700'
//         }`}
//         onClick={handleAnalyze}
//         disabled={isAnalyzing || isUploading}
//       >
//         {isAnalyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> Extracting all data…</> : <><Sparkles className="w-4 h-4" /> Analyze with AI</>}
//       </button>

//       {showCvEditor && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//               <h3 className="font-semibold text-slate-900">Edit CV Text</h3>
//               <button onClick={() => setShowCvEditor(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
//             </div>
//             <div className="flex-1 overflow-auto p-6">
//               <Textarea value={editedCvText} onChange={(e) => setEditedCvText(e.target.value)} rows={20} className="font-mono text-xs" />
//             </div>
//             <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
//               <button onClick={() => setShowCvEditor(false)} className="px-4 py-2 text-sm border border-slate-200 rounded-xl hover:bg-slate-50">Cancel</button>
//               <button onClick={handleSaveCvText} disabled={isSavingCv} className="px-4 py-2 text-sm font-semibold bg-slate-900 text-white rounded-xl flex items-center gap-2">
//                 {isSavingCv ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   function handleOpenCvEditor() {
//     setEditedCvText(profile?.cvEditableText || '');
//     setShowCvEditor(true);
//   }
// }


'use client';

import { useState, useRef } from 'react';
import {
  useGetJobProfileQuery,
  useAnalyzeProfileMutation,
  useUploadCvMutation,
  useGetLinkedInAccountQuery,
  useDeleteCvMutation,
  useUpdateCvTextMutation,
} from '@/lib/features/api/apiSlice';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Upload, Sparkles, FileText, Linkedin,
  CheckCircle, Loader2, Pencil, Trash2, X, Save, AlertCircle,
} from 'lucide-react';

// ─── Client-side PDF text extraction ──────────────────────────
// Uses PDF.js from CDN — no server-side pdf-parse needed
async function extractTextFromPdf(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      
      try {
        // Dynamically load PDF.js from CDN
        // @ts-ignore
        if (!window.pdfjsLib) {
          await new Promise<void>((res, rej) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = () => res();
            script.onerror = () => rej(new Error('Failed to load PDF.js'));
            document.head.appendChild(script);
          });
          // @ts-ignore
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }

        // @ts-ignore
        const pdfjsLib = window.pdfjsLib;
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        
        let fullText = '';
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => item.str)
            .join(' ');
          fullText += pageText + '\n';
        }
        
        resolve(fullText.trim());
      } catch (err) {
        console.error('PDF.js extraction failed:', err);
        resolve('');
      }
    };
    reader.onerror = () => resolve('');
    reader.readAsArrayBuffer(file);
  });
}

export default function ProfileSection() {
  const { data: profile } = useGetJobProfileQuery(undefined);
  const { data: linkedinAccount } = useGetLinkedInAccountQuery(undefined);
  const [analyzeProfile, { isLoading: isAnalyzing }] = useAnalyzeProfileMutation();
  const [uploadCv, { isLoading: isUploading }] = useUploadCvMutation();
  const [deleteCv, { isLoading: isDeletingCv }] = useDeleteCvMutation();
  const [updateCvText, { isLoading: isSavingCv }] = useUpdateCvTextMutation();
  const { toast } = useToast();

  const [linkedinBio, setLinkedinBio] = useState('');
  const [uploadedCvKey, setUploadedCvKey] = useState('');
  const [uploadedCvName, setUploadedCvName] = useState('');
  const [extractedCvText, setExtractedCvText] = useState(''); // text extracted client-side
  const [extractingText, setExtractingText] = useState(false);
  const [extractionWarning, setExtractionWarning] = useState('');
  const [activeTab, setActiveTab] = useState<'linkedin' | 'cv'>('cv');
  const [showCvEditor, setShowCvEditor] = useState(false);
  const [editedCvText, setEditedCvText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setExtractionWarning('');

    // Step 1: Extract text client-side BEFORE uploading
    if (file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf') {
      setExtractingText(true);
      toast({ title: 'Reading PDF…', description: 'Extracting text from your PDF' });
      
      const text = await extractTextFromPdf(file);
      setExtractingText(false);
      
      if (!text || text.trim().length < 50) {
        setExtractionWarning(
          'Could not extract text from this PDF. It may be image-based (scanned). Please try a text-based PDF or paste your CV text manually below.'
        );
        // Still upload the file for download purposes, but warn user
      } else {
        setExtractedCvText(text);
        console.log(`Extracted ${text.length} chars from PDF client-side`);
      }
    } else {
      // Plain text — just read it directly
      const text = await file.text();
      setExtractedCvText(text);
    }

    // Step 2: Upload the original file to S3 (for download link)
    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await uploadCv(formData).unwrap();
      setUploadedCvKey(result.key);
      setUploadedCvName(result.fileName);
      toast({ 
        title: extractedCvText || extractingText ? 'CV ready ✓' : 'CV uploaded',
        description: extractedCvText 
          ? `Text extracted (${extractedCvText.length} chars) — click Analyze`
          : `${file.name} uploaded — click Analyze`
      });
    } catch {
      toast({ title: 'Upload failed', variant: 'destructive' });
    }
    e.target.value = '';
  };

  const handleAnalyze = async () => {
    const useLinkedin = activeTab === 'linkedin';
    const useCv = activeTab === 'cv';

    const hasBio = useLinkedin && (linkedinBio.trim() || linkedinAccount);
    const hasCv = useCv && (uploadedCvKey || profile?.cvS3Key || extractedCvText);

    if (!hasBio && !hasCv) {
      toast({
        title: 'Nothing to analyze',
        description: useCv ? 'Please upload a CV first' : 'Connect LinkedIn or paste text',
        variant: 'destructive',
      });
      return;
    }

    try {
      await analyzeProfile({
        linkedinBio: useLinkedin ? linkedinBio || undefined : undefined,
        // Pass extracted text directly — backend uses this instead of fetching from S3
        cvText: useCv && extractedCvText ? extractedCvText : undefined,
        cvS3Key: useCv ? (uploadedCvKey || profile?.cvS3Key || undefined) : undefined,
        cvFileName: useCv ? (uploadedCvName || profile?.cvFileName || undefined) : undefined,
      }).unwrap();
      toast({ title: '✅ Analysis complete!', description: 'All CV data extracted and saved to your profile' });
    } catch (err: any) {
      toast({
        title: 'Analysis failed',
        description: err?.data?.message || 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteCv = async () => {
    if (!confirm('Delete your uploaded CV?')) return;
    try {
      await deleteCv(undefined).unwrap();
      setUploadedCvKey('');
      setUploadedCvName('');
      setExtractedCvText('');
      toast({ title: 'CV deleted' });
    } catch {
      toast({ title: 'Error', description: 'Failed to delete CV', variant: 'destructive' });
    }
  };

  const handleSaveCvText = async () => {
    try {
      await updateCvText({ cvText: editedCvText }).unwrap();
      setShowCvEditor(false);
      toast({ title: 'CV text saved' });
    } catch {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' });
    }
  };

  const hasExistingCv = !!(profile?.cvS3Key || profile?.cvFileName);
  const isProcessing = isUploading || extractingText;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="font-semibold text-slate-900 mb-1">Update Profile</h3>
      <p className="text-sm text-slate-400 mb-5">Re-analyze with new data or upload an updated CV</p>

      {/* LinkedIn banner */}
      {linkedinAccount ? (
        <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-sm mb-4">
          <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
          <span className="text-blue-800">
            LinkedIn connected as <strong>
              {linkedinAccount.name?.includes('undefined') ? linkedinAccount.email : linkedinAccount.name}
            </strong> — included automatically
          </span>
        </div>
      ) : (
        <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800 mb-4">
          Connect LinkedIn from the Dashboard for richer profile analysis
        </div>
      )}

      {/* Tab toggle */}
      <div className="flex rounded-xl bg-slate-100 p-1 gap-1 mb-5">
        {(['linkedin', 'cv'] as const).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'linkedin'
              ? <><Linkedin className="w-4 h-4" /> LinkedIn Bio</>
              : <><FileText className="w-4 h-4" /> Upload CV</>}
          </button>
        ))}
      </div>

      {activeTab === 'linkedin' ? (
        <Textarea
          value={linkedinBio}
          onChange={(e) => setLinkedinBio(e.target.value)}
          placeholder="Paste your LinkedIn About section, experience, education, and skills here..."
          rows={7}
          className="mb-4 text-sm"
        />
      ) : (
        <div className="mb-4 space-y-3">
          {/* Upload dropzone */}
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              uploadedCvKey
                ? 'border-emerald-400 bg-emerald-50'
                : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/30'
            }`}
            onClick={() => !isProcessing && fileInputRef.current?.click()}
          >
            {isProcessing ? (
              <div className="flex flex-col items-center gap-2 text-blue-600">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="text-sm font-medium">
                  {extractingText ? 'Extracting text from PDF…' : 'Uploading to S3…'}
                </p>
              </div>
            ) : uploadedCvKey ? (
              <div className="flex flex-col items-center gap-2 text-emerald-600">
                <CheckCircle className="w-8 h-8" />
                <p className="text-sm font-semibold">{uploadedCvName}</p>
                {extractedCvText && (
                  <p className="text-xs text-emerald-500">
                    ✓ {extractedCvText.length.toLocaleString()} characters extracted
                  </p>
                )}
                <p className="text-xs text-slate-400">Click to replace</p>
              </div>
            ) : (
              <>
                <Upload className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                <p className="text-sm text-slate-600 font-medium">Click to upload CV</p>
                <p className="text-xs text-slate-400 mt-1">PDF (text-based) or TXT</p>
              </>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Extraction warning */}
          {extractionWarning && (
            <div className="flex gap-2 p-3 bg-orange-50 border border-orange-200 rounded-xl">
              <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-orange-800 leading-relaxed">{extractionWarning}</p>
                <p className="text-xs text-orange-600 mt-2 font-medium">Paste your CV text manually below:</p>
                <Textarea
                  value={extractedCvText}
                  onChange={(e) => setExtractedCvText(e.target.value)}
                  placeholder="Paste your full CV text here..."
                  rows={6}
                  className="mt-2 text-xs"
                />
              </div>
            </div>
          )}

          {/* Existing CV row */}
          {hasExistingCv && !uploadedCvKey && (
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-xs font-medium text-slate-700">{profile?.cvFileName || 'Uploaded CV'}</p>
                  <p className="text-xs text-slate-400">Previously uploaded</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {profile?.cvEditableText && (
                  <button
                    onClick={() => { setEditedCvText(profile.cvEditableText || ''); setShowCvEditor(true); }}
                    className="flex items-center gap-1 text-xs text-blue-600 px-2 py-1.5 rounded-lg hover:bg-blue-50"
                  >
                    <Pencil className="w-3 h-3" /> Edit
                  </button>
                )}
                <button
                  onClick={handleDeleteCv}
                  disabled={isDeletingCv}
                  className="flex items-center gap-1 text-xs text-red-500 px-2 py-1.5 rounded-lg hover:bg-red-50"
                >
                  {isDeletingCv ? <Loader2 className="w-3 h-3 animate-spin" /> : <Trash2 className="w-3 h-3" />}
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Analyze button */}
      <button
        className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
          isAnalyzing || isProcessing
            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
            : 'bg-slate-900 text-white hover:bg-slate-700'
        }`}
        onClick={handleAnalyze}
        disabled={isAnalyzing || isProcessing}
      >
        {isAnalyzing
          ? <><Loader2 className="w-4 h-4 animate-spin" /> Extracting all data…</>
          : <><Sparkles className="w-4 h-4" /> Analyze with AI</>}
      </button>

      {/* CV Editor modal */}
      {showCvEditor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900">Edit CV Text</h3>
              <button onClick={() => setShowCvEditor(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <Textarea
                value={editedCvText}
                onChange={(e) => setEditedCvText(e.target.value)}
                rows={20}
                className="font-mono text-xs"
              />
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
              <button
                onClick={() => setShowCvEditor(false)}
                className="px-4 py-2 text-sm border border-slate-200 rounded-xl hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCvText}
                disabled={isSavingCv}
                className="px-4 py-2 text-sm font-semibold bg-slate-900 text-white rounded-xl flex items-center gap-2"
              >
                {isSavingCv ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}