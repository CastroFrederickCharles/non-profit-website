import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { INITIATIVES_DATA, IMPACT_STATS, TESTIMONIALS } from '../data/websiteData';

export default function HomePage({ setCurrentPage, onOpenDonate }) {
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-current" />
                Make a Donation
              </button>

              <button
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
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
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
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
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-400">
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
              className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Support Our Work
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

