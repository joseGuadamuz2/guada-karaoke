import { MessageCircle, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL, COVERAGE_LABEL } from '../constants';

const LASERS = [
  { style: 'top-[30%] left-0 w-3/5 -rotate-[15deg]',              color: 'from-transparent via-brand-red to-transparent',    delay: '0s',   opacity: 'opacity-60' },
  { style: 'top-[40%] left-0 w-3/5 -rotate-[8deg]',               color: 'from-transparent via-brand-purple to-transparent', delay: '1s',   opacity: 'opacity-50' },
  { style: 'top-[25%] right-0 w-3/5 rotate-[12deg] origin-right',  color: 'from-transparent via-brand-blue to-transparent',   delay: '0.5s', opacity: 'opacity-40' },
  { style: 'top-[50%] left-0 w-3/5 rotate-[5deg]',                color: 'from-transparent via-brand-purple to-transparent', delay: '2s',   opacity: 'opacity-30' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px] bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(192,57,43,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/10 to-brand-dark" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {LASERS.map((laser, i) => (
          <div key={i} className={`absolute h-px bg-gradient-to-r ${laser.color} ${laser.style} ${laser.opacity} animate-pulse`}
            style={{ animationDelay: laser.delay, animationDuration: '4s' }} />
        ))}
      </div>
      <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="inline-flex items-center gap-3 bg-brand-red/10 border border-brand-red/30 px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          <span className="font-rajdhani text-brand-red text-xs font-medium tracking-[3px] uppercase">
            {COVERAGE_LABEL} · Guanacaste
          </span>
        </div>

        <h1 className="font-bebas text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-wide mb-6">
          <span className="text-white block">Tu fiesta,</span>
          <span className="text-brand-red block" style={{ textShadow: '0 0 40px rgba(192,57,43,0.4)' }}>tu evento,</span>
          <span className="block" style={{ WebkitTextStroke: '1px #8B5CF6', color: 'transparent', textShadow: '0 0 20px rgba(139,92,246,0.3)' }}>
            tu karaoke.
          </span>
        </h1>

        <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-xl mb-4">
          Animación profesional, sonido de alta calidad y el mejor ambiente para tus eventos en Guanacaste.
          {' '}
          {/* <strong className="text-white font-medium">Peavey de alta fidelidad</strong> y el mejor ambiente para tus eventos en Guanacaste. */}
        </p>

        {/* Tagline del logo */}
        <div className="flex items-center gap-3 mb-10">
          {['Animación', 'Eventos', 'Karaoke'].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="font-rajdhani text-xs tracking-[2px] uppercase text-gray-500">{item}</span>
              {i < 2 && <span className="w-px h-3 bg-white/20" />}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-light text-white
                       font-rajdhani font-bold text-base tracking-[2px] uppercase px-7 py-4
                       transition-all duration-300 hover:-translate-y-1
                       hover:shadow-[0_0_40px_rgba(192,57,43,0.5)]
                       [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]">
            <MessageCircle size={20} />
            Cotizar por WhatsApp
          </a>
          <a href="#precios"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-brand-purple
                       text-white hover:text-brand-purple font-rajdhani font-semibold text-base
                       tracking-[2px] uppercase px-7 py-4 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <ChevronDown size={18} />
            Ver Precios
          </a>
        </div>
      </div>
    </section>
  );
}
