import { useState, useEffect, useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:border-indigo-500/60 dark:hover:bg-indigo-500/90"
      aria-label="Back to top"
    >
      <FiArrowUp />
      Back to Top
    </button>
  );
};

export default BackToTop;

