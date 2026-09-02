import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
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
            className="text-textHeading hover:text-primary transition-colors p-2 rounded-xl bg-surface/80 border border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-textHeading p-2 rounded-xl bg-surface/80 border border-white/10 hover:border-primary/40 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Professional Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-surface/98 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-primary/20 py-8 px-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-50 flex flex-col items-center justify-center text-center gap-4"
          >
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
                className="w-full max-w-xs text-center py-3.5 px-6 rounded-2xl text-xl font-extrabold text-textHeading hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/40 hover:bg-primary/10 shadow-sm cursor-pointer [&.active]:text-primary [&.active]:font-black [&.active]:border-primary/40 [&.active]:bg-primary/10 [&.active]:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
