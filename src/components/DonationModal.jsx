import React, { useState } from 'react';
import { Heart, X, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function DonationModal({ onClose, onSuccess, darkMode }) {
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
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 cursor-pointer">
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
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  frequency === 'one-time' ? 'bg-white dark:bg-slate-900 shadow text-emerald-600' : 'text-slate-500'
                }`}
              >
                One-Time
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
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
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
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
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
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
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-white/90" />
                <span>Confirm & Complete Donation ✨</span>
              </button>

              <button
                type="button"
                onClick={() => setStep('select')}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
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

