import Navbar             from './components/Navbar';
import Hero               from './components/Hero';
import StatsStrip         from './components/StatsStrip';
import Servicios          from './components/Servicios';
import Precios            from './components/Precios';
import Galeria            from './components/Galeria';
import Cobertura          from './components/Cobertura';
import Testimonios        from './components/Testimonios';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import CTAFinal           from './components/CTAFinal';
import Footer             from './components/Footer';
import NeonDivider        from './components/ui/NeonDivider';
import BgParticles        from './components/ui/BgParticles';


export default function App() {
  return (
    <>
      {/* Partículas fuera del div principal para no ser tapadas */}
      <BgParticles />

      <div className="min-h-screen text-white font-rajdhani" style={{ background: 'transparent' }}>

        <Navbar />
        <Hero />
        <StatsStrip />
        <NeonDivider />
        <Servicios />
       {/*<NeonDivider />
        <Precios />*/} 
        <NeonDivider />
        <Galeria />
        <NeonDivider />
        <Cobertura />
        <NeonDivider />
        <PreguntasFrecuentes />
        <NeonDivider />
        {/* <Testimonios /> */}
        <NeonDivider />
        <CTAFinal />
        <Footer />
      </div>
    </>
  );
}
