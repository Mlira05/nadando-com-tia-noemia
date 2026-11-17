import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WaterDecorations } from './components/WaterDecorations';
import { SafetyModal } from './components/SafetyModal';
import { PlanInterestModal } from './components/PlanInterestModal';
import { StoryPlayerModal } from './components/StoryPlayerModal';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AccessPage } from './pages/AccessPage';
import { ExplorePage } from './pages/ExplorePage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { PlansPage } from './pages/PlansPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  // Support deployment at domain root (Cloudflare Pages) or subpath (GitHub Pages)
  const basename =
    typeof window !== 'undefined' &&
    window.location.pathname.startsWith('/nadando-com-tia-noemia')
      ? '/nadando-com-tia-noemia'
      : '/';

  return (
    <AppProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <div className="relative min-h-screen flex flex-col justify-between selection:bg-sun-300 selection:text-ocean-950">
          <WaterDecorations />
          <Navbar />
          
          <div className="relative z-10 flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/acesso" element={<AccessPage />} />
              <Route path="/explorar" element={<ExplorePage />} />
              <Route path="/historias/:slug" element={<StoryDetailPage />} />
              <Route path="/planos" element={<PlansPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <Footer />

          {/* Interactive Global Modals & Notifications */}
          <SafetyModal />
          <PlanInterestModal />
          <StoryPlayerModal />
          <PwaInstallBanner />
          <Toast />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
