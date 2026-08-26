import { Mail, MapPin, Phone } from 'lucide-react';
import { SocialIcon } from './ui/SocialIcons';
import { SOCIAL_LINKS, FOOTER_NAV_LINKS, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, COVERAGE_LABEL } from '../constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(230,0,0,0.5)] animate-pulse" />
            <span className="font-bebas text-xl tracking-[3px] text-white">GUADA KARAOKE</span>
          </div>
          <p className="font-rajdhani text-xs tracking-[2px] uppercase text-gray-400">La forma efectiva de alegrar tu fiesta.</p>
          <p className="font-inter text-sm text-gray-400 leading-relaxed max-w-xs">
            Servicio de karaoke profesional en <span className="text-gray-400">{COVERAGE_LABEL}</span>.
          </p>
          <div className="flex gap-3 mt-1">
            {SOCIAL_LINKS.map(({ name, url, iconName }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-brand-red transition-all duration-300">
                <SocialIcon iconName={iconName} size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-rajdhani text-[10px] tracking-[3px] uppercase text-gray-500 mb-5">Navegación</h4>
          <nav className="flex flex-col gap-3">
            {FOOTER_NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="font-rajdhani text-sm tracking-wide text-gray-400 hover:text-white transition-colors duration-300 w-fit relative group">
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-rajdhani text-[10px] tracking-[3px] uppercase text-gray-500 mb-5">Contacto</h4>
          <div className="flex flex-col gap-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 group">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 group-hover:border-brand-blue/50 transition-all">
                <Phone size={14} className="text-brand-blue" />
              </div>
              <div>
                <div className="font-rajdhani text-xs tracking-[1.5px] uppercase text-gray-500">Teléfono</div>
                <div className="font-rajdhani text-sm text-gray-400 group-hover:text-white transition-colors">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <div className="w-8 h-8 flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/20 group-hover:border-[#25D366]/50 transition-all">
                <SocialIcon iconName="WhatsApp" size={14} className="text-[#25D366]" />
              </div>
              <div>
                <div className="font-rajdhani text-xs tracking-[1.5px] uppercase text-gray-500">WhatsApp</div>
                <div className="font-rajdhani text-sm text-gray-400 group-hover:text-white transition-colors">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-red/10 border border-brand-red/20 group-hover:border-brand-red/50 transition-all">
                <Mail size={14} className="text-brand-red" />
              </div>
              <div>
                <div className="font-rajdhani text-xs tracking-[1.5px] uppercase text-gray-500">Email</div>
                <div className="font-rajdhani text-sm text-gray-400 group-hover:text-white transition-colors break-all">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-purple/10 border border-brand-purple/20">
                <MapPin size={14} className="text-brand-purple" />
              </div>
              <div>
                <div className="font-rajdhani text-xs tracking-[1.5px] uppercase text-gray-500">Cobertura</div>
                <div className="font-rajdhani text-sm text-gray-400">{COVERAGE_LABEL}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-rajdhani text-[11px] tracking-wide text-gray-500">© {year} Guada Karaoke · Guanacaste, Costa Rica · Todos los derechos reservados</p>
          <p className="font-rajdhani text-[11px] tracking-wide text-gray-500">Animación · Eventos · Karaoke</p>
        </div>
      </div>
    </footer>
  );
}
