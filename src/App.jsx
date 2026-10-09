import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import DonationCelebrationModal from './components/DonationCelebrationModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about'
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [celebrationData, setCelebrationData] = useState(null);
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
        onOpenDonate={() => setIsDonateModalOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="pt-20">
        {currentPage === 'home' ? (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            onOpenDonate={() => setIsDonateModalOpen(true)} 
          />
        ) : (
          <AboutPage showToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Donation Modal Flow */}
      {isDonateModalOpen && (
        <DonationModal 
          onClose={() => setIsDonateModalOpen(false)}
          onSuccess={(data) => {
            setIsDonateModalOpen(false);
            setCelebrationData(data);
          }}
          darkMode={darkMode}
        />
      )}

      {/* Celebratory Success Pop-up Modal */}
      {celebrationData && (
        <DonationCelebrationModal 
          data={celebrationData}
          onClose={() => setCelebrationData(null)}
          darkMode={darkMode}
          showToast={showToast}
        />
      )}
    </div>
  );
}