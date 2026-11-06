import { useState, useMemo } from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle, 
  Award, 
  Share2, 
  Lock
} from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { LiveStripeElementsForm, StripeSimulatorForm } from '../components/StripeCheckoutForm';

export default function DonatePage({ initialParams, onDonationSuccess, setCurrentPage, darkMode, showToast }) {
  const [amount, setAmount] = useState(initialParams?.amount || 50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState(initialParams?.frequency || 'one-time');
  const [fund, setFund] = useState(initialParams?.fund || 'General Community Impact Fund');
  const [successReceipt, setSuccessReceipt] = useState(null);
  const [copied, setCopied] = useState(false);

  const finalAmount = Number(customAmount || amount);

  // Initialize Stripe instance if a valid Publishable Key exists
  const stripePromise = useMemo(() => {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (publishableKey && publishableKey.startsWith('pk_') && !publishableKey.includes('your_key_here')) {
      return loadStripe(publishableKey);
    }
    return null;
  }, []);

  const getImpactMessage = (amt) => {
    if (amt >= 250) return "Funds an entire community solar-powered clean water hub and filtration replacement unit.";
    if (amt >= 100) return "Equips an entire village school classroom with coding laptops & digital textbooks.";
    if (amt >= 50) return "Provides clean drinking water for a family of 5 for six full months.";
    if (amt >= 25) return "Supplies school backpacks, learning stationery, and textbooks for 3 children.";
    return "Provides vital emergency seeds and organic farming toolkits for smallholder farmers.";
  };

  const handlePaymentSuccess = (paymentDetails) => {
    const referenceId = "HH-" + Math.floor(100000 + Math.random() * 900000);
    const receiptData = {
      amount: finalAmount,
      frequency,
      fund,
      referenceId,
      stripePaymentId: paymentDetails.stripePaymentId,
      cardBrand: paymentDetails.cardBrand,
      cardLast4: paymentDetails.cardLast4,
      donorName: paymentDetails.donorName,
      donorEmail: paymentDetails.donorEmail,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      impactMessage: getImpactMessage(finalAmount)
    };

    // Update global & persistent donation stats on high impact programs
    onDonationSuccess?.({
      amount: finalAmount,
      fund,
      frequency,
      donorName: paymentDetails.donorName,
      donorEmail: paymentDetails.donorEmail,
      referenceId,
      stripePaymentId: paymentDetails.stripePaymentId
    });

    setSuccessReceipt(receiptData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast?.("Donation successful! Thank you for your generosity.");
  };

  const handleReturnHome = () => {
    setSuccessReceipt(null);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleShare = () => {
    if (!successReceipt) return;
    const text = `I just supported HopeHorizon Foundation with a $${successReceipt.amount} donation to bring clean water and education to communities worldwide! 🌍✨`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    showToast?.("Share message copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  // --- CELEBRATION / RECEIPT VIEW (WHEN PAYMENT IS COMPLETE) ---
  if (successReceipt) {
    return (
      <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
        {/* Top return button */}
        <button
          onClick={handleReturnHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        {/* Celebration Hero Card */}
        <div className={`rounded-3xl p-8 sm:p-12 text-center border shadow-2xl relative overflow-hidden ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {/* Confetti Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative mx-auto w-20 h-20 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30">
              <Award className="w-10 h-10 animate-bounce" />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Impact Champion</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
            Payment Confirmed! Thank You 🎉
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
            Your gift of <strong className="text-emerald-600 dark:text-emerald-400 font-extrabold">${successReceipt.amount}</strong> has been processed via Stripe. A formal tax receipt was sent to <span className="font-semibold text-slate-700 dark:text-slate-300">{successReceipt.donorEmail}</span>.
          </p>

          {/* Official Donor Receipt Card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 text-left space-y-4 max-w-xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                  Official 501(c)(3) Receipt
                </span>
                <p className="text-3xl font-black text-slate-900 dark:text-white">
                  ${successReceipt.amount.toLocaleString()} <span className="text-xs font-normal text-slate-500">USD</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-400 block">ID: {successReceipt.referenceId}</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {successReceipt.frequency === 'monthly' ? 'Monthly Partner' : 'One-Time Supporter'}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Designated Fund:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{successReceipt.fund}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Payment Method:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {successReceipt.cardBrand} •••• {successReceipt.cardLast4} (Stripe Verified)
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Stripe Charge Ref:</span>
                <span className="font-mono text-[11px] text-slate-500 truncate max-w-[200px]">{successReceipt.stripePaymentId}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Date:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{successReceipt.date}</span>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-xl p-3.5 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold block mb-1">Direct Community Impact:</span>
              <p className="italic">"{successReceipt.impactMessage}"</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-8">
            <button
              onClick={handleShare}
              className="flex-1 py-3 px-5 rounded-xl border border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share Your Impact'}</span>
            </button>

            <button
              onClick={handleReturnHome}
              className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Explore More Projects</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- FULL DEDICATED DONATION & STRIPE PAYMENT PAGE ---
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Back button and page breadcrumb */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Tax Deductible 501(c)(3)</span>
        </div>
      </div>

      {/* Page Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Make a Direct Difference</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Support HopeHorizon Foundation
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Every dollar directly funds community-led clean water filtration, digital classrooms, and regenerative farming.
        </p>
      </div>

      {/* Main Two-Column Donation Experience */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Amount & Impact Configuration */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-sm space-y-6 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200">
              1. Choose Donation Details
            </h2>

            {/* Giving Frequency Selector */}
            <div className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  frequency === 'one-time'
                    ? 'bg-white dark:bg-slate-900 shadow-sm text-emerald-600'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                One-Time Contribution
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  frequency === 'monthly'
                    ? 'bg-white dark:bg-slate-900 shadow-sm text-emerald-600'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Monthly Partner 🌟
              </button>
            </div>

            {/* Amount Selection Buttons */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-500">
                Select Amount (USD)
              </label>
              <div className="grid grid-cols-5 gap-2.5">
                {[10, 25, 50, 100, 250].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => { setAmount(val); setCustomAmount(''); }}
                    className={`py-3.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      amount === val && !customAmount
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 shadow-sm ring-2 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Or Enter Custom Gift Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>
            </div>

            {/* Designated Fund Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Designate to a Specific Initiative
              </label>
              <select
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="General Community Impact Fund">Where Most Needed (General Impact Fund)</option>
                <option value="Clean Water Access Initiative">Clean Water Access Initiative</option>
                <option value="Youth Tech Literacy Program">Youth Tech Literacy Program</option>
                <option value="Sustainable Agriculture Hub">Sustainable Agriculture Hub</option>
              </select>
            </div>

            {/* Tangible Impact Box */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 block mb-0.5">
                  Your Impact with ${finalAmount}:
                </span>
                <p className="text-xs text-emerald-800 dark:text-emerald-400 leading-relaxed">
                  {getImpactMessage(finalAmount)}
                </p>
              </div>
            </div>
          </div>

          {/* Foundation Trust Pillars */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className={`p-4 rounded-2xl border text-center space-y-1 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
              <h4 className="text-xs font-bold">501(c)(3) Status</h4>
              <p className="text-[11px] text-slate-500">All gifts are fully tax deductible in the US.</p>
            </div>

            <div className={`p-4 rounded-2xl border text-center space-y-1 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto" />
              <h4 className="text-xs font-bold">94% Efficiency</h4>
              <p className="text-[11px] text-slate-500">Goes directly to program tools and materials.</p>
            </div>

            <div className={`p-4 rounded-2xl border text-center space-y-1 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <Lock className="w-5 h-5 text-emerald-600 mx-auto" />
              <h4 className="text-xs font-bold">Stripe Secured</h4>
              <p className="text-[11px] text-slate-500">256-bit bank-grade encryption protocol.</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Dedicated Stripe Payment Box */}
        <div className="lg:col-span-5">
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 sticky top-28 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                Step 2 of 2
              </span>
              <h2 className="text-xl font-bold mt-0.5">
                Stripe Payment Details
              </h2>
            </div>

            {/* Donation Summary Header */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Giving</span>
                <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  ${finalAmount.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1">
                    {frequency === 'monthly' ? '/ month' : 'USD'}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  {frequency === 'monthly' ? 'Monthly Partner' : 'One-Time'}
                </span>
                <p className="text-[11px] text-slate-400 mt-1 truncate max-w-[140px]">{fund}</p>
              </div>
            </div>

            {/* Mount Stripe Elements or Interactive Simulator */}
            {stripePromise ? (
              <Elements stripe={stripePromise}>
                <LiveStripeElementsForm
                  amount={finalAmount}
                  frequency={frequency}
                  fund={fund}
                  darkMode={darkMode}
                  onPaymentSuccess={handlePaymentSuccess}
                  onCancel={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
                />
              </Elements>
            ) : (
              <StripeSimulatorForm
                amount={finalAmount}
                frequency={frequency}
                onPaymentSuccess={handlePaymentSuccess}
                onCancel={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              />
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
