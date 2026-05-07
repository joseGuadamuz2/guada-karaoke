import { useRef, useState, useEffect } from 'react';

/**
 * Hook que detecta cuando un elemento entra al viewport.
 * Dispara una sola vez y deja de observar al activarse.
 *
 * @param {IntersectionObserverInit} options - Opciones del IntersectionObserver
 * @returns {[React.RefObject, boolean]} - [ref para el elemento, inView]
 *
 * @example
 * const [ref, inView] = useInView({ threshold: 0.2 });
 * <div ref={ref} className={inView ? 'visible' : 'hidden'} />
 */
export function useInView(options = {}) {
  const ref     = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
