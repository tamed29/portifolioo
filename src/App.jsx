import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HeroCanvas from './components/hero-canvas';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('preferred-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    window.localStorage.setItem('preferred-theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      offset: 120,
      easing: 'ease-out-cubic',
    });
  }, []);

  const toggleTheme = useMemo(
    () => () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    [],
  );

  const lightBackground = 'bg-white text-slate-900 transition-colors duration-500';
  const darkBackground =
    'dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100';

  return (
    <div className={`min-h-screen ${lightBackground} ${darkBackground}`}>
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
