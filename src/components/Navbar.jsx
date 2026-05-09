import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useNavScroll } from '../hooks/useNavScroll';
import { NAV_LINKS, WHATSAPP_URL } from '../constants';

export default function Navbar() {
  const scrolled = useNavScroll(20);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-brand-dark-2/95 backdrop-blur-xl border-b border-white/10 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(192,57,43,0.4)] animate-pulse" />
          <span className="font-bebas text-2xl tracking-[3px] text-white">GUADA KARAOKE</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-gray-400 hover:text-white uppercase text-sm tracking-widest font-rajdhani font-medium transition-colors duration-300 relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white
                     font-rajdhani font-bold text-sm tracking-[2px] uppercase px-5 py-2.5
                     transition-all duration-300 hover:shadow-[0_4px_20px_rgba(192,57,43,0.4)]
                     [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]">
          <MessageCircle size={16} /> Cotizar Ahora
        </a>
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(p => !p)} aria-label="Abrir menú">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-6 py-4 shadow-lg">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}
              className="block py-3 text-gray-300 hover:text-white uppercase tracking-widest text-sm font-rajdhani"
              onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-brand-red text-white font-rajdhani font-bold text-sm tracking-[2px] uppercase py-3 w-full">
            <MessageCircle size={16} /> Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
