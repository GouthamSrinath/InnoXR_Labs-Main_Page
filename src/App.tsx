import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from '@/components/ui/sonner';
import { AuroraBackground } from '@/components/ui/aurora';

// Optimized scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top - no smooth scrolling for page changes
    window.scrollTo(0, 0);
    
    // Force scroll position reset
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional fallback
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}

// Ultra-fast page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.15,
          ease: "easeOut"
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden relative">
        {/* Aurora Background - Fixed behind everything */}
        <AuroraBackground className="fixed inset-0 z-0" />
        
        {/* Main Content with backdrop blur */}
        <div className="relative z-10 min-h-screen bg-white/60 dark:bg-black/60 backdrop-blur-sm">
          <Navbar />
          <main className="w-full">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1f2937',
                color: 'white',
                border: '1px solid #374151',
              },
            }}
          />
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;