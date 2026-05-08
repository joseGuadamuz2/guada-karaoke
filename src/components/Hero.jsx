import { MessageCircle, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL, COVERAGE_LABEL } from '../constants';

const LASERS = [
  { style: 'top-[30%] left-0 w-3/5 -rotate-[15deg]',             color: 'from-transparent via-brand-red to-transparent',    delay: '0s',   opacity: 'opacity-30' },
  { style: 'top-[40%] left-0 w-3/5 -rotate-[8deg]',              color: 'from-transparent via-brand-purple to-transparent', delay: '1s',   opacity: 'opacity-20' },
  { style: 'top-[25%] right-0 w-3/5 rotate-[12deg] origin-right', color: 'from-transparent via-brand-blue to-transparent',   delay: '0.5s', opacity: 'opacity-20' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px] bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(192,57,43,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(124,58,237,0.06)_0%,transparent_50%)]" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {LASERS.map((laser, i) => (
          <div key={i} className={`absolute h-px bg-gradient-to-r ${laser.color} ${laser.style} ${laser.opacity} animate-pulse`}
            style={{ animationDelay: laser.delay, animationDuration: '4s' }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="inline-flex items-center gap-3 bg-brand-red/10 border border-brand-red/25 px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          <span className="font-rajdhani text-brand-red text-xs font-medium tracking-[3px] uppercase">
            {COVERAGE_LABEL} · Guanacaste
          </span>
        </div>

        <h1 className="font-bebas text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-wide mb-6">
          <span className="text-gray-900 block">Tu fiesta,</span>
          <span className="text-brand-red block" style={{ textShadow: '0 0 40px rgba(192,57,43,0.25)' }}>tu evento,</span>
          <span className="block text-gray-900">tu karaoke.</span>
        </h1>

        <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-xl mb-4">
          Animación profesional, sonido de alta calidad y el mejor ambiente para tus eventos en Guanacaste.
        </p>

        <div className="flex items-center gap-3 mb-10">
          {['Animación', 'Eventos', 'Karaoke'].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="font-rajdhani text-xs tracking-[2px] uppercase text-gray-400">{item}</span>
              {i < 2 && <span className="w-px h-3 bg-black/15" />}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-light text-white
                       font-rajdhani font-bold text-base tracking-[2px] uppercase px-7 py-4
                       transition-all duration-300 hover:-translate-y-1
                       hover:shadow-[0_8px_30px_rgba(192,57,43,0.35)]
                       [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]">
            <MessageCircle size={20} /> Cotizar por WhatsApp
          </a>
          <a href="#precios"
            className="inline-flex items-center gap-3 border border-black/20 hover:border-brand-red
                       text-gray-700 hover:text-brand-red font-rajdhani font-semibold text-base
                       tracking-[2px] uppercase px-7 py-4 transition-all duration-300">
            <ChevronDown size={18} /> Ver Precios
          </a>
        </div>
      </div>
    </section>
  );
}
