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
export const COVERAGE_LABEL  = 'La Palma, Abangares'; // 'Cañas · Tilarán · Liberia';// 
export const COVERAGE_REGION = 'Guanacaste, Costa Rica';

export const COVERAGE_ZONES = [
  {
    city:        'La Palma, Abangares',
    region:      'CR',
    description: 'Nuestra ubicación principal. Animación y karaoke para eventos locales.',
    seoKeyword:  'karaoke La Palma Abangares',
  },
  {
    city:        'Todo Guanacaste',
    region:      'CR',
    description: 'Somos de Guanacaste, podés contactarnos para consultar nuestra zona de cobertura exacta.',
    seoKeyword:  'karaoke Guanacaste cobertura',
  }
];

// ─── PAQUETES / PRECIOS ───────────────────────────────────────────────────────
export const PAQUETES = [
  {
    name:      'Paquete Básico',
    price:     '₡70,000 + IVA',
    hours:     3,
    highlight: false,
    tag:       null,
    includes: [
      'Sonido profesional',
      'Micrófonos inalámbricos',
      'Pantalla de proyección',
      'Karaoke bailable',
      'Luces y máquina de humo',
      '3 horas de animación',
    ],
    cta: 'Cotizar paquete básico',
  },
  {
    name:      'Paquete Premium',
    price:     '₡85,000 + IVA',
    hours:     5,
    highlight: true,
    tag:       'Más solicitado',
    includes: [
       'Todo lo del Básico',
      '5 horas de animación',          
      'Hora extra: ₡15,000 + IVA',
    ],
    cta: 'Cotizar paquete premium',
  },
  {
    name:      'Eventos Especiales',
    price:     'Cotización personalizada',
    hours:     null,
    highlight: false,
    tag:       'Bodas · Empresas · XV años',
    includes: [
      'DJ + Karaoke',
      'Animación personalizada',
      'Luces LED ambiente completo',
      'Show adaptado a tu evento',
    ],
    cta: 'Solicitar cotización especial',
  },
];

export const HORA_EXTRA = '₡15,000';

// ─── SERVICIOS ────────────────────────────────────────────────────────────────
export const SERVICIOS = [
  {
    iconName: 'Mic2',
    name:     'Karaoke Bailable + DJ',
    desc:     'Para bares y eventos privados.',
    tags:     ['Música Bailable', 'Bares & eventos privados', 'Micrófonos inalámbricos', 'Pantalla HD'],
  },
  {
    iconName: 'Volume2',
    name:     'Amplificación & Transmisión',
    desc:     'Sonido para reuniones, celebraciones y transmisión de partidos en pantalla grande.',
    tags:     ['Sonido Profesional', 'Transmisión de partidos', 'Exteriores e interiores', 'Pantalla grande'],
  },
  {
    iconName: 'Sparkles',
    name:     'Eventos Especiales',
    desc:     'Bodas, quinceaños, graduaciones y más. Iluminacion DMX, animación personalizada y pantalla de proyección para los momentos que no se repiten.',
    tags:     ['Celebraciones', 'Actividades', 'Sonido de calidad', 'Luces'],
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
    event:    'Quinceañera · Abangares',
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
  { label: 'Setup Completo',      src: '/galeria/img9.jpg',  large: true,  color: 'from-brand-red/20'    },
  { label: 'Luces',               src: '/galeria/img12.jpg', large: false, color: 'from-brand-blue/20'   },
  { label: 'Sistema de Sonido',   src: '/equipo.jpg',        large: false, color: 'from-brand-purple/20' },
  { label: 'Pantalla Proyección', src: '/galeria/img3.jpg',  large: false, color: 'from-brand-red/15'    },
  { label: 'Animación en Vivo',   src: '/galeria/img11.jpg', large: false, color: 'from-brand-blue/15'   },
];

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#servicios',   label: 'Servicios'   },
  //{ href: '#precios',     label: 'Precios'     },
  { href: '#galeria',     label: 'Galería'     },
  { href: '#cobertura',   label: 'Cobertura'   },
  // { href: '#testimonios', label: 'Testimonios' },
];

// ─── CTA FEATURES ─────────────────────────────────────────────────────────────
export const CTA_FEATURES = [
  { iconName: 'Zap',     text: 'Respuesta en 2h'     },
  { iconName: 'Award',   text: 'Haz tu evento realidad'},
  { iconName: 'Users',   text: 'Arma tu fiesta hoy'},
  { iconName: 'Volume2', text: 'Contáctanos ya'   },
];

// ─── FOOTER NAV ───────────────────────────────────────────────────────────────
export const FOOTER_NAV_LINKS = [
  { href: '#servicios',   label: 'Servicios'   },
  //{ href: '#precios',     label: 'Precios'     },
  { href: '#galeria',     label: 'Galería'     },
  { href: '#cobertura',   label: 'Cobertura'   },
 // { href: '#testimonios', label: 'Testimonios' },
];