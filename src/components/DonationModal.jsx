import { useState, useMemo } from 'react';
import { Heart, X, Sparkles, ArrowRight } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { LiveStripeElementsForm, StripeSimulatorForm } from './StripeCheckoutForm';

export default function DonationModal({ onClose, onSuccess, darkMode }) {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
  const [step, setStep] = useState('select'); // 'select' | 'payment'

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
    if (amt >= 100) return "Equips an entire village school with tech kits & clean water filtration filters.";
    if (amt >= 50) return "Provides clean drinking water for a family of 5 for six full months.";
    if (amt >= 25) return "Supplies school backpacks, learning stationery, and textbooks for 3 children.";
    return "Provides vital emergency seeds and organic farming toolkits for smallholder farmers.";
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) return;
    setStep('payment');
  };

  const handlePaymentSuccess = (paymentDetails) => {
    const referenceId = "HH-" + Math.floor(100000 + Math.random() * 900000);
    onSuccess({
      amount: finalAmount,
      frequency,
      referenceId,
      stripePaymentId: paymentDetails.stripePaymentId,
      cardBrand: paymentDetails.cardBrand,
      cardLast4: paymentDetails.cardLast4,
      donorName: paymentDetails.donorName,
      donorEmail: paymentDetails.donorEmail,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      impactMessage: getImpactMessage(finalAmount)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all animate-pop-in my-8 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-emerald-600">
            <Heart className="w-5 h-5 fill-current" />
            <h3 className="font-bold text-lg">
              {step === 'select' ? 'Support HopeHorizon' : 'Complete Donation via Stripe'}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Amount Selection */}
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
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  frequency === 'monthly' ? 'bg-white dark:bg-slate-900 shadow text-emerald-600' : 'text-slate-500'
                }`}
              >
                Monthly Partner
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

            {/* Continue to Payment Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Continue to Stripe Checkout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-center text-slate-400">
              🔒 100% tax-deductible under 501(c)(3). Secure Stripe Checkout.
            </p>
          </form>
        ) : (
          /* Step 2: Stripe Payment Screen */
          <div className="space-y-4 pt-4">
            {/* Donation Summary Mini Card */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Donation</span>
                <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  ${finalAmount.toLocaleString()} <span className="text-xs font-normal text-slate-400">{frequency === 'monthly' ? '/ month' : 'one-time'}</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  501(c)(3) Eligible
                </span>
                <p className="text-[11px] text-slate-400 mt-1">General Impact Fund</p>
              </div>
            </div>

            {/* Stripe Elements or Interactive Stripe Form */}
            {stripePromise ? (
              <Elements stripe={stripePromise}>
                <LiveStripeElementsForm
                  amount={finalAmount}
                  frequency={frequency}
                  fund="General Community Impact Fund"
                  darkMode={darkMode}
                  onPaymentSuccess={handlePaymentSuccess}
                  onCancel={() => setStep('select')}
                />
              </Elements>
            ) : (
              <StripeSimulatorForm
                amount={finalAmount}
                frequency={frequency}
                onPaymentSuccess={handlePaymentSuccess}
                onCancel={() => setStep('select')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
