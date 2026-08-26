import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const FAQ_ITEMS = [
  {
    q: '¿Cuánto cuesta contratar un karaoke para mi evento?',
    a: 'Nuestro paquete básico comienza en ₡70,000 + IVA por 3 horas e incluye sonido profesional, micrófonos inalámbricos, pantalla de proyección y karaoke con más de 8,000 canciones. El paquete premium cuesta ₡85,000 + IVA por 5 horas e incluye DJ profesional y luces LED ambiente. Para bodas y eventos especiales, cotización personalizada.',
  },
  {
    q: '¿Qué zonas de cobertura tienen?',
    a: 'Nuestra base está en La Palma, Abangares, Guanacaste. Cubrimos todo Guanacaste, incluyendo Cañas, Tilarán, Liberia, Nicoya y demás ciudades. Contactanos por WhatsApp para confirmar cobertura en tu zona.',
  },
  {
    q: '¿Cuántas canciones tiene el karaoke?',
    a: 'Contamos con más de 8,000 canciones en español, inglés y otros idiomas. Nuestras pistas se actualizan periódicamente para incluir los éxitos actuales y los clásicos que nunca pasan de moda.',
  },
  {
    q: '¿Sirve para bodas y quinceañeras?',
    a: '¡Por supuesto! Nuestro paquete de Eventos Especiales está diseñado para bodas, quinceañeras, graduaciones y eventos corporativos. Incluye DJ + Karaoke, animación personalizada, luces LED ambiente completo y un show adaptado a tu evento.',
  },
  {
    q: '¿Cómo puedo reservar?',
    a: 'El proceso es simple: escribinos por WhatsApp al +506 8338-8115 contándonos sobre tu evento (fecha, cantidad de invitados, tipo de evento). Te respondemos en menos de 2 horas con disponibilidad y cotización.',
  },
  {
    q: '¿El equipo de sonido es profesional?',
    a: 'Sí, utilizamos equipos de sonido de marca reconocida, micrófonos inalámbricos de alta calidad, pantallas de proyección HD y torres de iluminación LED. Todo el equipo es transportado e instalado por nuestro equipo técnico.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-rajdhani text-base tracking-wide text-gray-300 group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-brand-red' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
      >
        <p className="font-inter text-sm text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function PreguntasFrecuentes() {
  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <SectionHeader
          tag="Dudas"
          title="Preguntas"
          accent="Frecuentes"
          subtitle="Resolvemos las consultas más comunes sobre nuestro servicio de karaoke y animación."
        />
        <div className="max-w-3xl">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
