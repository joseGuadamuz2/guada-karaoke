import { MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { COVERAGE_ZONES, COVERAGE_REGION, WHATSAPP_URL } from '../constants';

function CityCard({ city, region, description, seoKeyword, index }) {
  const colors = ['border-brand-red/30', 'border-brand-purple/30', 'border-brand-blue/30'];
  const dots   = ['bg-brand-red', 'bg-brand-purple', 'bg-brand-blue'];
  const nums   = ['text-brand-red', 'text-brand-purple', 'text-brand-blue'];
  return (
    <div className={`relative bg-white border ${colors[index]} p-8 transition-all duration-400 hover:shadow-md`}>
      <div className={`font-bebas text-6xl ${nums[index]} opacity-10 absolute top-4 right-6 leading-none select-none`}>0{index + 1}</div>
      <div className={`w-10 h-10 flex items-center justify-center border ${colors[index]} mb-5`}>
        <MapPin size={18} className={nums[index]} />
      </div>
      <h3 className="font-bebas text-3xl tracking-wide mb-1 text-gray-900">{city}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-1.5 h-1.5 rounded-full ${dots[index]}`} />
        <span className="font-rajdhani text-xs tracking-[2px] uppercase text-gray-400">{region}</span>
      </div>
      <p className="font-inter text-sm text-gray-500 leading-relaxed">{description}</p>
      <span className="sr-only">{seoKeyword}</span>
    </div>
  );
}

export default function Cobertura() {
  const [ref, inView] = useInView();
  return (
    <section id="cobertura" className="py-24 px-6 bg-brand-dark-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-brand-red" />
              <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">{COVERAGE_REGION}</span>
            </div>
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none text-gray-900">
              Zona de <span className="text-brand-purple">Cobertura</span>
            </h2>
            <p className="font-inter text-gray-500 mt-3 text-base max-w-md">Llevamos el show hasta tu evento en las principales ciudades de Guanacaste.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="self-start lg:self-auto inline-flex items-center gap-2 border border-black/15 hover:border-brand-red text-gray-500 hover:text-brand-red font-rajdhani font-semibold text-sm tracking-[2px] uppercase px-5 py-2.5 transition-all duration-300">
            <MapPin size={14} /> ¿Cubrimos tu zona?
          </a>
        </div>
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {COVERAGE_ZONES.map((zone, i) => <CityCard key={zone.city} {...zone} index={i} />)}
        </div>
        <p className="text-center font-inter text-xs text-gray-400 mt-8 tracking-wide">
          ¿Tu ciudad no aparece? Escribinos — cubrimos zonas adicionales según disponibilidad.
        </p>
      </div>
    </section>
  );
}