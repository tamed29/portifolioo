import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-4 border-b border-surface' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="text-xl font-bold text-textHeading cursor-pointer tracking-wider">
            <span className="text-primary">&lt;</span>Tame<span className="text-secondary">Dev</span><span className="text-primary">/&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="active"
                className="relative text-textHeading hover:text-primary transition-colors cursor-pointer text-base font-bold group [&.active]:text-primary [&.active>span]:w-full"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="text-textHeading hover:text-primary transition-colors p-2 rounded-full hover:bg-surface border border-transparent hover:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle Icons */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="text-textHeading hover:text-primary transition-colors p-2 rounded-xl bg-surface border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-textHeading p-2 rounded-xl bg-surface border border-white/10 hover:border-primary/40 transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HALF-SCREEN SOLID MOBILE MENU DRAWER (Covers ~50% of screen height with 100% Solid Opacity) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim Backdrop covering lower screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
            />

            {/* Half-Screen Top Drawer Sheet */}
            <motion.div 
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-[#0a0e17] border-b border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:hidden p-6 pt-5 flex flex-col justify-between rounded-b-3xl max-h-[55vh] overflow-y-auto"
            >
              {/* Header Row */}
              <div className="flex justify-between items-center w-full pb-3 border-b border-white/10">
                <Link 
                  to="hero" 
                  smooth={true} 
                  duration={500} 
                  onClick={() => setIsOpen(false)} 
                  className="text-xl font-black text-textHeading tracking-wider cursor-pointer"
                >
                  <span className="text-primary">&lt;</span>Tame<span className="text-secondary">Dev</span><span className="text-primary">/&gt;</span>
                </Link>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={toggleTheme}
                    className="text-textHeading p-2 rounded-xl bg-surface border border-white/10"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-surface border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Centered Navigation Links Stack */}
              <div className="py-4 flex flex-col items-center justify-center gap-3 w-full my-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    activeClass="active"
                    className="w-full max-w-xs text-center py-2.5 px-6 rounded-xl text-lg font-bold text-textHeading hover:text-primary bg-surface/90 dark:bg-surface/90 border border-slate-200 dark:border-white/10 hover:border-primary/50 shadow-sm transition-all duration-300 cursor-pointer [&.active]:text-primary [&.active]:border-primary/50 [&.active]:bg-primary/10 [&.active]:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Footer Indicator */}
              <div className="pt-2 border-t border-white/10 flex justify-center items-center gap-4 text-xs text-textBody">
                <a href={profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <FaGithub size={14} /> GitHub
                </a>
                <span>•</span>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                  <FaLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
