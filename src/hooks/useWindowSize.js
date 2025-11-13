import { useEffect, useState } from 'react';

/**
 * Custom hook to track viewport dimensions.
 * Helpful for responsive tweaks (e.g. dynamic gradients in the hero section).
 */
const useWindowSize = () => {
  const getSize = () => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export default useWindowSize;
