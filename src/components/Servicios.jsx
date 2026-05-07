import { Mic2, Music, Heart, Building2, Volume2, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICIOS } from '../constants';

// ─── Mapa de íconos ───────────────────────────────────────────────────────────
// Si agregás un iconName nuevo en constants/index.js → SERVICIOS,
// importalo arriba y añadilo aquí con el mismo nombre exacto.
const ICON_MAP = {
  Mic2,
  Music,
  Heart,
  Building2,
  Volume2,
  Sparkles,
};

// ─── Tarjeta individual ───────────────────────────────────────────────────────
function ServicioCard({ iconName, name, desc, tags }) {
  const Icon = ICON_MAP[iconName] ?? Mic2;

  return (
    <div
      className="group relative bg-[#1e2645]/70 p-8 border border-white/8
                 overflow-hidden transition-all duration-300 cursor-default
                 hover:-translate-y-1 hover:bg-[#1e2645] hover:border-brand-red/30"
    >
      {/* Línea superior animada en hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5
                   bg-gradient-to-r from-transparent via-brand-red to-transparent
                   scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />

      {/* Ícono */}
      <div className="relative w-12 h-12 border border-brand-red/30 flex items-center justify-center mb-6">
        <div className="absolute inset-[3px] bg-brand-red/5" />
        <Icon className="text-brand-red relative z-10" size={22} strokeWidth={1.5} />
      </div>

      {/* Nombre */}
      <h3 className="font-bebas text-2xl tracking-wide mb-3">{name}</h3>

      {/* Descripción */}
      <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="font-rajdhani text-[10px] tracking-[1.5px] uppercase
                       px-2.5 py-1 border border-white/8 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Sección principal ────────────────────────────────────────────────────────
export default function Servicios() {
  const [ref, inView] = useInView();

  return (
    <section id="servicios" className="py-24 px-6 bg-[#16213E]">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-brand-red" />
            <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">
              Lo que ofrecemos
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none">
            Nuestros <span className="text-brand-red">Servicios</span>
          </h2>
          <p className="font-inter text-gray-500 mt-3 text-sm leading-relaxed max-w-md">
            Soluciones para tu celebración o evento en Guanacaste.
          </p>
        </div>

        {/* Grid — se adapta automáticamente a la cantidad de items en SERVICIOS */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                      transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {SERVICIOS.map((servicio, i) => (
            <ServicioCard key={i} {...servicio} />
          ))}
        </div>

      </div>
    </section>
  );
}
