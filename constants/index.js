// ─── CONTACTO ─────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER  = '50683388115';
export const WHATSAPP_MESSAGE = 'Hola! Quiero cotizar un karaoke para mi evento 🎤';
export const WHATSAPP_URL     = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const EMAIL            = 'jocguada@gmail.com';
export const PHONE_DISPLAY    = '8338-8115';

// ─── REDES SOCIALES ───────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { name: 'Facebook',  url: 'https://www.facebook.com/guadakaraoke1/',         iconName: 'Facebook'  },
  { name: 'TikTok',    url: 'https://www.tiktok.com/@joseluisguadamu23',       iconName: 'TikTok'    },
  { name: 'YouTube',   url: 'https://www.youtube.com/@joseguadamuz4904',       iconName: 'YouTube'   },
  { name: 'WhatsApp',  url: WHATSAPP_URL,                                      iconName: 'WhatsApp'  },
];

// ─── COBERTURA ────────────────────────────────────────────────────────────────
export const COVERAGE_LABEL  = 'Cañas' //'Cañas · Tilarán · Liberia';// 
export const COVERAGE_REGION = 'Guanacaste, Costa Rica';

export const COVERAGE_ZONES = [
  {
    city:        'Cañas',
    region:      'Guanacaste',
    description: 'Ciudad central de operaciones. Eventos en salones, casas y espacios al aire libre en todo el cantón.',
    seoKeyword:  'karaoke Cañas Guanacaste',
  },
  {
    city:        'Tilarán',
    region:      'Guanacaste',
    description: 'Zona del lago Arenal y la montaña. Bodas con vista al lago, quinceañeras y eventos especiales.',
    seoKeyword:  'karaoke Tilarán Arenal',
  },
  {
    city:        'Liberia',
    region:      'Guanacaste',
    description: 'Capital de Guanacaste. Eventos corporativos, bodas y fiestas en la ciudad guanacasteca.',
    seoKeyword:  'karaoke Liberia Guanacaste',
  },
];

// ─── PAQUETES / PRECIOS ───────────────────────────────────────────────────────
export const PAQUETES = [
  {
    name:      'Básico',
    price:     '₡70,000',
    hours:     3,
    highlight: false,
    tag:       null,
    includes: [
      'Sonido profesional',
      'Micrófonos inalámbricos',
      'Pantalla de proyección',
      'Karaoke completo (8K+ canciones)',
      'Torre de iluminación LED',
    ],
    cta: 'Cotizar paquete básico',
  },
  {
    name:      'Premium',
    price:     '₡85,000',
    hours:     5,
    highlight: true,
    tag:       'Más solicitado',
    includes: [
      'Todo lo del Básico',
      'DJ profesional + Karaoke',
      'Luces LED ambiente completo',
      '2 horas adicionales cubiertas',
      'Setup completo con truss',
    ],
    cta: 'Cotizar paquete premium',
  },
  {
    name:      'Eventos Especiales',
    price:     'Desde ₡120,000',
    hours:     null,
    highlight: false,
    tag:       'Bodas · Empresas · XV años',
    includes: [
      'DJ profesional + Karaoke',
      'Animación personalizada',
      'Luces LED ambiente completo',
      'Sonido de alta potencia',
      'Show adaptado a tu evento',
    ],
    cta: 'Solicitar cotización especial',
  },
];

export const HORA_EXTRA = '₡15,000';

// ─── SERVICIOS ────────────────────────────────────────────────────────────────
// Para editar: cambiá name, desc y tags aquí. El componente Servicios.jsx
// se actualiza automáticamente. iconName debe existir en ICON_MAP de Servicios.jsx.
export const SERVICIOS = [
  {
    iconName: 'Mic2',
    name:     'Karaoke',
    desc:     'Más de 8,000 canciones disponibles en español, inglés y otros idiomas. Sistema digital con letras en pantalla, micrófonos inalámbricos y animación para que nadie se quede sin cantar.',
    tags:     ['8,000+ canciones', 'Español & inglés', 'Micrófonos inalámbricos', 'Pantalla HD'],
  },
  {
    iconName: 'Volume2',
    name:     'Amplificación de Sonido',
    desc:     'Equipos Peavey de alta potencia para que el sonido llegue con claridad a cada rincón del evento. Ideal para salones, espacios al aire libre y eventos de gran aforo.',
    tags:     ['Sonido Peavey', 'Alta potencia', 'Exteriores e interiores', 'Sin distorsión'],
  },
  {
    iconName: 'Sparkles',
    name:     'Eventos Especiales',
    desc:     'Producción completa para bodas, quinceañeras y eventos corporativos. DJ profesional, torre de iluminación LED con truss, animación personalizada y pantalla de proyección.',
    tags:     ['Bodas & XV años', 'Empresas', 'DJ + Karaoke', 'Torre de luces LED'],
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: 'Música a tu Gusto', label: 'Para que no pares de bailar' },
  { num: 'Experiencia en Eventos',   label: 'Compromiso y calidad' },
  { num: 'Pistas Actualizadas',  label: 'Clásicos y tendencias' },
  //{ num: '100%', label: 'Clientes Satisfechos'  },
];

// ─── TESTIMONIOS ──────────────────────────────────────────────────────────────
export const TESTIMONIOS = [
  {
    text:     'El karaoke de Guada fue lo mejor de la fiesta. El animador es increíble, la gente no quería parar. Definitivamente lo contrataré para la próxima quinceañera.',
    name:     'María Valverde',
    event:    'Quinceañera · Cañas',
    initials: 'MV',
  },
  {
    text:     'Usamos el servicio premium para el team building de nuestra empresa y fue un éxito total. Puntualidad, profesionalismo y sonido de primera calidad.',
    name:     'Carlos Rojas',
    event:    'Evento Corporativo · Liberia',
    initials: 'CR',
  },
  {
    text:     '¡Contratamos para la boda y fue mágico! El equipo se adaptó a todos nuestros gustos musicales. Los invitados todavía me hablan de eso.',
    name:     'Ana & Luis',
    event:    'Boda · Tilarán',
    initials: 'AL',
  },
];

// ─── GALERÍA ──────────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { label: 'Setup Completo',       src: '/equipo.jpg', large: true,  color: 'from-brand-red/20'    },
  { label: 'Torre de Iluminación', src: null,          large: false, color: 'from-brand-blue/20'   },
  { label: 'Sistema de Sonido',    src: null,          large: false, color: 'from-brand-purple/20' },
  { label: 'Pantalla Proyección',  src: null,          large: false, color: 'from-brand-red/15'    },
  { label: 'Animación en Vivo',    src: null,          large: false, color: 'from-brand-blue/15'   },
  { label: 'Equipo Profesional',   src: null,          large: false, color: 'from-brand-purple/15' },
];

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#servicios',   label: 'Servicios'   },
  { href: '#precios',     label: 'Precios'     },
  { href: '#galeria',     label: 'Galería'     },
  { href: '#cobertura',   label: 'Cobertura'   },
  { href: '#testimonios', label: 'Testimonios' },
];

// ─── CTA FEATURES ─────────────────────────────────────────────────────────────
export const CTA_FEATURES = [
  { iconName: 'Zap',     text: 'Respuesta en 2h'     },
  { iconName: 'Award',   text: 'Garantía de calidad' },
  { iconName: 'Users',   text: 'Animación incluida'  },
  { iconName: 'Volume2', text: 'Sonido Peavey Pro'   },
];

// ─── FOOTER NAV ───────────────────────────────────────────────────────────────
export const FOOTER_NAV_LINKS = [
  { href: '#servicios',   label: 'Servicios'   },
  { href: '#precios',     label: 'Precios'     },
  { href: '#galeria',     label: 'Galería'     },
  { href: '#cobertura',   label: 'Cobertura'   },
  { href: '#testimonios', label: 'Testimonios' },
];
