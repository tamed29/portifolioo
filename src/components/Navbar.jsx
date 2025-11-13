import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    }),
    [],
  );

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observerOptions]);

  const handleNavigate = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a
          href="#home"
          className="text-lg font-semibold uppercase tracking-wider text-slate-900 transition hover:text-indigo-500 dark:text-slate-100"
        >
          Tamirat Dereje
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                className={`nav-link ${
                  activeSection === link.id ? 'active text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500"
            aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="w-full lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-lg dark:border-slate-800 dark:bg-slate-900/90">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(link.id)}
                      className={`w-full rounded-xl px-4 py-2 text-left font-medium transition ${
                        activeSection === link.id
                          ? 'bg-indigo-500/90 text-white'
                          : 'text-slate-600 hover:bg-indigo-50 dark:text-slate-300 dark:hover:bg-slate-800/80'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
