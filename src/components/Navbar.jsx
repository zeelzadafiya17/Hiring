import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/#features' },
  { name: 'About Us', path: '/#aboutus' },
  { name: 'Team', path: '/#team' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Create Job', path: '/create-job' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-200/50 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        {/* Premium Logo */}
        <Link to="/" className="group flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30">
              <img 
                src="/visser-logo-final.svg" 
                alt="VISSER" 
                className="w-8 h-8 drop-shadow-lg"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-90 shadow-lg"></div>
          </motion.div>
          <motion.div
            whileHover={{ x: 3 }}
            className="text-3xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              VISSER
            </span>
          </motion.div>
        </Link>

        {/* Premium Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          {links.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={link.path}
                className={`relative px-6 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-500 group ${
                  isActive(link.path) 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50 shadow-lg border border-blue-200/50' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/60'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl border border-blue-200/50 shadow-lg"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Premium Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <motion.div 
            whileHover={{ scale: 1.06, y: -2 }} 
            whileTap={{ scale: 0.94 }}
          >
            <a
              href="#register"
              className="relative px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-black text-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border-2 border-blue-400/30"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Get Started</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Premium Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-3 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50/60 transition-all duration-500 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.div>
        </motion.button>

        {/* Premium Mobile Navigation Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mx-6 mt-3 bg-white/98 backdrop-blur-2xl shadow-2xl rounded-3xl border border-blue-200/50 overflow-hidden md:hidden"
          >
            <div className="py-8 space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block mx-6 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                      isActive(link.path) 
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-500 shadow-lg' 
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 hover:translate-x-2'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="border-t border-blue-200/50 mt-6 pt-6 mx-6 space-y-4">
                <a
                  href="#register"
                  className="block px-6 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-black text-lg text-center shadow-xl border-2 border-blue-400/30"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar; 