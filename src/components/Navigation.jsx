import React from 'react';
import { Heart, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navigation({ 
  currentPage, 
  setCurrentPage, 
  darkMode, 
  setDarkMode, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  onOpenDonate 
}) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
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
            onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
            className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${
              currentPage === 'home' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 pb-1' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Homepage
          </button>
          
          <button 
            onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
            className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${
              currentPage === 'about' ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500 pb-1' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            About Founder
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>

          {/* Action CTA Button */}
          <button
            onClick={onOpenDonate}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
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
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm ${
              currentPage === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Homepage
          </button>
          
          <button
            onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
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

