import { STATS } from '../constants';

/**
 * Franja horizontal con métricas clave del negocio.
 * Se ubica inmediatamente debajo del Hero.
 */
export default function StatsStrip() {
  return (
    <div className="relative z-10 bg-brand-dark-2/95 border-t border-b border-brand-red/20 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-8">

            <div className="text-center">
              <span className="font-bebas text-4xl text-brand-red tracking-widest leading-none block">
                {stat.num}
              </span>
              <span className="font-rajdhani text-[10px] tracking-[2px] uppercase text-gray-600 mt-1 block">
                {stat.label}
              </span>
            </div>

            {/* Divisor vertical entre stats (oculto en el último) */}
            {i < STATS.length - 1 && (
              <div className="hidden sm:block w-px h-12 bg-white/5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
