import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Users, 
  Droplet, 
  BookOpen, 
  Sprout, 
  ShieldCheck, 
  Award, 
  Mail, 
  Send, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ExternalLink, 
  Target, 
  DollarSign 
} from 'lucide-react';

function Linkedin({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function Twitter({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
}

function Github({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

const INITIATIVES_DATA = [
  {
    id: 1,
    title: "Clean Water Access Initiative",
    category: "Environment",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
    description: "Installing sustainable solar-powered clean water filtration systems in rural off-grid villages.",
    raised: 42000,
    goal: 50000,
    beneficiaries: "12,500 people"
  },
  {
    id: 2,
    title: "Youth Tech Literacy Program",
    category: "Education",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    description: "Providing refurbished laptops and coding bootcamps to underprivileged public school students.",
    raised: 31500,
    goal: 40000,
    beneficiaries: "850 students"
  },
  {
    id: 3,
    title: "Sustainable Agriculture Hub",
    category: "Community",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb1475a?auto=format&fit=crop&q=80&w=800",
    description: "Empowering smallholder farmers with regenerative agriculture toolkits and drought-resistant seeds.",
    raised: 18900,
    goal: 25000,
    beneficiaries: "320 farming families"
  }
];

const IMPACT_STATS = [
  { label: "Lives Impacted", value: 15400, prefix: "", suffix: "+" },
  { label: "Community Projects", value: 58, prefix: "", suffix: "" },
  { label: "Total Raised", value: 1.2, prefix: "$", suffix: "M+" },
  { label: "Global Volunteers", value: 1250, prefix: "", suffix: "+" }
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The clean water well built in our village changed everything. Children no longer walk miles for water and can focus on attending school regularly.",
    name: "Aminata Diallo",
    role: "Community Leader, Sub-Saharan Rural Project",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "Partnering with this foundation allowed us to scale our digital education bootcamps. Transparency and empathy are in everything they do.",
    name: "Carlos Mendoza",
    role: "Educational Partner & STEM Mentor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "Knowing exactly where every donated dollar goes gives me complete peace of mind. Truly a model for modern non-profits.",
    name: "Elena Rostova",
    role: "Monthly Recurring Donor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

const MILESTONES = [
  {
    year: "2018",
    title: "The Spark of Hope",
    description: "Started as a small community initiative after witnessing severe resource inequality during a volunteer trip abroad."
  },
  {
    year: "2020",
    title: "Official Non-Profit Registration",
    description: "Incorporated 501(c)(3) status and launched our flagship clean water accessibility program."
  },
  {
    year: "2022",
    title: "Expanding to Tech & Education",
    description: "Partnered with global tech companies to bring computer literacy to over 20 underfunded school districts."
  },
  {
    year: "2025",
    title: "$1M+ Raised & 15k+ Lives Impacted",
    description: "Achieved major milestone through sustainable community partnerships and transparent donor accountability."
  }
];

const VALUES = [
  { name: "Radical Transparency", desc: "Open financial reporting and direct tracking for every dollar donated.", icon: ShieldCheck },
  { name: "Empathy-Driven Action", desc: "Listening first to community needs before building sustainable solutions.", icon: Heart },
  { name: "Long-Term Sustainability", desc: "Creating local capacity so projects remain self-sufficient after launch.", icon: Target },
  { name: "Global Collaboration", desc: "Uniting donors, local leaders, and experts across borders.", icon: Globe }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about'
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [celebrationData, setCelebrationData] = useState(null);
  const [notification, setNotification] = useState(null);

  // Sync Dark Mode with CSS standard class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenDonate={() => setIsDonateModalOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="pt-20">
        {currentPage === 'home' ? (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            onOpenDonate={() => setIsDonateModalOpen(true)} 
          />
        ) : (
          <AboutPage showToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Donation Flow Modals */}
      {isDonateModalOpen && (
        <DonationModal 
          onClose={() => setIsDonateModalOpen(false)}
          onSuccess={(data) => {
            setIsDonateModalOpen(false);
            setCelebrationData(data);
          }}
          darkMode={darkMode}
        />
      )}

      {/* Celebratory Success Pop-up Modal */}
      {celebrationData && (
        <DonationCelebrationModal 
          data={celebrationData}
          onClose={() => setCelebrationData(null)}
          darkMode={darkMode}
          showToast={showToast}
        />
      )}
    </div>
  );
}

function Navigation({ currentPage, setCurrentPage, darkMode, setDarkMode, isMobileMenuOpen, setIsMobileMenuOpen, onOpenDonate }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}
          className="flex items-center gap-3 focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div className="text-left">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              HopeHorizon
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Global Foundation
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}
            className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${
              currentPage === 'home' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 pb-1' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Homepage
          </button>
          
          <button 
            onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }}
            className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${
              currentPage === 'about' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 pb-1' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            About Founder
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>

          {/* Action CTA Button */}
          <button
            onClick={onOpenDonate}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current text-white/80" />
            Donate Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm ${
              currentPage === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Homepage
          </button>
          
          <button
            onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm ${
              currentPage === 'about' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            About Founder
          </button>

          <button
            onClick={() => { setIsMobileMenuOpen(false); onOpenDonate(); }}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current" />
            Donate Now
          </button>
        </div>
      )}
    </nav>
  );
}

function HomePage({ setCurrentPage, onOpenDonate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filteredInitiatives = activeCategory === 'All' 
    ? INITIATIVES_DATA 
    : INITIATIVES_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-28">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent & Sustainable Non-Profit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Communities. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Transforming Lives Worldwide.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We bridge resource gaps through community-driven initiatives in clean water, education, and sustainable agriculture. 100% committed to real impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5 fill-current" />
                Make a Donation
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                Meet the Founder
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>501(c)(3) Tax-Deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Platinum Transparency Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column Featured Image Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
                alt="Children smiling at community center" 
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Latest Milestone</span>
                  <p className="text-lg font-bold">New Clean Water Well Launched in Kenya</p>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Active Volunteers</p>
                <p className="text-lg font-bold">1,250+ Worldwide</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. IMPACT STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                </p>
                <p className="text-xs sm:text-sm font-medium text-emerald-100 uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR INITIATIVES & PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Our Focus Areas</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Current High-Impact Programs</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Every project is carefully designed with community feedback to ensure long-term self-sufficiency and tangible change.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['All', 'Environment', 'Education', 'Community'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInitiatives.map((item) => {
            const IconComp = item.icon;
            const progressPercent = Math.round((item.raised / item.goal) * 100);

            return (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image & Category Tag */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Funding Progress Bar */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-emerald-600 dark:text-emerald-400">${item.raised.toLocaleString()} Raised</span>
                        <span className="text-slate-500">Goal: ${item.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-emerald-500 h-full rounded-full transition-all duration-1000" 
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Beneficiaries: <strong className="text-slate-700 dark:text-slate-300">{item.beneficiaries}</strong>
                  </span>
                  <button 
                    onClick={onOpenDonate}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Support <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. STORIES OF CHANGE / TESTIMONIALS */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Real Stories</h2>
            <h3 className="text-3xl font-extrabold">Voices from the Field</h3>
          </div>

          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-emerald-500">
              <img 
                src={TESTIMONIALS[activeTestimonial].avatar} 
                alt={TESTIMONIALS[activeTestimonial].name} 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-lg sm:text-xl italic text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>

            <div>
              <p className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                {TESTIMONIALS[activeTestimonial].name}
              </p>
              <p className="text-xs text-slate-500">
                {TESTIMONIALS[activeTestimonial].role}
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-400">
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 to-emerald-600 rounded-3xl p-10 sm:p-16 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Ready to Make a Difference?</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg">
            Whether through financial contributions, volunteering, or spreading the word, your involvement changes lives today.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenDonate}
              className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 shadow-lg transition-transform hover:scale-105"
            >
              Support Our Work
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

function AboutPage({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmitContact = (e) => {
    e.preventDefault();
    showToast("Message sent! Thank you for reaching out to Chogs.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. FOUNDER HERO BIO */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Founder Portrait" 
                  className="w-full h-[460px] object-cover object-top"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Founder & Executive Director</p>
                  <p className="text-sm font-bold">Frederick Charles L. Castro <span className="text-emerald-600 dark:text-emerald-400 font-normal">("Chogs")</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Overview */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Meet The Founder</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Driven by Empathy, <br />
              <span className="text-emerald-600 dark:text-emerald-400">Committed to Impact.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I’m Frederick Charles L. Castro, but you can call me Chogs. Over the last decade, I’ve dedicated my life to building sustainable solutions for communities facing acute clean water shortages and educational barriers.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              My philosophy is simple: non-profit work shouldn’t just be charity; it should be direct empowerment. We build local capacity so communities can thrive independently.
            </p>

            {/* Core Values Quick Quote */}
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 text-left">
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 italic">
                "Real change happens when we stop treating beneficiaries as passive recipients and start treating them as leaders of their own future."
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex justify-center lg:justify-start gap-4">
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TIMELINE & STORY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">My Journey</h2>
          <h3 className="text-3xl font-extrabold">How HopeHorizon Came to Life</h3>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-10">
          {MILESTONES.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Year Label */}
              <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white dark:ring-slate-950">
                ✓
              </div>
              <div className="hidden sm:block absolute -left-32 top-0 text-right w-24 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {item.year}
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="sm:hidden text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">{item.year}</span>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VALUES & SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Leadership Pillars</h2>
          <h3 className="text-3xl font-extrabold">Values That Guide Our Mission</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 transition-all space-y-3">
                <div className="p-3 w-fit rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">{val.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. GET IN TOUCH / CONTACT FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Connect With Chogs Directly</h3>
            <p className="text-xs text-slate-500">Have a partnership idea, speaking inquiry, or question? Send a message!</p>
          </div>

          <form onSubmit={handleSubmitContact} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="jane@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Message</label>
              <textarea 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Write your message here..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

function DonationModal({ onClose, onSuccess, darkMode }) {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
  const [step, setStep] = useState('select'); // 'select' | 'confirm'

  const finalAmount = Number(customAmount || amount);

  const getImpactMessage = (amt) => {
    if (amt >= 100) return "Equips an entire village school with tech kits & clean water filtration filters.";
    if (amt >= 50) return "Provides clean drinking water for a family of 5 for six full months.";
    if (amt >= 25) return "Supplies school backpacks, learning stationery, and textbooks for 3 children.";
    return "Provides vital emergency seeds and organic farming toolkits for smallholder farmers.";
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) return;
    setStep('confirm');
  };

  const handleFinalConfirm = () => {
    const referenceId = "HH-" + Math.floor(100000 + Math.random() * 900000);
    onSuccess({
      amount: finalAmount,
      frequency,
      referenceId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      impactMessage: getImpactMessage(finalAmount)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className={`w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all animate-pop-in ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-emerald-600">
            <Heart className="w-5 h-5 fill-current" />
            <h3 className="font-bold text-lg">
              {step === 'select' ? 'Support HopeHorizon' : 'Confirm Your Gift'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'select' ? (
          <form onSubmit={handleReview} className="space-y-6 pt-6">
            
            {/* Frequency Toggle */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  frequency === 'one-time' ? 'bg-white dark:bg-slate-900 shadow text-emerald-600' : 'text-slate-500'
                }`}
              >
                One-Time
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  frequency === 'monthly' ? 'bg-white dark:bg-slate-900 shadow text-emerald-600' : 'text-slate-500'
                }`}
              >
                Give Monthly
              </button>
            </div>

            {/* Preset Amounts */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Select Amount (USD)</label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => { setAmount(val); setCustomAmount(''); }}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      amount === val && !customAmount 
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' 
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <input 
                type="number"
                min="1"
                placeholder="Or enter custom amount ($)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Impact Live Preview */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
              <span>{getImpactMessage(finalAmount)}</span>
            </div>

            {/* Continue to Review Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Review Donation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-center text-slate-400">
              🔒 100% tax-deductible under 501(c)(3). You will confirm details next.
            </p>
          </form>
        ) : (
          /* Step 2: Confirmation Screen */
          <div className="space-y-6 pt-6">
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Selected Donation</span>
                <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  ${finalAmount.toLocaleString()}
                </p>
                <div className="inline-block mt-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  {frequency === 'monthly' ? 'Monthly Impact Partner' : 'One-Time Contribution'}
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700/80 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Designated Fund:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">Community General Fund</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Tax Status:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">501(c)(3) Tax Deductible</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Processing Fee:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">$0.00 (Covered by Grants)</span>
                </div>
              </div>

              <div className="bg-emerald-100/60 dark:bg-emerald-950/60 rounded-xl p-3 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{getImpactMessage(finalAmount)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleFinalConfirm}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4 fill-current text-white/90" />
                <span>Confirm & Complete Donation ✨</span>
              </button>

              <button
                type="button"
                onClick={() => setStep('select')}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                ← Back to Edit Amount
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DonationCelebrationModal({ data, onClose, darkMode, showToast }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `I just supported HopeHorizon Foundation with a $${data.amount} donation to bring clean water and education to communities worldwide! 🌍✨`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    showToast("Share message copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  const confettiPieces = [
    { bg: 'bg-emerald-400', left: '10%', delay: '0s', size: 'w-2 h-3' },
    { bg: 'bg-amber-400', left: '25%', delay: '0.4s', size: 'w-3 h-2' },
    { bg: 'bg-teal-400', left: '45%', delay: '0.8s', size: 'w-2 h-2 rounded-full' },
    { bg: 'bg-rose-400', left: '65%', delay: '0.2s', size: 'w-2.5 h-3.5' },
    { bg: 'bg-blue-400', left: '80%', delay: '0.6s', size: 'w-3 h-2' },
    { bg: 'bg-amber-300', left: '92%', delay: '1s', size: 'w-2 h-2 rounded-full' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-hidden">
      
      {/* Floating Confetti Particle Sprinkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiPieces.map((p, i) => (
          <span 
            key={i} 
            className={`absolute top-0 ${p.bg} ${p.size} animate-confetti rounded-sm`} 
            style={{ left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all animate-pop-in text-center space-y-6 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Hero Icon */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-400 to-teal-400 blur-xl opacity-60 animate-pulse"></div>
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 transform hover:scale-105 transition-transform">
            <Award className="w-10 h-10 animate-bounce" />
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Impact Champion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            You're Making History! 🎉
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Your generous gift creates direct, sustainable change for families in need. Thank you for your kindness!
          </p>
        </div>

        {/* Digital Impact Donor Card */}
        <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-amber-500/10 border border-emerald-500/30 rounded-2xl p-5 text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 dark:text-emerald-400">
                Official Donor Receipt
              </span>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                ${data.amount.toLocaleString()} <span className="text-xs font-normal text-slate-500">USD</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-mono">ID: {data.referenceId}</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {data.frequency === 'monthly' ? 'Monthly Partner' : 'One-Time Supporter'}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Tangible Community Outcome:</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "{data.impactMessage}"
            </p>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
            <span>📅 {data.date}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Tax Deductible 501(c)(3)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleShare}
            className="flex-1 py-3 px-4 rounded-xl border border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {copied ? 'Copied Message!' : 'Share Impact'}
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore More Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">HopeHorizon</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            HopeHorizon is a registered 501(c)(3) global foundation committed to transparent, community-led initiatives in clean water, education, and sustainable agriculture.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }} className="hover:text-emerald-400 transition-colors">
                Homepage
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }} className="hover:text-emerald-400 transition-colors">
                About the Founder
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect</h4>
          <div className="flex gap-3 text-slate-400">
            <a href="#" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] text-slate-500 pt-2">
            © {new Date().getFullYear()} HopeHorizon Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}