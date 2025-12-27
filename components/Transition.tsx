
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-screen pt-20"
    >
      {children}
    </motion.div>
  );
};

export const TransitionOverlay: React.FC = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full h-full bg-blue-600 origin-bottom z-50 pointer-events-none"
    />
  );
};
