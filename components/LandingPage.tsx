'use client';

import Link from 'next/link';
import { ArrowRight, Check, Clock, Sparkles, TrendingUp, Calendar, Zap, Users, BarChart3, RefreshCw } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PostAgent
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered LinkedIn Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            LinkedIn Posting on<br />Autopilot
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Generate and schedule engaging LinkedIn posts automatically. 
            Grow your presence while you sleep with AI-powered content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/register" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Start Free 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Cancel anytime
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Posts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
              <div className="text-gray-600">Engagement Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Tired of the LinkedIn Grind?
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                Spending hours brainstorming post ideas every week
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                Forgetting to post consistently and losing engagement
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                Watching competitors grow while your profile stays stagnant
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                Missing out on opportunities because of low visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything You Need to Dominate LinkedIn
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that work together to grow your presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI Content Generation</h3>
              <p className="text-gray-600">
                Generate engaging, professional LinkedIn posts in seconds. Our AI understands your industry and creates relevant content.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Scheduling</h3>
              <p className="text-gray-600">
                Schedule posts daily, weekly, or monthly. Set it once and let PostAgent handle the rest automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Recurring Automation</h3>
              <p className="text-gray-600">
                Create schedules that run automatically. Post every day, week, or custom interval without lifting a finger.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multiple Categories</h3>
              <p className="text-gray-600">
                Choose from Technology, Business, Career, Marketing and more. Mix categories for diverse content.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Publishing</h3>
              <p className="text-gray-600">
                One-click publishing to LinkedIn. Review AI-generated content and publish immediately or schedule for later.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Time Zone Smart</h3>
              <p className="text-gray-600">
                Posts automatically adjust to your timezone. Schedule in your local time, publish at the perfect moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Simple Setup, Powerful Results
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Connect LinkedIn</h3>
                <p className="text-gray-600">
                  Link your LinkedIn account securely with one click. OAuth authentication keeps your data safe.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Create Schedule</h3>
                <p className="text-gray-600">
                  Choose your posting frequency and categories. Set it to daily, weekly, or custom intervals.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Watch It Grow</h3>
                <p className="text-gray-600">
                  Sit back and relax. PostAgent generates and publishes content automatically. Watch your engagement soar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why PostAgent is Different
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most tools require daily effort. PostAgent runs on autopilot.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">True Automation</h4>
                    <p className="text-gray-600">Set once, run forever. No daily logins required.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Quality Content</h4>
                    <p className="text-gray-600">AI generates professional, engaging posts that sound human.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Proven Growth</h4>
                    <p className="text-gray-600">Users see 3x engagement increase within first month.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Save 10+ Hours Weekly</h4>
                    <p className="text-gray-600">Eliminate time spent on content creation and scheduling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 border border-blue-200">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                    <div>
                      <div className="font-bold">Your Name</div>
                      <div className="text-sm text-gray-500">Just now</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Excited to share insights on the future of AI in business automation. 
                    The landscape is evolving rapidly... 🚀
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">#AI</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">#Tech</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Generated & Posted Automatically
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Join Hundreds of Growing Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "PostAgent saved me 10+ hours every week. My LinkedIn engagement is up 300% and I haven't manually posted in months!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-sm">Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Marketing Director</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The AI content is incredibly good. People think I'm spending hours crafting posts. It's my secret weapon for personal branding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-sm">Michael Chen</div>
                  <div className="text-xs text-gray-500">Tech Entrepreneur</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Game changer! I went from 0 posts to consistent daily content. Now getting inbound leads every week. Best investment ever."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-sm">Emily Rodriguez</div>
                  <div className="text-xs text-gray-500">Business Coach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your LinkedIn Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ professionals who automate their LinkedIn success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register" 
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm opacity-75">14-day free trial • No credit card required</p>
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
                <span className="text-white font-bold">PostAgent</span>
              </div>
              <p className="text-sm">
                AI-powered LinkedIn automation for modern professionals.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
                <li><a href="#" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 PostAgent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}