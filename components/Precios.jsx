import { Check, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { PAQUETES, HORA_EXTRA, WHATSAPP_URL } from '../constants';

function PaqueteCard({ name, price, hours, highlight, tag, includes, cta }) {
  const waMessage = encodeURIComponent(`Hola! Me interesa el paquete ${name} de ${price} + IVA. ¿Está disponible? 🎤`);
  const waUrl = `https://wa.me/50683388115?text=${waMessage}`;

  return (
    <div
      className={`relative flex flex-col p-8 border transition-all duration-300
        ${highlight
          ? 'border-brand-red bg-gradient-to-b from-brand-red/15 to-[#1e2645] shadow-[0_0_40px_rgba(192,57,43,0.15)] scale-105'
          : 'border-white/8 bg-[#1e2645]/80 hover:border-brand-red/30'
        }`}
    >
      {/* Badge */}
      {tag && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-rajdhani
                         font-bold tracking-[2px] uppercase whitespace-nowrap
                         ${highlight ? 'bg-brand-red text-white' : 'bg-brand-purple/80 text-white'}`}>
          {tag}
        </div>
      )}

      {/* Nombre */}
      <div className="font-rajdhani text-xs tracking-[3px] uppercase text-gray-500 mb-2">{name}</div>

      {/* Precio + IVA */}
      <div className="font-bebas text-5xl text-white tracking-wide leading-none mb-1">
        {price}
      </div>
      <div className="font-rajdhani text-[10px] tracking-[2px] uppercase text-gray-600 mb-1">
        + IVA
      </div>

      {/* Duración */}
      {hours ? (
        <div className="flex items-center gap-2 mb-6">
          <Zap size={13} className="text-brand-red" />
          <span className="font-rajdhani text-sm text-gray-500 tracking-wide">{hours} horas de animación</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 mb-6">
          <Zap size={13} className="text-brand-purple" />
          <span className="font-rajdhani text-sm text-gray-500 tracking-wide">Cotización personalizada</span>
        </div>
      )}

      {/* Divisor */}
      <div className={`w-full h-px mb-6 ${highlight ? 'bg-brand-red/30' : 'bg-white/5'}`} />

      {/* Incluye */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={15} className={`mt-0.5 flex-shrink-0 ${highlight ? 'text-brand-red' : 'text-gray-600'}`} />
            <span className="font-inter text-sm text-gray-400 leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-2 font-rajdhani font-bold text-sm
                    tracking-[2px] uppercase py-3.5 transition-all duration-300
                    [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]
                    ${highlight
                      ? 'bg-brand-red hover:bg-brand-red-light text-white hover:shadow-[0_0_30px_rgba(192,57,43,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-red/40'
                    }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Precios() {
  const [ref, inView] = useInView();

  return (
    <section id="precios" className="py-24 px-6 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado doble */}
        <div className="text-center mb-14">
          {/* Tag superior */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" />
            <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">
              Transparencia total
            </span>
            <span className="w-8 h-px bg-brand-red" />
          </div>

          {/* Título principal */}
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-2">
            Nuestros <span className="text-brand-red">Paquetes</span>
          </h2>

          {/* Subtítulo */}
          <p className="font-bebas text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-widest text-gray-500 mb-4">
            Elige <span className="text-white">El plan</span> · Que se adapte a tu evento y presupuesto.
          </p>

          <p className="font-inter text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Los precios indicados no incluyen IVA.
          </p>
        </div>

        {/* Grid de paquetes */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center
                      transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {PAQUETES.map((paquete, i) => (
            <PaqueteCard key={i} {...paquete} />
          ))}
        </div>

        {/* Hora extra + nota IVA */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <div className="inline-flex items-center gap-3 bg-white/3 border border-white/8 px-6 py-3">
            <Zap size={14} className="text-brand-red" />
            <span className="font-rajdhani text-sm tracking-[1.5px] uppercase text-gray-500">
              Hora extra: <strong className="text-white">{HORA_EXTRA}</strong>
              <span className="text-gray-700 ml-1 normal-case tracking-normal font-inter text-xs">+ IVA</span>
            </span>
          </div>

          <p className="font-inter text-xs text-gray-700 tracking-wide text-center">
            📅 Reservas abiertas · La fecha se aparta con adelanto via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

