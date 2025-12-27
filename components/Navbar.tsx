
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-2xl px-6 py-3">
        <Link to="/" className="text-2xl font-bold font-heading gradient-text tracking-tighter">
          SK.DEV
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
          Hire Me
        </Link>
      </div>
    </nav>
  );
};
