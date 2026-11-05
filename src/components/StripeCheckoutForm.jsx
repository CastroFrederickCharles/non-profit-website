import { useState } from 'react';
import { 
  CreditCard, 
  Lock, 
  ShieldCheck, 
  AlertCircle, 
  Loader2, 
  Sparkles 
} from 'lucide-react';
import { 
  CardElement, 
  useStripe, 
  useElements 
} from '@stripe/react-stripe-js';

// Card brand detector helper
function getCardBrand(num) {
  const clean = num.replace(/\D/g, '');
  if (/^4/.test(clean)) return 'Visa';
  if (/^5[1-5]/.test(clean)) return 'Mastercard';
  if (/^3[47]/.test(clean)) return 'Amex';
  if (/^6(?:011|5)/.test(clean)) return 'Discover';
  return 'Card';
}

/**
 * Inner component mounted INSIDE <Elements> for live Stripe processing
 */
export function LiveStripeElementsForm({ amount, frequency, darkMode, onPaymentSuccess, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '15px',
        color: darkMode ? '#f1f5f9' : '#1e293b',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        '::placeholder': {
          color: darkMode ? '#64748b' : '#94a3b8',
        },
        iconColor: darkMode ? '#34d399' : '#059669',
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444',
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setErrorMessage(null);
    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name,
          email,
          address: { postal_code: zip }
        }
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      onPaymentSuccess({
        stripePaymentId: paymentMethod.id,
        cardBrand: paymentMethod.card?.brand?.toUpperCase() || 'VISA',
        cardLast4: paymentMethod.card?.last4 || '4242',
        donorName: name,
        donorEmail: email
      });
    } catch (err) {
      setErrorMessage(err.message || 'Payment processing failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-1">
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
        <div className="flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Stripe Live Elements Connected</span>
        </div>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Cardholder Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Johnson"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Receipt Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Card Details</label>
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus-within:ring-2 focus-within:ring-emerald-500">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">ZIP / Postal Code</label>
        <input
          type="text"
          required
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="90210"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
        <Lock className="w-3 h-3 text-emerald-600" />
        <span>End-to-end 256-bit encryption powered by Stripe</span>
      </div>

      <div className="space-y-2 pt-2">
        <button
          type="submit"
          disabled={loading || !stripe}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing with Stripe...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Pay ${amount.toLocaleString()} {frequency === 'monthly' ? '/ month' : ''}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="w-full py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          ← Change Amount
        </button>
      </div>
    </form>
  );
}

/**
 * Interactive Stripe Simulator Form for Test Mode / when no publishable key is set
 */
export function StripeSimulatorForm({ amount, frequency, onPaymentSuccess, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fillTestCard = () => {
    setName('Alex Johnson');
    setEmail('alex.johnson@example.com');
    setCardNumber('4242 4242 4242 4242');
    setExpiry('12/28');
    setCvc('123');
    setZip('90210');
    setErrorMessage(null);
  };

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(val);
  };

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) {
      val = val.substring(0, 2) + '/' + val.substring(2);
    }
    setExpiry(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    setTimeout(() => {
      const cleanCard = cardNumber.replace(/\s+/g, '');
      if (cleanCard.length < 15) {
        setErrorMessage('Please enter a valid card number.');
        setLoading(false);
        return;
      }

      if (!expiry || !expiry.includes('/') || expiry.length < 5) {
        setErrorMessage('Please enter a valid expiration date (MM/YY).');
        setLoading(false);
        return;
      }

      if (cvc.length < 3) {
        setErrorMessage('Please enter a valid security code (CVC).');
        setLoading(false);
        return;
      }

      const cardBrand = getCardBrand(cleanCard);
      const last4 = cleanCard.slice(-4);
      const stripePaymentId = 'pi_' + Math.random().toString(36).substring(2, 12) + '_secret_' + Math.random().toString(36).substring(2, 8);

      setLoading(false);
      onPaymentSuccess({
        stripePaymentId,
        cardBrand,
        cardLast4: last4,
        donorName: name,
        donorEmail: email
      });
    }, 1000);
  };

  const detectedBrand = getCardBrand(cardNumber);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-1">
      {/* Test Mode Banner with 1-click test card filler */}
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs">
        <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
          <span className="font-medium">Stripe Test Simulation Mode</span>
        </div>
        <button
          type="button"
          onClick={fillTestCard}
          className="px-2.5 py-1 rounded-lg bg-amber-200/80 dark:bg-amber-900/60 hover:bg-amber-300 dark:hover:bg-amber-800 text-[11px] font-bold text-amber-900 dark:text-amber-200 transition-colors cursor-pointer"
        >
          Fill Test Card
        </button>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Donor Information */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Johnson"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
            Receipt Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Simulated Card Fields */}
      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Card Information
            </label>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
              {detectedBrand !== 'Card' ? detectedBrand : 'Visa / MC / Amex'}
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              required
              maxLength={19}
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="4242 4242 4242 4242"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Expires</label>
            <input
              type="text"
              required
              maxLength={5}
              value={expiry}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-center font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">CVC</label>
            <input
              type="password"
              required
              maxLength={4}
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
              placeholder="123"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-center font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">ZIP / Postal</label>
            <input
              type="text"
              required
              maxLength={10}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="90210"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-center font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
        <Lock className="w-3 h-3 text-emerald-600" />
        <span>End-to-end 256-bit encryption powered by </span>
        <span className="font-bold text-slate-700 dark:text-slate-300">Stripe</span>
      </div>

      <div className="space-y-2 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Authorizing with Stripe...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Pay ${amount.toLocaleString()} {frequency === 'monthly' ? '/ month' : ''} Now</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="w-full py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          ← Change Amount
        </button>
      </div>
    </form>
  );
}
