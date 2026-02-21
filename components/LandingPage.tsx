// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Check, Clock, Sparkles, TrendingUp, Calendar, Zap, Users, BarChart3, RefreshCw } from 'lucide-react';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}
//       <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               PostAgent
//             </span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
//               Login
//             </Link>
//             <Link 
//               href="/register" 
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
//             >
//               Get Started Free
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4">
//         <div className="container mx-auto text-center max-w-5xl">
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Sparkles className="w-4 h-4" />
//             AI-Powered LinkedIn Automation
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
//             LinkedIn Posting on<br />Autopilot
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Generate and schedule engaging LinkedIn posts automatically. 
//             Grow your presence while you sleep with AI-powered content.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Link 
//               href="/register" 
//               className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all flex items-center gap-2"
//             >
//               Start Free 
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <a href='https://drive.google.com/file/d/12Xl64W_IydFs9hX_Op0p_jZa9IS0WpUO/view' target="_blank" >

//             <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors" >
//               Watch Demo
//             </button>
//             </a>
//           </div>

//           {/* <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <Check className="w-5 h-5 text-green-500" />
//               No credit card required
//             </div>
//             <div className="flex items-center gap-2">
//               <Check className="w-5 h-5 text-green-500" />
//               Free 14-day trial
//             </div>
//             <div className="flex items-center gap-2">
//               <Check className="w-5 h-5 text-green-500" />
//               Cancel anytime
//             </div>
//           </div> */}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-white/50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
//               <div className="text-gray-600">Posts Generated</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
//               <div className="text-gray-600">Active Users</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
//               <div className="text-gray-600">Time Saved</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
//               <div className="text-gray-600">Engagement Boost</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-100">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//               Tired of the LinkedIn Grind?
//             </h2>
//             <div className="space-y-4 text-lg text-gray-700">
//               <p className="flex items-start gap-3">
//                 <span className="text-red-500 text-2xl">✗</span>
//                 Spending hours brainstorming post ideas every week
//               </p>
//               <p className="flex items-start gap-3">
//                 <span className="text-red-500 text-2xl">✗</span>
//                 Forgetting to post consistently and losing engagement
//               </p>
//               <p className="flex items-start gap-3">
//                 <span className="text-red-500 text-2xl">✗</span>
//                 Watching competitors grow while your profile stays stagnant
//               </p>
//               <p className="flex items-start gap-3">
//                 <span className="text-red-500 text-2xl">✗</span>
//                 Missing out on opportunities because of low visibility
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Everything You Need to Dominate LinkedIn
//             </h2>
//             <p className="text-xl text-gray-600">
//               Powerful features that work together to grow your presence
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
//                 <Sparkles className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">AI Content Generation</h3>
//               <p className="text-gray-600">
//                 Generate engaging, professional LinkedIn posts in seconds. Our AI understands your industry and creates relevant content.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
//                 <Calendar className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Scheduling</h3>
//               <p className="text-gray-600">
//                 Schedule posts daily, weekly, or monthly. Set it once and let PostAgent handle the rest automatically.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center mb-4">
//                 <RefreshCw className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Recurring Automation</h3>
//               <p className="text-gray-600">
//                 Create schedules that run automatically. Post every day, week, or custom interval without lifting a finger.
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
//                 <TrendingUp className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Multiple Categories</h3>
//               <p className="text-gray-600">
//                 Choose from Technology, Business, Career, Marketing and more. Mix categories for diverse content.
//               </p>
//             </div>

//             {/* Feature 5 */}
//             <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
//                 <Zap className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Publishing</h3>
//               <p className="text-gray-600">
//                 One-click publishing to LinkedIn. Review AI-generated content and publish immediately or schedule for later.
//               </p>
//             </div>

//             {/* Feature 6 */}
//             <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mb-4">
//                 <Clock className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Time Zone Smart</h3>
//               <p className="text-gray-600">
//                 Posts automatically adjust to your timezone. Schedule in your local time, publish at the perfect moment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Simple Setup, Powerful Results
//             </h2>
//             <p className="text-xl text-gray-600">
//               Get started in minutes, not hours
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Step 1 */}
//             <div className="relative">
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
//                   1
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">Connect LinkedIn</h3>
//                 <p className="text-gray-600">
//                   Link your LinkedIn account securely with one click. OAuth authentication keeps your data safe.
//                 </p>
//               </div>
//               <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
//             </div>

//             {/* Step 2 */}
//             <div className="relative">
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
//                   2
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">Create Schedule</h3>
//                 <p className="text-gray-600">
//                   Choose your posting frequency and categories. Set it to daily, weekly, or custom intervals.
//                 </p>
//               </div>
//               <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></div>
//             </div>

//             {/* Step 3 */}
//             <div>
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
//                   3
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">Watch It Grow</h3>
//                 <p className="text-gray-600">
//                   Sit back and relax. PostAgent generates and publishes content automatically. Watch your engagement soar.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//                 Why PostAgent is Different
//               </h2>
//               <p className="text-xl text-gray-600 mb-8">
//                 Most tools require daily effort. PostAgent runs on autopilot.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                     <Check className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-1 text-gray-900">True Automation</h4>
//                     <p className="text-gray-600">Set once, run forever. No daily logins required.</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Sparkles className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-1 text-gray-900">Quality Content</h4>
//                     <p className="text-gray-600">AI generates professional, engaging posts that sound human.</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                     <TrendingUp className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-1 text-gray-900">Proven Growth</h4>
//                     <p className="text-gray-600">Users see 3x engagement increase within first month.</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-1 text-gray-900">Save 10+ Hours Weekly</h4>
//                     <p className="text-gray-600">Eliminate time spent on content creation and scheduling.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 border border-blue-200">
//                 <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
//                     <div>
//                       <div className="font-bold">Your Name</div>
//                       <div className="text-sm text-gray-500">Just now</div>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed">
//                     Excited to share insights on the future of AI in business automation. 
//                     The landscape is evolving rapidly... 🚀
//                   </p>
//                   <div className="flex gap-2 mt-4">
//                     <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">#AI</span>
//                     <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">#Tech</span>
//                   </div>
//                 </div>
//                 <div className="text-center text-sm text-gray-600">
//                   <Sparkles className="w-4 h-4 inline mr-1" />
//                   Generated & Posted Automatically
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof */}
//       <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//               Join Hundreds of Growing Professionals
//             </h2>
//             <p className="text-xl text-gray-600">
//               See what our users are saying
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-yellow-400">★</span>
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">
//                 "PostAgent saved me 10+ hours every week. My LinkedIn engagement is up 300% and I haven't manually posted in months!"
//               </p>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
//                 <div>
//                   <div className="font-bold text-sm">Sarah Johnson</div>
//                   <div className="text-xs text-gray-500">Marketing Director</div>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-yellow-400">★</span>
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">
//                 "The AI content is incredibly good. People think I'm spending hours crafting posts. It's my secret weapon for personal branding."
//               </p>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
//                 <div>
//                   <div className="font-bold text-sm">Michael Chen</div>
//                   <div className="text-xs text-gray-500">Tech Entrepreneur</div>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial 3 */}
//             <div className="bg-white p-6 rounded-2xl shadow-lg">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-yellow-400">★</span>
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">
//                 "Game changer! I went from 0 posts to consistent daily content. Now getting inbound leads every week. Best investment ever."
//               </p>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
//                 <div>
//                   <div className="font-bold text-sm">Emily Rodriguez</div>
//                   <div className="text-xs text-gray-500">Business Coach</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto max-w-4xl text-center text-white">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Grow Your LinkedIn Presence?
//           </h2>
//           <p className="text-xl mb-8 opacity-90">
//             Join 500+ professionals who automate their LinkedIn success
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link 
//               href="/register" 
//               className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
//             >
//               Start Your Free Trial
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <p className="text-sm opacity-75">14-day free trial • No credit card required</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-12 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Sparkles className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-white font-bold">PostAgent</span>
//               </div>
//               <p className="text-sm">
//                 AI-powered LinkedIn automation for modern professionals.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-white font-bold mb-4">Product</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">Features</a></li>
//                 <li><a href="#" className="hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white">Demo</a></li>
//                 <li><a href="#" className="hover:text-white">Roadmap</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-bold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">About</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-bold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="hover:text-white">Terms</a></li>
//                 <li><a href="#" className="hover:text-white">Security</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 text-center text-sm">
//             <p>&copy; 2026 PostAgent. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



// 'use client';

// import Link from 'next/link';
// import { useState, useEffect, useRef } from 'react';
// import {
//   ArrowRight, Sparkles, Calendar, Briefcase, Mail,
//   Send, Clock, CheckCircle, Zap, Search, FileText,
//   Star, Copy, ExternalLink, Check, ChevronDown,
//   BarChart3, Users, TrendingUp, Play, X,
//   Linkedin, MessageSquare, Eye, Heart
// } from 'lucide-react';

// /* ─── Utility: animated number ──────────────────────────── */
// function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
//   const [current, setCurrent] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(([entry]) => {
//       if (!entry.isIntersecting || started.current) return;
//       started.current = true;
//       const startTime = performance.now();
//       const animate = (now: number) => {
//         const elapsed = now - startTime;
//         const progress = Math.min(elapsed / duration, 1);
//         const eased = 1 - Math.pow(1 - progress, 4);
//         setCurrent(Math.floor(eased * target));
//         if (progress < 1) requestAnimationFrame(animate);
//         else setCurrent(target);
//       };
//       requestAnimationFrame(animate);
//     }, { threshold: 0.5 });
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [target, duration]);

//   return <span ref={ref}>{current.toLocaleString()}{suffix}</span>;
// }

// /* ─── Utility: intersection fade-up ─────────────────────── */
// function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
//     }, { threshold: 0.15 });
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className={className} style={{
//       opacity: visible ? 1 : 0,
//       transform: visible ? 'translateY(0)' : 'translateY(32px)',
//       transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
//     }}>
//       {children}
//     </div>
//   );
// }

// /* ─── Mini product demo component ───────────────────────── */
// function ProductDemo() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [copied, setCopied] = useState(false);

//   const tabs = [
//     { label: 'AI Post', icon: <Sparkles size={14} /> },
//     { label: 'Schedule', icon: <Calendar size={14} /> },
//     { label: 'Jobs', icon: <Briefcase size={14} /> },
//     { label: 'Email', icon: <Mail size={14} /> },
//   ];

//   return (
//     <div style={{
//       background: 'rgba(15,17,27,0.95)',
//       border: '1px solid rgba(255,255,255,0.08)',
//       borderRadius: 24,
//       overflow: 'hidden',
//       boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
//     }}>
//       {/* Window chrome */}
//       <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
//         <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
//         <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
//         <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
//         <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//           <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '4px 16px', fontSize: 11, color: '#6b7280', fontFamily: 'monospace' }}>
//             app.postagent.ai/dashboard
//           </div>
//         </div>
//       </div>

//       {/* Tab nav */}
//       <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px', gap: 4 }}>
//         {tabs.map((tab, i) => (
//           <button key={i} onClick={() => setActiveTab(i)} style={{
//             display: 'flex', alignItems: 'center', gap: 6,
//             padding: '12px 16px', fontSize: 12, fontWeight: 600,
//             color: activeTab === i ? '#f0b429' : '#6b7280',
//             borderBottom: activeTab === i ? '2px solid #f0b429' : '2px solid transparent',
//             background: 'none', border: 'none', borderRadius: '4px 4px 0 0',
//             cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'inherit',
//           }}>
//             {tab.icon} {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab content */}
//       <div style={{ padding: 24, minHeight: 280 }}>
//         {/* AI Post Tab */}
//         {activeTab === 0 && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//             <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//               {['Technology', 'Business', 'Career', 'Marketing'].map((cat, i) => (
//                 <span key={cat} style={{
//                   padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700,
//                   background: i === 0 ? '#f0b429' : 'rgba(255,255,255,0.07)',
//                   color: i === 0 ? '#0f111b' : '#9ca3af',
//                   cursor: 'pointer', transition: 'all 0.2s',
//                 }}>{cat}</span>
//               ))}
//             </div>
//             <div style={{
//               background: 'rgba(255,255,255,0.04)', borderRadius: 14,
//               padding: 20, border: '1px solid rgba(255,255,255,0.07)',
//             }}>
//               <p style={{ fontSize: 14, color: '#e2e8f0', lineHeight: 1.75, margin: 0 }}>
//                 "The developers who thrive in the AI era aren't writing more code — they're asking better questions. Prompt engineering is the new superpower. 🧠<br /><br />
//                 Those who master this skill won't be replaced by AI. They'll use AI to do the work of 10 engineers.<br /><br />
//                 <span style={{ color: '#6366f1' }}>#AI #SoftwareEngineering #FutureOfWork #TechLeadership</span>"
//               </p>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <span style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 6 }}>
//                 <Zap size={12} color="#f0b429" /> Generated in 1.4s
//               </span>
//               <button style={{
//                 display: 'flex', alignItems: 'center', gap: 6,
//                 background: '#f0b429', color: '#0f111b',
//                 padding: '8px 18px', borderRadius: 10, fontSize: 12,
//                 fontWeight: 700, border: 'none', cursor: 'pointer',
//               }}>
//                 <Send size={12} /> Publish to LinkedIn
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Schedule Tab */}
//         {activeTab === 1 && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
//               {[
//                 { name: 'Daily Tech Posts', freq: 'Every day at 9AM', cat: 'Technology', active: true, count: 47 },
//                 { name: 'Career Tips', freq: 'Every Monday', cat: 'Career', active: true, count: 12 },
//                 { name: 'Business Insights', freq: 'Monthly', cat: 'Business', active: false, count: 3 },
//                 { name: 'Marketing Mix', freq: 'Every 3 days', cat: 'Marketing', active: true, count: 8 },
//               ].map((s, i) => (
//                 <div key={i} style={{
//                   background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.active ? 'rgba(240,180,41,0.2)' : 'rgba(255,255,255,0.06)'}`,
//                   borderRadius: 12, padding: 14,
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
//                     <span style={{ fontSize: 11, fontWeight: 700, color: s.active ? '#10b981' : '#6b7280' }}>
//                       {s.active ? '● LIVE' : '○ PAUSED'}
//                     </span>
//                     <span style={{ fontSize: 11, color: '#f0b429', fontWeight: 700 }}>{s.count} posts</span>
//                   </div>
//                   <p style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', margin: '0 0 4px' }}>{s.name}</p>
//                   <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>{s.freq} · {s.cat}</p>
//                 </div>
//               ))}
//             </div>
//             <div style={{
//               background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
//               borderRadius: 10, padding: '10px 14px',
//               display: 'flex', alignItems: 'center', gap: 8,
//             }}>
//               <CheckCircle size={14} color="#10b981" />
//               <span style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>3 active schedules · 70 posts published this month · Next: Tomorrow 9AM</span>
//             </div>
//           </div>
//         )}

//         {/* Jobs Tab */}
//         {activeTab === 2 && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//             <div style={{
//               background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 14,
//               border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 12,
//             }}>
//               <div style={{ width: 36, height: 36, background: 'rgba(99,102,241,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <FileText size={16} color="#6366f1" />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <p style={{ fontSize: 12, fontWeight: 700, color: '#e2e8f0', margin: '0 0 4px' }}>CV Analyzed • M. Asim Maqsood</p>
//                 <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
//                   {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'].map(s => (
//                     <span key={s} style={{ fontSize: 10, background: 'rgba(255,255,255,0.08)', color: '#9ca3af', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>{s}</span>
//                   ))}
//                 </div>
//               </div>
//               <span style={{ fontSize: 13, fontWeight: 800, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: 8 }}>84/100</span>
//             </div>
//             {[
//               { title: 'Senior Frontend Engineer', co: 'TechCorp', loc: 'London · Remote', sal: '£85k–£100k', match: 97 },
//               { title: 'React Developer', co: 'FinStarter', loc: 'London · Hybrid', sal: '£70k–£85k', match: 92 },
//               { title: 'Full Stack Engineer', co: 'ScaleUp Ltd', loc: 'Manchester', sal: '£65k–£80k', match: 88 },
//             ].map((job, i) => (
//               <div key={i} style={{
//                 display: 'flex', alignItems: 'center', gap: 12,
//                 background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '12px 14px',
//                 border: '1px solid rgba(255,255,255,0.06)',
//               }}>
//                 <div style={{ width: 36, height: 36, borderRadius: 10, background: `hsl(${120 + i * 40}, 60%, 20%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: `hsl(${120 + i * 40}, 70%, 70%)`, flexShrink: 0 }}>
//                   {job.co.slice(0, 2)}
//                 </div>
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <p style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{job.title}</p>
//                   <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>{job.co} · {job.sal}</p>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                   <span style={{ fontSize: 12, fontWeight: 800, color: '#10b981', background: 'rgba(16,185,129,0.12)', padding: '3px 10px', borderRadius: 8, whiteSpace: 'nowrap' }}>{job.match}%</span>
//                   <button style={{ fontSize: 11, fontWeight: 700, color: '#f0b429', background: 'rgba(240,180,41,0.1)', padding: '5px 12px', borderRadius: 8, border: '1px solid rgba(240,180,41,0.2)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
//                     Email →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Email Tab */}
//         {activeTab === 3 && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//             <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(240,180,41,0.08)', border: '1px solid rgba(240,180,41,0.15)', borderRadius: 12, padding: '10px 14px' }}>
//               <Briefcase size={14} color="#f0b429" />
//               <div>
//                 <p style={{ fontSize: 12, fontWeight: 700, color: '#f0b429', margin: 0 }}>Senior Frontend Engineer @ TechCorp</p>
//                 <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>London · £85k–£100k · Remote friendly</p>
//               </div>
//             </div>
//             <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: 16, border: '1px solid rgba(255,255,255,0.07)' }}>
//               <div style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
//                 <span style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Subject</span>
//                 <p style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', margin: '4px 0 0' }}>Application for Senior Frontend Engineer — M. Asim Maqsood</p>
//               </div>
//               <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.75, margin: 0 }}>
//                 Dear TechCorp Hiring Team,<br /><br />
//                 I'm writing to express my strong interest in the Senior Frontend Engineer position. With 4+ years of building production React/TypeScript applications and a proven track record delivering scalable UIs, I believe I'd be a strong fit for your team.<br /><br />
//                 My experience with AWS and Docker aligns directly with your infrastructure requirements...
//               </p>
//             </div>
//             <div style={{ display: 'flex', gap: 10 }}>
//               <button
//                 onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
//                 style={{
//                   flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
//                   padding: '11px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
//                   background: copied ? '#10b981' : '#f0b429',
//                   color: copied ? '#fff' : '#0f111b',
//                   border: 'none', transition: 'background 0.3s',
//                 }}>
//                 {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Email</>}
//               </button>
//               <button style={{
//                 flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
//                 padding: '11px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
//                 background: 'rgba(255,255,255,0.06)', color: '#e2e8f0',
//                 border: '1px solid rgba(255,255,255,0.1)',
//               }}>
//                 <ExternalLink size={14} /> Open in Mail
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════
//    MAIN PAGE
// ══════════════════════════════════════════════════════════════ */
// export default function LandingPage() {

//   const [heroVisible, setHeroVisible] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setHeroVisible(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   const features = [
//     {
//       icon: <Sparkles size={22} />,
//       color: '#f0b429',
//       bg: 'rgba(240,180,41,0.12)',
//       border: 'rgba(240,180,41,0.2)',
//       title: 'AI Post Generation',
//       body: 'Pick a category, describe your angle, and get a polished LinkedIn post in 1–2 seconds. Powered by Llama 3.3 70B — content that genuinely sounds like a human thought leader.',
//       detail: 'Technology · Business · Career · Marketing · Custom topics',
//     },
//     {
//       icon: <Calendar size={22} />,
//       color: '#6366f1',
//       bg: 'rgba(99,102,241,0.12)',
//       border: 'rgba(99,102,241,0.2)',
//       title: 'Recurring Schedules',
//       body: 'Create daily, weekly, monthly, or custom interval schedules. PostAgent generates fresh AI content and publishes to LinkedIn at exactly the right time — forever, no manual work.',
//       detail: 'Every day · Weekly · Monthly · Every N days',
//     },
//     {
//       icon: <Briefcase size={22} />,
//       color: '#10b981',
//       bg: 'rgba(16,185,129,0.12)',
//       border: 'rgba(16,185,129,0.2)',
//       title: 'CV-Based Job Finder',
//       body: 'Upload your CV and PostAgent extracts your complete profile — skills, experience timeline, education, certifications. Then searches live job boards and ranks the best matches.',
//       detail: 'PDF extraction · Live Adzuna search · Percentage match scores',
//     },
//     {
//       icon: <Mail size={22} />,
//       color: '#ec4899',
//       bg: 'rgba(236,72,153,0.12)',
//       border: 'rgba(236,72,153,0.2)',
//       title: 'AI Application Emails',
//       body: 'One click on any job listing generates a fully personalised application email. Your CV + the job description = a tailored email that reads like you spent an hour writing it.',
//       detail: 'Copy to clipboard · Open in mail client · Edit before sending',
//     },
//   ];

//   const steps = [
//     { n: '01', icon: <Linkedin size={20} />, color: '#0077b5', title: 'Connect LinkedIn', body: 'Authorise via OAuth in one click. Your credentials stay with LinkedIn — we only receive a posting token.' },
//     { n: '02', icon: <FileText size={20} />, color: '#6366f1', title: 'Upload Your CV', body: 'Drop your PDF. PostAgent extracts name, contact info, every job role, education entry, and your full skill set.' },
//     { n: '03', icon: <Calendar size={20} />, color: '#f0b429', title: 'Create a Schedule', body: 'Pick topics, frequency, and an optional description. The cron job takes it from here — posting forever.' },
//     { n: '04', icon: <Zap size={20} />, color: '#10b981', title: 'Grow on Autopilot', body: "New posts publish automatically. Browse matched jobs. One-click email per application. Career growth while you sleep." },
//   ];

//   return (
//     <div style={{ fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif", background: '#0a0c16', color: '#e2e8f0', minHeight: '100vh', overflowX: 'hidden' }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .fraunces { font-family: 'Fraunces', Georgia, serif; }

//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-12px) rotate(0.5deg); }
//           66% { transform: translateY(-6px) rotate(-0.5deg); }
//         }
//         @keyframes float-med {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-18px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.4; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.05); }
//         }
//         @keyframes ticker-slide {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }

//         .float-a { animation: float-slow 7s ease-in-out infinite; }
//         .float-b { animation: float-med 5s ease-in-out infinite 1s; }
//         .float-c { animation: float-slow 8s ease-in-out infinite 2s; }

//         .ticker-wrap { overflow: hidden; }
//         .ticker-inner {
//           display: flex; width: max-content;
//           animation: ticker-slide 30s linear infinite;
//         }

//         .gold-shimmer {
//           background: linear-gradient(90deg, #f0b429 0%, #fcd34d 40%, #f0b429 60%, #d97706 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: shimmer 3s linear infinite;
//         }

//         .feature-card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
//           cursor: default;
//         }
//         .feature-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 24px 60px rgba(0,0,0,0.4);
//         }

//         .btn-primary {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: #f0b429; color: #0a0c16;
//           padding: 15px 32px; border-radius: 14px;
//           font-size: 15px; font-weight: 800; text-decoration: none;
//           transition: all 0.2s ease;
//           box-shadow: 0 4px 20px rgba(240,180,41,0.35);
//           font-family: inherit;
//         }
//         .btn-primary:hover {
//           background: #fcd34d;
//           box-shadow: 0 8px 32px rgba(240,180,41,0.5);
//           transform: translateY(-2px);
//         }

//         .btn-ghost {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: rgba(255,255,255,0.06); color: #e2e8f0;
//           padding: 15px 32px; border-radius: 14px;
//           font-size: 15px; font-weight: 700; text-decoration: none;
//           border: 1px solid rgba(255,255,255,0.12);
//           transition: all 0.2s ease; font-family: inherit;
//         }
//         .btn-ghost:hover {
//           background: rgba(255,255,255,0.10);
//           border-color: rgba(255,255,255,0.2);
//           transform: translateY(-2px);
//         }

//         .nav-link {
//           color: #9ca3af; font-size: 14px; font-weight: 600;
//           text-decoration: none; transition: color 0.2s;
//           font-family: inherit;
//         }
//         .nav-link:hover { color: #e2e8f0; }

//         .section-label {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 11px; font-weight: 800; letter-spacing: 0.12em;
//           text-transform: uppercase; color: #f0b429;
//           background: rgba(240,180,41,0.1);
//           border: 1px solid rgba(240,180,41,0.2);
//           border-radius: 999px; padding: 5px 14px;
//           margin-bottom: 20px;
//         }

//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: #0a0c16; }
//         ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
//       `}</style>

//       {/* ── Ambient background glows ──── */}
//       <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
//         <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', animation: 'pulse-glow 8s ease-in-out infinite' }} />
//         <div style={{ position: 'absolute', top: '30%', right: '-15%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,180,41,0.06) 0%, transparent 70%)', animation: 'pulse-glow 10s ease-in-out infinite 3s' }} />
//         <div style={{ position: 'absolute', bottom: '-10%', left: '20%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', animation: 'pulse-glow 12s ease-in-out infinite 6s' }} />
//         {/* Grid overlay */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
//           backgroundSize: '60px 60px',
//         }} />
//       </div>

//       {/* ══════════ NAV ══════════ */}
//       <nav style={{
//         position: 'fixed', top: 0, width: '100%', zIndex: 100,
//         background: 'rgba(10,12,22,0.85)', backdropFilter: 'blur(24px)',
//         borderBottom: '1px solid rgba(255,255,255,0.06)',
//       }}>
//         <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//             <div style={{ width: 36, height: 36, background: '#f0b429', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Sparkles size={18} color="#0a0c16" />
//             </div>
//             <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>PostAgent</span>
//           </div>

//           <div style={{ display: 'flex', gap: 28 }}>
//             {['Features', 'How It Works', 'Testimonials'].map(l => (
//               <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="nav-link">{l}</a>
//             ))}
//           </div>

//           <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//             <Link href="/login" className="nav-link" style={{ padding: '8px 16px' }}>Sign in</Link>
//             <Link href="/register" className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}>
//               Get Started <ArrowRight size={14} />
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══════════ HERO ══════════ */}
//       <section style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
//         <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

//           {/* Left copy */}
//           <div>
//             <div style={{
//               opacity: heroVisible ? 1 : 0,
//               transform: heroVisible ? 'none' : 'translateY(20px)',
//               transition: 'all 0.7s ease 0.1s',
//             }}>
//               <span className="section-label">
//                 <Sparkles size={10} /> The Complete LinkedIn AI Manager
//               </span>
//             </div>

//             <h1 className="fraunces" style={{
//               fontSize: 'clamp(44px, 5.5vw, 72px)',
//               fontWeight: 900,
//               lineHeight: 1.04,
//               letterSpacing: '-0.03em',
//               marginBottom: 24,
//               opacity: heroVisible ? 1 : 0,
//               transform: heroVisible ? 'none' : 'translateY(24px)',
//               transition: 'all 0.7s ease 0.2s',
//             }}>
//               Post. Schedule.<br />
//               Find Jobs. Apply.<br />
//               <span className="gold-shimmer">All on autopilot.</span>
//             </h1>

//             <p style={{
//               fontSize: 18, color: '#94a3b8', lineHeight: 1.75,
//               marginBottom: 40, maxWidth: 480,
//               fontFamily: "'Fraunces', Georgia, serif",
//               fontStyle: 'italic', fontWeight: 300,
//               opacity: heroVisible ? 1 : 0,
//               transform: heroVisible ? 'none' : 'translateY(20px)',
//               transition: 'all 0.7s ease 0.3s',
//             }}>
//               AI generates your LinkedIn posts, schedules them automatically, finds jobs from your CV, and writes personalised application emails — one platform for your entire career.
//             </p>

//             <div style={{
//               display: 'flex', gap: 14, flexWrap: 'wrap',
//               opacity: heroVisible ? 1 : 0,
//               transform: heroVisible ? 'none' : 'translateY(16px)',
//               transition: 'all 0.7s ease 0.4s',
//             }}>
//               <Link href="/register" className="btn-primary">
//                 Start Free Today <ArrowRight size={16} />
//               </Link>
//               <a href="https://drive.google.com/file/d/12Xl64W_IydFs9hX_Op0p_jZa9IS0WpUO/view" target="_blank" className="btn-ghost">
//                 <Play size={14} /> Watch Demo
//               </a>
//             </div>

//             <div style={{
//               display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap',
//               opacity: heroVisible ? 1 : 0,
//               transition: 'all 0.7s ease 0.5s',
//             }}>
//               {['No credit card', 'Free to start', 'Cancel anytime'].map(t => (
//                 <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748b', fontWeight: 600 }}>
//                   <CheckCircle size={14} color="#10b981" /> {t}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right — product demo */}
//           <div style={{
//             opacity: heroVisible ? 1 : 0,
//             transform: heroVisible ? 'none' : 'translateY(32px)',
//             transition: 'all 0.8s ease 0.35s',
//           }}>
//             <ProductDemo />
//           </div>
//         </div>

//         {/* Floating stat badges */}
//         <div style={{ maxWidth: 1200, margin: '56px auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
//           {[
//             { icon: <Send size={18} color="#f0b429" />, val: 10000, suffix: '+', label: 'Posts Published', bg: 'rgba(240,180,41,0.08)', border: 'rgba(240,180,41,0.15)' },
//             { icon: <Users size={18} color="#6366f1" />, val: 500, suffix: '+', label: 'Active Users', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.15)' },
//             { icon: <Clock size={18} color="#10b981" />, val: 95, suffix: '%', label: 'Time Saved', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.15)' },
//             { icon: <TrendingUp size={18} color="#ec4899" />, val: 3, suffix: 'x', label: 'Engagement Boost', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.15)' },
//           ].map((stat, i) => (
//             <FadeUp key={i} delay={i * 80}>
//               <div style={{
//                 background: stat.bg,
//                 border: `1px solid ${stat.border}`,
//                 borderRadius: 16, padding: '20px 20px',
//                 display: 'flex', alignItems: 'center', gap: 12,
//               }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <div className="fraunces" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1, color: '#fff' }}>
//                     <AnimatedNumber target={stat.val} suffix={stat.suffix} />
//                   </div>
//                   <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginTop: 3 }}>{stat.label}</div>
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>
//       </section>

//       {/* ══════════ TICKER ══════════ */}
//       <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', padding: '14px 0', position: 'relative', zIndex: 1, margin: '16px 0' }}>
//         <div className="ticker-wrap">
//           <div className="ticker-inner">
//             {[
//               '✦ AI Post Generation', '✦ Auto-Scheduling', '✦ CV Analysis',
//               '✦ Job Matching', '✦ Application Emails', '✦ LinkedIn OAuth',
//               '✦ Recurring Automation', '✦ Profile Rating', '✦ One-Click Apply',
//               '✦ AI Post Generation', '✦ Auto-Scheduling', '✦ CV Analysis',
//               '✦ Job Matching', '✦ Application Emails', '✦ LinkedIn OAuth',
//               '✦ Recurring Automation', '✦ Profile Rating', '✦ One-Click Apply',
//             ].map((item, i) => (
//               <span key={i} style={{ fontSize: 12, fontWeight: 700, color: '#4b5563', padding: '0 32px', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{item}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ══════════ FEATURES ══════════ */}
//       <section id="features" style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
//         <div style={{ maxWidth: 1200, margin: '0 auto' }}>
//           <FadeUp>
//             <div style={{ textAlign: 'center', marginBottom: 64 }}>
//               <span className="section-label"><BarChart3 size={10} /> Four Powerful Tools</span>
//               <h2 className="fraunces" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
//                 Everything your LinkedIn<br />
//                 <span style={{ color: '#64748b', fontStyle: 'italic', fontWeight: 400 }}>career needs to grow</span>
//               </h2>
//             </div>
//           </FadeUp>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
//             {features.map((f, i) => (
//               <FadeUp key={i} delay={i * 80}>
//                 <div className="feature-card" style={{
//                   background: 'rgba(255,255,255,0.03)',
//                   border: `1px solid ${f.border}`,
//                   borderRadius: 24, padding: 36,
//                   position: 'relative', overflow: 'hidden',
//                 }}>
//                   {/* Bg glow */}
//                   <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: f.bg, filter: 'blur(40px)', pointerEvents: 'none' }} />
//                   <div style={{ position: 'relative' }}>
//                     <div style={{ width: 52, height: 52, borderRadius: 16, background: f.bg, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: 20 }}>
//                       {f.icon}
//                     </div>
//                     <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>{f.title}</h3>
//                     <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.75, marginBottom: 16, fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300 }}>
//                       {f.body}
//                     </p>
//                     <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
//                       {f.detail.split(' · ').map((d, j) => (
//                         <span key={j} style={{ fontSize: 11, fontWeight: 700, color: f.color, background: f.bg, border: `1px solid ${f.border}`, padding: '3px 10px', borderRadius: 999 }}>{d}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ HOW IT WORKS ══════════ */}
//       <section id="how-it-works" style={{ position: 'relative', zIndex: 1, padding: '96px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//           <FadeUp>
//             <div style={{ textAlign: 'center', marginBottom: 72 }}>
//               <span className="section-label"><Zap size={10} /> Simple Setup</span>
//               <h2 className="fraunces" style={{ fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
//                 Running in under<br />
//                 <span style={{ color: '#f0b429' }}>three minutes</span>
//               </h2>
//             </div>
//           </FadeUp>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
//             {/* Connector line */}
//             <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(240,180,41,0.3), rgba(99,102,241,0.3), rgba(240,180,41,0.3), transparent)', zIndex: 0 }} />

//             {steps.map((step, i) => (
//               <FadeUp key={i} delay={i * 100}>
//                 <div style={{ padding: '0 16px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
//                   <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#0a0c16', border: `2px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: step.color, position: 'relative' }}>
//                     <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: `1px solid ${step.color}40` }} />
//                     {step.icon}
//                   </div>
//                   <div style={{ fontSize: 11, fontWeight: 800, color: '#4b5563', letterSpacing: '0.1em', marginBottom: 10 }}>{step.n}</div>
//                   <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.01em' }}>{step.title}</h3>
//                   <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300 }}>{step.body}</p>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ JOB FINDER DEEP DIVE ══════════ */}
//       <section style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

//             {/* Left visual flow */}
//             <FadeUp>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//                 {/* CV extracted */}
//                 <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 20, padding: 20 }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
//                     <div style={{ width: 36, height: 36, background: 'rgba(99,102,241,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                       <FileText size={16} color="#6366f1" />
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <p style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', margin: 0 }}>Profile Extracted from CV</p>
//                       <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>M.Asim Maqsood · London, UK · 4 years exp</p>
//                     </div>
//                     <div style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 800, color: '#10b981' }}>84/100</div>
//                   </div>
//                   <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
//                     {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'NestJS', 'Redis'].map(s => (
//                       <span key={s} style={{ fontSize: 11, background: 'rgba(255,255,255,0.06)', color: '#94a3b8', padding: '3px 9px', borderRadius: 7, fontWeight: 600 }}>{s}</span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Arrow */}
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                   <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
//                     <ChevronDown size={14} />
//                   </div>
//                 </div>

//                 {/* Job matches */}
//                 <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 20, padding: 20 }}>
//                   <p style={{ fontSize: 12, fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>3 Live Job Matches</p>
//                   {[
//                     { title: 'Senior Frontend Engineer', co: 'TechCorp', sal: '£85k–£100k', match: 97 },
//                     { title: 'React Developer', co: 'FinStarter', sal: '£70k–£85k', match: 92 },
//                     { title: 'Full Stack Engineer', co: 'ScaleUp', sal: '£65k–£80k', match: 88 },
//                   ].map((j, i) => (
//                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
//                       <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#6b7280' }}>{j.co.slice(0,2)}</div>
//                       <div style={{ flex: 1 }}>
//                         <p style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', margin: 0 }}>{j.title}</p>
//                         <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>{j.co} · {j.sal}</p>
//                       </div>
//                       <span style={{ fontSize: 12, fontWeight: 800, color: '#10b981' }}>{j.match}%</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Arrow */}
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                   <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
//                     <ChevronDown size={14} />
//                   </div>
//                 </div>

//                 {/* Email ready */}
//                 <div style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.2)', borderRadius: 20, padding: 20 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                     <p style={{ fontSize: 12, fontWeight: 800, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Email Generated</p>
//                     <span style={{ fontSize: 11, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.2)', color: '#ec4899', padding: '2px 10px', borderRadius: 999, fontWeight: 700 }}>✓ Personalised</span>
//                   </div>
//                   <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: 14, marginBottom: 12 }}>
//                     <p style={{ fontSize: 12, fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>Subject: Senior Frontend Engineer Application — M. Asim</p>
//                     <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65 }}>Dear TechCorp Hiring Team, I'm writing to express my strong interest in the Senior Frontend Engineer position. My 4+ years of React/TypeScript experience delivering scalable, production-grade UIs...</p>
//                   </div>
//                   <div style={{ display: 'flex', gap: 8 }}>
//                     <button style={{ flex: 1, padding: '10px', background: '#ec4899', color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
//                       <Copy size={12} /> Copy Email
//                     </button>
//                     <button style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.06)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
//                       <ExternalLink size={12} /> Open in Mail
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </FadeUp>

//             {/* Right copy */}
//             <FadeUp delay={150}>
//               <div>
//                 <span className="section-label"><Search size={10} /> Job Finder</span>
//                 <h2 className="fraunces" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
//                   Upload CV.<br />
//                   Get matched.<br />
//                   <span style={{ color: '#ec4899' }}>Apply instantly.</span>
//                 </h2>
//                 <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, marginBottom: 36, fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300 }}>
//                   PostAgent reads every line of your CV — extracts your name, contact info, every work experience, education entry, and all your technical skills. Then it searches live job boards and ranks roles by how well your actual profile matches.
//                 </p>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//                   {[
//                     { c: '#6366f1', icon: <FileText size={15} />, t: 'Full CV text extraction', d: 'Name, phone, location, job title, all experience, education, certifications' },
//                     { c: '#10b981', icon: <Search size={15} />, t: 'Live job matching', d: 'Searches real listings and scores each role against your extracted skills profile' },
//                     { c: '#f0b429', icon: <BarChart3 size={15} />, t: 'CV quality rating', d: 'Scores your CV 0–100 with five specific, actionable improvement tips' },
//                     { c: '#ec4899', icon: <Mail size={15} />, t: 'Personalised emails', d: 'One click generates a unique email per job — copy or open directly in your mail app' },
//                   ].map((item, i) => (
//                     <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
//                       <div style={{ width: 36, height: 36, borderRadius: 12, background: `rgba(${item.c === '#6366f1' ? '99,102,241' : item.c === '#10b981' ? '16,185,129' : item.c === '#f0b429' ? '240,180,41' : '236,72,153'},0.12)`, color: item.c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
//                         {item.icon}
//                       </div>
//                       <div>
//                         <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{item.t}</p>
//                         <p style={{ fontSize: 13, color: '#64748b' }}>{item.d}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ marginTop: 36 }}>
//                   <Link href="/register" className="btn-primary">
//                     Try Job Finder Free <ArrowRight size={15} />
//                   </Link>
//                 </div>
//               </div>
//             </FadeUp>
//           </div>
//         </div>
//       </section>

//       {/* ══════════ TESTIMONIALS ══════════ */}
//       <section id="testimonials" style={{ position: 'relative', zIndex: 1, padding: '96px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//           <FadeUp>
//             <div style={{ textAlign: 'center', marginBottom: 60 }}>
//               <span className="section-label"><Star size={10} /> Testimonials</span>
//               <h2 className="fraunces" style={{ fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, letterSpacing: '-0.03em' }}>
//                 Real results from<br />
//                 <span style={{ color: '#f0b429', fontStyle: 'italic', fontWeight: 400 }}>real professionals</span>
//               </h2>
//             </div>
//           </FadeUp>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
//             {[
//               {
//                 quote: "PostAgent completely changed my LinkedIn game. I went from posting twice a month to daily — profile views tripled and recruiters started reaching out instead of me chasing them.",
//                 name: 'Sarah Johnson', role: 'Marketing Director', color: '#f0b429',
//                 stats: [{ icon: <Eye size={12} />, val: '3x views' }, { icon: <MessageSquare size={12} />, val: '+12 DMs/wk' }],
//               },
//               {
//                 quote: "The job matching is genuinely impressive. It read my CV, matched me to 3 senior roles perfectly, wrote the emails, and I got interviews from 2 of them. I got my current job this way.",
//                 name: 'M. Asim Maqsood', role: 'Senior Software Engineer', color: '#6366f1',
//                 stats: [{ icon: <Briefcase size={12} />, val: '2 interviews' }, { icon: <Check size={12} />, val: '1 offer' }],
//               },
//               {
//                 quote: "I save 10+ hours a week. The schedule runs itself — I set it up once and 70+ posts have gone live. My network grew from 400 to 2,100 connections in 3 months. Insane ROI.",
//                 name: 'Emily Rodriguez', role: 'Business Coach', color: '#10b981',
//                 stats: [{ icon: <Users size={12} />, val: '+1700 connections' }, { icon: <TrendingUp size={12} />, val: '400% growth' }],
//               },
//             ].map((t, i) => (
//               <FadeUp key={i} delay={i * 80}>
//                 <div style={{
//                   background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
//                   borderRadius: 24, padding: 32, height: '100%',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
//                   <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
//                     {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#f0b429" color="#f0b429" />)}
//                   </div>
//                   <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.75, marginBottom: 24, fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300 }}>
//                     "{t.quote}"
//                   </p>
//                   <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
//                     {t.stats.map((s, j) => (
//                       <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: t.color, background: `rgba(${t.color === '#f0b429' ? '240,180,41' : t.color === '#6366f1' ? '99,102,241' : '16,185,129'},0.1)`, padding: '4px 10px', borderRadius: 999 }}>
//                         {s.icon} {s.val}
//                       </div>
//                     ))}
//                   </div>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                     <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${t.color}22`, border: `2px solid ${t.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: t.color }}>
//                       {t.name[0]}
//                     </div>
//                     <div>
//                       <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', margin: '0 0 2px' }}>{t.name}</p>
//                       <p style={{ fontSize: 12, color: '#64748b', margin: 0, fontWeight: 600 }}>{t.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeUp>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ CTA ══════════ */}
//       <section style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
//         <div style={{ maxWidth: 900, margin: '0 auto' }}>
//           <FadeUp>
//             <div style={{
//               background: 'linear-gradient(135deg, rgba(240,180,41,0.08) 0%, rgba(99,102,241,0.08) 50%, rgba(16,185,129,0.06) 100%)',
//               border: '1px solid rgba(240,180,41,0.15)',
//               borderRadius: 32, padding: '72px 64px', textAlign: 'center',
//               position: 'relative', overflow: 'hidden',
//             }}>
//               {/* Corner decorations */}
//               <div style={{ position: 'absolute', top: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(240,180,41,0.06)', filter: 'blur(30px)' }} />
//               <div style={{ position: 'absolute', bottom: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(99,102,241,0.06)', filter: 'blur(30px)' }} />

//               <div style={{ position: 'relative' }}>
//                 <span className="section-label" style={{ marginBottom: 28 }}><Zap size={10} /> Free to start · No credit card</span>
//                 <h2 className="fraunces" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04, marginBottom: 20 }}>
//                   Take control of your<br />
//                   <span className="gold-shimmer">LinkedIn career</span>
//                 </h2>
//                 <p style={{ fontSize: 18, color: '#64748b', marginBottom: 44, maxWidth: 560, margin: '0 auto 44px', fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7 }}>
//                   Join 500+ professionals who post consistently, get found by recruiters, and land interviews — all on autopilot.
//                 </p>
//                 <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
//                   <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: '17px 40px' }}>
//                     Start Free Today <ArrowRight size={18} />
//                   </Link>
//                   <a href="https://drive.google.com/file/d/12Xl64W_IydFs9hX_Op0p_jZa9IS0WpUO/view" target="_blank" className="btn-ghost" style={{ fontSize: 16, padding: '17px 36px' }}>
//                     <Play size={16} /> Watch Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </FadeUp>
//         </div>
//       </section>

//       {/* ══════════ FOOTER ══════════ */}
//       <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 24px 32px', background: 'rgba(0,0,0,0.3)' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
//             <div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
//                 <div style={{ width: 34, height: 34, background: '#f0b429', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <Sparkles size={16} color="#0a0c16" />
//                 </div>
//                 <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>PostAgent</span>
//               </div>
//               <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7, maxWidth: 240 }}>
//                 The complete LinkedIn AI Manager. Post, schedule, find jobs, and apply — all from one powerful dashboard.
//               </p>
//             </div>
//             {[
//               { title: 'Product', links: ['AI Posting', 'Smart Scheduling', 'Job Finder', 'Email Generator'] },
//               { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
//               { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security'] },
//             ].map((col, i) => (
//               <div key={i}>
//                 <h4 style={{ fontSize: 12, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>{col.title}</h4>
//                 <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
//                   {col.links.map((link, j) => (
//                     <li key={j}>
//                       <a href="#" style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
//                         onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
//                         onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}>
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <p style={{ fontSize: 13, color: '#374151' }}>© 2026 PostAgent. All rights reserved.</p>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#374151' }}>
//               <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
//               <span>Posting live 24/7 for 500+ users</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





'use client';

import Link from 'next/link';
import { ArrowRight, Check, Clock, Sparkles, TrendingUp, Calendar, Zap, Briefcase, Mail, Target, RefreshCw, FileText, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Intersection Observer for fade-in animations
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections((prev) => new Set(prev).add(el.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white/80 backdrop-blur-md'
        } border-b border-gray-200`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn AI Manager
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4" />
            AI-Powered LinkedIn Automation + Job Search
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight animate-fade-in-up">
            Your Complete LinkedIn<br />AI Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Automate posts, schedule content, and discover perfect job matches with AI-generated applications. 
            Your all-in-one LinkedIn growth platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Link 
              href="/register" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href='https://drive.google.com/file/d/12Xl64W_IydFs9hX_Op0p_jZa9IS0WpUO/view' target="_blank">
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:scale-105 transition-all">
                Watch Demo
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Post Automation
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Job Matching
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              AI Email Generation
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 fade-in-section" id="stats">
        <div className={`container mx-auto px-4 transition-all duration-1000 ${visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2 counter">10k+</div>
              <div className="text-gray-600">Posts Automated</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-purple-600 mb-2">2k+</div>
              <div className="text-gray-600">Jobs Matched</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Prop */}
      <section className="py-20 px-4 fade-in-section" id="value-prop">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('value-prop') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Automation */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Content Automation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>AI generates professional posts in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Schedule posts daily, weekly, or custom intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Auto-publish without daily login</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Multiple categories: Tech, Business, Career</span>
                </li>
              </ul>
            </div>

            {/* Job Search */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Smart Job Matching</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>AI analyzes your profile and finds perfect matches</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Generate custom cover letters for each job</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>One-click copy professional emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Track applications and follow-ups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white fade-in-section" id="features">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Powerful AI tools to dominate LinkedIn and land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards with hover animations */}
            {[
              {
                icon: Sparkles,
                title: 'AI Post Generation',
                desc: 'Generate engaging LinkedIn posts in seconds with advanced AI',
                gradient: 'from-blue-500 to-purple-500',
              },
              {
                icon: Calendar,
                title: 'Smart Scheduling',
                desc: 'Schedule posts for optimal times and let AI handle publishing',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: RefreshCw,
                title: 'Recurring Automation',
                desc: 'Set it once, posts run automatically forever',
                gradient: 'from-pink-500 to-red-500',
              },
              {
                icon: Search,
                title: 'Job Discovery',
                desc: 'AI finds jobs that match your skills and experience',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                icon: Mail,
                title: 'Email Generation',
                desc: 'Generate professional cover letters and emails for each job',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: Target,
                title: 'Profile Matching',
                desc: 'AI analyzes your profile to find the perfect opportunities',
                gradient: 'from-orange-500 to-amber-500',
              },
              {
                icon: FileText,
                title: 'Application Tracking',
                desc: 'Keep track of all your applications in one place',
                gradient: 'from-indigo-500 to-blue-500',
              },
              {
                icon: TrendingUp,
                title: 'Analytics Dashboard',
                desc: 'Track post engagement and application success rates',
                gradient: 'from-violet-500 to-purple-500',
              },
              {
                icon: Zap,
                title: 'Instant Publishing',
                desc: 'One-click publishing to LinkedIn, no delays',
                gradient: 'from-cyan-500 to-blue-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 fade-in-section" id="how-it-works">
        <div className={`container mx-auto max-w-5xl transition-all duration-1000 ${visibleSections.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From setup to success in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Connect LinkedIn',
                desc: 'Securely link your LinkedIn account with OAuth authentication',
                gradient: 'from-blue-600 to-purple-600',
              },
              {
                step: 2,
                title: 'Set Your Preferences',
                desc: 'Choose posting schedule, job preferences, and AI settings',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                step: 3,
                title: 'Watch the Magic',
                desc: 'AI posts content and finds jobs while you focus on what matters',
                gradient: 'from-pink-600 to-red-600',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 animate-pulse-slow`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Feature Highlight */}
      <section className="py-20 px-4 bg-white fade-in-section" id="job-feature">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('job-feature') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border border-green-200">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-bold text-lg">Senior Software Engineer</div>
                      <div className="text-sm text-gray-500">Tech Corp • $120k-150k</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">95% Match</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Remote</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Generate Application Email
                  </button>
                </div>
                <div className="text-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 inline mr-1" />
                  AI-Generated Cover Letter Ready
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Land Your Dream Job Faster
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI analyzes your profile and finds the perfect job matches. Get personalized application emails for every opportunity.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Smart Job Matching</h4>
                    <p className="text-gray-600">AI finds jobs that perfectly match your skills and experience</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Custom Emails</h4>
                    <p className="text-gray-600">Generate professional cover letters tailored to each position</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">One-Click Copy</h4>
                    <p className="text-gray-600">Copy perfectly formatted emails and send instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 fade-in-section" id="testimonials">
        <div className={`container mx-auto max-w-5xl transition-all duration-1000 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Success Stories from Our Users
            </h2>
            <p className="text-xl text-gray-600">
              See how LinkedIn AI Manager transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Got my dream job! The AI-generated email was perfect. I applied to 50+ jobs in a week without burnout.",
                name: "Sarah Johnson",
                role: "Now at Google",
                color: "from-blue-500 to-purple-500",
              },
              {
                text: "My LinkedIn engagement tripled AND I landed 3 interviews. This platform is a game-changer for job seekers.",
                name: "Michael Chen",
                role: "Software Engineer",
                color: "from-green-500 to-emerald-500",
              },
              {
                text: "Automated my posting and found my ideal role in 2 weeks. The email templates saved me hours!",
                name: "Emily Rodriguez",
                role: "Marketing Manager",
                color: "from-orange-500 to-red-500",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full`}></div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your LinkedIn?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ professionals automating their success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register" 
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm opacity-75">No credit card • 14-day trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">LinkedIn AI Manager</span>
              </div>
              <p className="text-sm">
                AI-powered automation for posts, scheduling, and job search.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="https://stayeasy.online/api/docs" target="_blank" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 LinkedIn AI Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .fade-in-section {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
      `}</style>
    </div>
  );
}