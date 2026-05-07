import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import StatsStrip  from './components/StatsStrip';
import Servicios   from './components/Servicios';
import Precios     from './components/Precios';
import Galeria     from './components/Galeria';
import Cobertura   from './components/Cobertura';
import Testimonios from './components/Testimonios';
import CTAFinal    from './components/CTAFinal';
import Footer      from './components/Footer';
import NeonDivider from './components/ui/NeonDivider';
import AnimatedBackground from './components/ui/AnimatedBackground';

export default function App() {
  return (
    
    <div className="min-h-screen bg-brand-dark text-white font-rajdhani">
     <AnimatedBackground />
      <Navbar />
      <Hero />
      <StatsStrip />
      <NeonDivider />
      <Servicios />
      <NeonDivider />
      <Precios />
      <NeonDivider />
      <Galeria />
      <NeonDivider />
      <Cobertura />
      <NeonDivider />
      <Testimonios />
      <NeonDivider />
      <CTAFinal />
      <Footer />
    </div>
  );
}
