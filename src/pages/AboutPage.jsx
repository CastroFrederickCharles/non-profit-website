import { useState } from 'react';
import { 
  Heart, 
  Award, 
  Mail, 
  Send, 
  ShieldCheck, 
  Target, 
  Globe 
} from 'lucide-react';
import { Linkedin, Twitter } from '../components/icons/SocialIcons';
import aboutData from '../data/aboutData.json';

// Mapping for dynamic icons referenced in JSON
const ICON_MAP = {
  ShieldCheck,
  Heart,
  Target,
  Globe,
  Award,
  Mail,
  Send
};

export default function AboutPage({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { founder, journey, values, contact } = aboutData;

  const handleSubmitContact = (e) => {
    e.preventDefault();
    showToast(contact.successToast || "Message sent! Thank you for reaching out.");
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
                  src={founder.photoUrl} 
                  alt={`${founder.name} Portrait`} 
                  className="w-full h-[460px] object-cover object-top"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">{founder.role}</p>
                  <p className="text-sm font-bold">
                    {founder.name} <span className="text-emerald-600 dark:text-emerald-400 font-normal">("{founder.nickname}")</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Overview */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{founder.badgeTitle}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {founder.headingPrefix} <br />
              <span className="text-emerald-600 dark:text-emerald-400">{founder.headingHighlight}</span>
            </h1>

            {founder.bioParagraphs.map((para, index) => (
              <p 
                key={index} 
                className={`${index === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} text-slate-600 dark:text-slate-300 leading-relaxed`}
              >
                {para}
              </p>
            ))}

            {/* Core Values Quick Quote */}
            {founder.quote && (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 text-left">
                <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 italic">
                  "{founder.quote}"
                </p>
              </div>
            )}

            {/* Social Media Links */}
            <div className="pt-2 flex justify-center lg:justify-start gap-4">
              {founder.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  title={social.platform}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  {social.platform === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                  {social.platform === 'Twitter' && <Twitter className="w-5 h-5" />}
                  {social.platform === 'Email' && <Mail className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. TIMELINE & STORY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{journey.subtitle}</h2>
          <h3 className="text-3xl font-extrabold">{journey.title}</h3>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-10">
          {journey.milestones.map((item, idx) => (
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
          <h2 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{values.subtitle}</h2>
          <h3 className="text-3xl font-extrabold">{values.title}</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.items.map((val, idx) => {
            const IconComp = ICON_MAP[val.icon] || Heart;
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
            <h3 className="text-2xl font-bold">{contact.title}</h3>
            <p className="text-xs text-slate-500">{contact.subtitle}</p>
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
              {contact.buttonText || "Send Message"}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
