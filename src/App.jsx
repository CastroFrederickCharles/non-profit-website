import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'donate'
  const [donationParams, setDonationParams] = useState({ amount: 50, frequency: 'one-time' });
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

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
            setCurrentPage={setCurrentPage} 
            onOpenDonate={handleOpenDonate} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage showToast={showToast} />
        )}
        {currentPage === 'donate' && (
          <DonatePage 
            initialParams={donationParams}
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
