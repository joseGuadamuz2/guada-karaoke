import { Mic2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './ui/SectionHeader';
import { GALLERY_ITEMS, WHATSAPP_URL } from '../constants';

/**
 * Ítem individual de la galería.
 * - Si src tiene valor  → muestra la imagen real
 * - Si src es null      → muestra placeholder con color de fondo
 *
 * Para agregar fotos: editá GALLERY_ITEMS en constants/index.js
 * y poné la ruta en src, ej: src: '/galeria/foto1.jpg'
 */
function GalleryItem({ label, src, color, large }) {
  return (
    <div
      className={`group relative overflow-hidden bg-brand-dark-3 cursor-pointer
                  ${large ? 'col-span-6 md:col-span-2 row-span-2' : 'col-span-3 md:col-span-2'}`}
    >
      {/* ── Imagen real o placeholder según src ── */}
      {src ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover
                     group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${color} to-brand-dark-2
                      flex items-center justify-center
                      group-hover:scale-105 transition-transform duration-500`}
        >
          <div className="text-center opacity-20">
            <Mic2
              size={large ? 48 : 24}
              className="mx-auto mb-2 text-white"
              strokeWidth={1}
            />
            {large && (
              <span className="font-rajdhani text-xs tracking-[2px] uppercase text-white">
                Tu foto aquí
              </span>
            )}
          </div>
        </div>
      )}

      {/* ── Label visible al hacer hover ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-end p-4">
        <span className="font-rajdhani text-[11px] tracking-[2px] uppercase text-white/80">
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * Sección Galería con grid asimétrico de 6 imágenes.
 */
export default function Galeria() {
  const [ref, inView] = useInView();

  return (
    <section id="galeria" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">

        {/* ── Encabezado ── */}
        <div
          ref={ref}
          className={`flex justify-between items-end mb-10 flex-wrap gap-4
                      transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <SectionHeader
            tag="Momentos reales"
            title="Nuestra"
            accent="Galería"
            accentColor="text-brand-purple"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-white/15 hover:border-brand-purple text-gray-400
                       hover:text-brand-purple font-rajdhani font-semibold text-sm
                       tracking-[2px] uppercase px-5 py-2.5 transition-all duration-300"
          >
            Ver más →
          </a>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-6 grid-rows-2 gap-1 h-[420px] md:h-[500px]">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
