import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import { INITIATIVES_DATA } from './data/websiteData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'donate'
  const [donationParams, setDonationParams] = useState({ amount: 50, frequency: 'one-time' });
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Initiatives State with localStorage persistence
  const [initiatives, setInitiatives] = useState(() => {
    try {
      const saved = localStorage.getItem('hopehorizon_initiatives');
      if (saved) {
        const parsed = JSON.parse(saved);
        return INITIATIVES_DATA.map(init => {
          const match = parsed.find(p => p.id === init.id || p.title.toLowerCase() === init.title.toLowerCase());
          return match ? { ...init, raised: match.raised } : init;
        });
      }
    } catch (e) {
      console.error('Failed to load saved initiatives:', e);
    }
    return INITIATIVES_DATA;
  });

  const handleDonationSuccess = ({ amount, fund }) => {
    const numericAmount = Number(amount) || 0;
    if (numericAmount <= 0) return;

    setInitiatives(prevInitiatives => {
      const isGeneral = !fund || fund.trim().toLowerCase() === 'general community impact fund' || fund.includes('Where Most Needed');
      let updated;

      if (isGeneral) {
        // Divide equally among all initiatives
        const perInitiative = Math.round(numericAmount / prevInitiatives.length);
        updated = prevInitiatives.map(item => ({
          ...item,
          raised: item.raised + perInitiative
        }));
      } else {
        // Add to matching initiative
        updated = prevInitiatives.map(item => {
          if (item.title.toLowerCase() === fund.trim().toLowerCase()) {
            return {
              ...item,
              raised: item.raised + numericAmount
            };
          }
          return item;
        });
      }

      try {
        localStorage.setItem(
          'hopehorizon_initiatives',
          JSON.stringify(updated.map(i => ({ id: i.id, title: i.title, raised: i.raised })))
        );
      } catch (e) {
        console.error('Failed to save initiatives:', e);
      }

      return updated;
    });
  };

  const handleResetInitiatives = () => {
    try {
      localStorage.removeItem('hopehorizon_initiatives');
    } catch (e) {
      console.error(e);
    }
    setInitiatives(INITIATIVES_DATA);
    showToast('Initiative raised balances reset to defaults.');
  };

  // Sync Dark Mode with HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleOpenDonate = (params) => {
    if (params) {
      setDonationParams(params);
    }
    setCurrentPage('donate');
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenDonate={() => handleOpenDonate({ amount: 50, frequency: 'one-time' })}
      />

      {/* Main Page Rendering */}
      <main className="pt-20">
        {currentPage === 'home' && (
          <HomePage 
            initiatives={initiatives}
            onResetInitiatives={handleResetInitiatives}
            setCurrentPage={setCurrentPage} 
            onOpenDonate={handleOpenDonate} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage showToast={showToast} />
        )}
        {currentPage === 'donate' && (
          <DonatePage 
            key={`${donationParams?.fund || 'general'}-${donationParams?.amount || 50}-${donationParams?.frequency || 'one-time'}`}
            initialParams={donationParams}
            onDonationSuccess={handleDonationSuccess}
            setCurrentPage={setCurrentPage}
            darkMode={darkMode}
            showToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
