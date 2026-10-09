import React, { useState } from 'react';
import { Heart, Award, Mail, Send } from 'lucide-react';
import { Linkedin, Twitter } from '../components/icons/SocialIcons';
import { MILESTONES, VALUES } from '../data/websiteData';

export default function AboutPage({ showToast }) {
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
            <h3 className="text-2xl font-bold">Connect With Frederick ("Chogs") Directly</h3>
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
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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

