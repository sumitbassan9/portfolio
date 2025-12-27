
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { PageTransition, TransitionOverlay } from './components/Transition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
        {/* Background Ambient Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full -z-20 pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full -z-20 pointer-events-none" />
        
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        
        {/* Footer simple */}
        <footer className="py-12 px-6 md:px-12 border-t border-gray-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VP.3D Portfolio. Designed with high performance in mind.</p>
            <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-400">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Cookies</a>
               <a href="#" className="hover:text-white transition-colors">RSS</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
