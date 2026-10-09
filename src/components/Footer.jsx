import React from 'react';
import { Heart } from 'lucide-react';
import { Twitter, Linkedin, Github } from './icons/SocialIcons';

export default function Footer({ setCurrentPage }) {
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
              <button 
                onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Homepage
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }} 
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
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

