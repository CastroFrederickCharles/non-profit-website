import React, { useState } from 'react';
import { X, Award, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function DonationCelebrationModal({ data, onClose, darkMode, showToast }) {
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
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"
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
            className="flex-1 py-3 px-4 rounded-xl border border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {copied ? 'Copied Message!' : 'Share Impact'}
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore More Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

