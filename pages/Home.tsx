
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from '../components/Hero3D';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export const Home: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(".hero-title", 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  return (
    <div className="relative flex items-center min-h-[90vh] px-6 md:px-12 overflow-hidden">
      <HeroCanvas />
      
      <div className="max-w-4xl relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4"
        >
          Sumit Kumar — Senior Frontend Engineer & 3D Specialist
        </motion.span>
        
        <h1 className="hero-title text-6xl md:text-8xl font-black font-heading leading-tight mb-6">
          Building Digital <br />
          <span className="gradient-text">Experiences.</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Creating immersive, high-performance web applications where aesthetic 
          meets functionality. Specializing in React, Three.js, and smooth UI animations.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <Link to="/projects" className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
            View Projects
          </Link>
          <Link to="/contact" className="glass-card text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Let's Talk
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex space-x-6 text-gray-500 text-sm">
        <a href="https://github.com/sumitbassan9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
  );
};
