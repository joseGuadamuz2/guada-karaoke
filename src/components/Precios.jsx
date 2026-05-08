import { Check, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { PAQUETES, HORA_EXTRA, WHATSAPP_URL } from '../constants';

function PaqueteCard({ name, price, hours, highlight, tag, includes, cta }) {
  const waMessage = encodeURIComponent(`Hola! Me interesa el paquete ${name} de ${price} + IVA. ¿Está disponible? 🎤`);
  const waUrl = `https://wa.me/50683388115?text=${waMessage}`;

  return (
    <div className={`relative flex flex-col p-8 border transition-all duration-300
      ${highlight
        ? 'border-brand-red bg-brand-red/5 shadow-[0_4px_30px_rgba(192,57,43,0.12)] scale-105'
        : 'border-black/10 bg-white hover:border-brand-red/40 hover:shadow-md'
      }`}>
      {tag && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-rajdhani font-bold tracking-[2px] uppercase whitespace-nowrap
          ${highlight ? 'bg-brand-red text-white' : 'bg-brand-purple text-white'}`}>
          {tag}
        </div>
      )}
      <div className="font-rajdhani text-xs tracking-[3px] uppercase text-gray-400 mb-2">{name}</div>
      <div className="font-bebas text-5xl text-gray-900 tracking-wide leading-none mb-1">{price}</div>
      <div className="font-rajdhani text-[14px] tracking-[2px] uppercase text-gray-400 mb-1">+ IVA</div>
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
      <div className={`w-full h-px mb-6 ${highlight ? 'bg-brand-red/20' : 'bg-black/8'}`} />
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={15} className={`mt-0.5 flex-shrink-0 ${highlight ? 'text-brand-red' : 'text-gray-400'}`} />
            <span className="font-inter text-sm text-gray-600 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
      <a href={waUrl} target="_blank" rel="noreferrer"
        className={`flex items-center justify-center gap-2 font-rajdhani font-bold text-sm
                    tracking-[2px] uppercase py-3.5 transition-all duration-300
                    [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]
                    ${highlight
                      ? 'bg-brand-red hover:bg-brand-red-light text-white hover:shadow-[0_4px_20px_rgba(192,57,43,0.35)]'
                      : 'bg-gray-900 hover:bg-gray-700 text-white'
                    }`}>
        {cta}
      </a>
    </div>
  );
}

export default function Precios() {
  const [ref, inView] = useInView();
  return (
    <section id="precios" className="py-24 px-6 bg-brand-dark-3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" />
            <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">Transparencia total</span>
            <span className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-2 text-gray-900">
            Nuestros <span className="text-brand-red">Paquetes</span>
          </h2>
          <p className="font-bebas text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-widest text-gray-400 mb-4">
            Elige <span className="text-gray-700">El plan</span> · Que se adapte a tu evento y presupuesto.
          </p>
          <p className="font-inter text-gray-400 text-sm max-w-md mx-auto leading-relaxed">Los precios indicados no incluyen IVA.</p>
        </div>
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {PAQUETES.map((paquete, i) => <PaqueteCard key={i} {...paquete} />)}
        </div>
        <div className="flex flex-col items-center gap-3 mt-10">
          <div className="inline-flex items-center gap-3 bg-white border border-black/10 px-6 py-3 shadow-sm">
            <Zap size={14} className="text-brand-red" />
            <span className="font-rajdhani text-sm tracking-[1.5px] uppercase text-gray-500">
              Hora extra: <strong className="text-gray-900">{HORA_EXTRA}</strong>
              <span className="text-gray-400 ml-1 normal-case tracking-normal font-inter text-xs">+ IVA</span>
            </span>
          </div>
          <p className="font-inter text-xs text-gray-400 tracking-wide text-center">
            📅 Reservas abiertas · La fecha se aparta con adelanto via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
