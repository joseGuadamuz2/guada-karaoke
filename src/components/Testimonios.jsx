import { Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './ui/SectionHeader';
import { TESTIMONIOS } from '../constants';

/**
 * Tarjeta individual de testimonio.
 *
 * @param {object} props
 * @param {string} props.text      - Texto del testimonio
 * @param {string} props.name      - Nombre del cliente
 * @param {string} props.event     - Tipo de evento y lugar
 * @param {string} props.initials  - Iniciales para el avatar
 */
function TestimonioCard({ text, name, event, initials }) {
  return (
    <div
      className="relative bg-brand-dark border border-white/5 p-8
                 hover:border-brand-red/25 hover:shadow-[0_0_30px_rgba(192,57,43,0.05)]
                 transition-all duration-300"
    >
      {/* Comillas decorativas */}
      <span className="absolute -top-3 left-6 font-bebas text-8xl text-brand-red/25 leading-none select-none">
        "
      </span>

      {/* Estrellas */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-brand-red fill-brand-red" />
        ))}
      </div>

      <p className="font-inter text-gray-500 text-[0.9rem] leading-relaxed italic mb-6">
        "{text}"
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center
                        font-bebas text-base text-white flex-shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-rajdhani font-bold text-[0.9rem] tracking-wide">{name}</div>
          <div className="font-rajdhani text-[0.75rem] text-gray-600 tracking-wide uppercase mt-0.5">
            {event}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Sección Testimonios con grid de 3 tarjetas.
 */
export default function Testimonios() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonios" className="py-24 px-6 bg-brand-dark-2">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          tag="Lo que dicen"
          title="Nuestros"
          accent="Clientes"
          accentColor="text-brand-blue"
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12
                      transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {TESTIMONIOS.map((testimonio, i) => (
            <TestimonioCard key={i} {...testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}
