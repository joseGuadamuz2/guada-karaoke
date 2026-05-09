import { MessageCircle, Zap, Award, Users, Volume2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL, CTA_FEATURES } from '../constants';

const ICON_MAP = { Zap, Award, Users, Volume2 };

function FeaturePill({ iconName, text }) {
  const Icon = ICON_MAP[iconName] ?? Zap;
  return (
    <div className="flex items-center gap-2 bg-brand-dark-3 border border-white/10 px-4 py-2 shadow-sm">
      <Icon size={14} className="text-brand-red" />
      <span className="font-rajdhani text-xs tracking-[1.5px] uppercase text-gray-400">{text}</span>
    </div>
  );
}

export default function CTAFinal() {
  const [ref, inView] = useInView();
  return (
    <div className="relative py-32 px-6 text-center bg-brand-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none bg-[radial-gradient(ellipse,rgba(230,0,0,0.15)_0%,transparent_70%)]" />
      <div ref={ref} className={`relative z-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-brand-red" />
          <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">¿Listo para el show?</span>
          <span className="w-8 h-px bg-brand-red" />
        </div>
        <h2 className="font-bebas text-[clamp(3rem,7vw,5.5rem)] tracking-wide leading-none max-w-2xl mx-auto mb-4 text-white">
          Reserva tu <span className="text-brand-red">Noche Perfecta</span> Hoy
        </h2>
        <p className="font-inter text-gray-400 mb-10 text-lg">Respuesta garantizada en menos de 2 horas. Sin compromiso.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-rajdhani font-bold text-lg tracking-[2px] uppercase px-10 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,211,102,0.25)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)]">
          <MessageCircle size={24} /> Cotizar Gratis por WhatsApp
        </a>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {CTA_FEATURES.map((feature, i) => <FeaturePill key={i} {...feature} />)}
        </div>
      </div>
    </div>
  );
}
