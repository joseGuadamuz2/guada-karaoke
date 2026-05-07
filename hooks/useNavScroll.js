import { useState, useEffect } from 'react';

/**
 * Hook que detecta si la página ha hecho scroll más allá de un umbral.
 * Útil para cambiar el estilo del Navbar al hacer scroll.
 *
 * @param {number} threshold - Píxeles de scroll para activar el estado
 * @returns {boolean} scrolled
 *
 * @example
 * const scrolled = useNavScroll(20);
 * <nav className={scrolled ? 'bg-black/90' : 'bg-transparent'} />
 */
export function useNavScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
