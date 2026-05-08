import { STATS } from '../constants';

export default function StatsStrip() {
  return (
    <div className="relative z-10 bg-white border-t border-b border-black/8 py-6 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-8">
            <div className="text-center">
              <span className="font-bebas text-4xl text-brand-red tracking-widest leading-none block">{stat.num}</span>
              <span className="font-rajdhani text-[10px] tracking-[2px] uppercase text-gray-400 mt-1 block">{stat.label}</span>
            </div>
            {i < STATS.length - 1 && <div className="hidden sm:block w-px h-12 bg-black/8" />}
          </div>
        ))}
      </div>
    </div>
  );
}
