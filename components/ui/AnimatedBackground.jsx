import { useEffect, useRef } from 'react';

// Colores de marca (rojo, púrpura, azul) — ajusta aquí si cambian
const BRAND_COLORS = [
  { r: 192, g: 57,  b: 43  }, // brand-red
  { r: 192, g: 57,  b: 43  }, // brand-red (más frecuente)
  { r: 139, g: 92,  b: 246 }, // brand-purple
  { r: 139, g: 92,  b: 246 }, // brand-purple
  { r: 59,  g: 130, b: 246 }, // brand-blue
];

const PARTICLE_COUNT  = 80;  // sube hasta ~120 si quieres más densidad
const GRID_SPACING    = 50;  // px entre puntos de la grilla
const GRID_DOT_RADIUS = 0.8; // tamaño de los puntos de grilla
const PARTICLE_MAX_SIZE = 2.5;

// ── Clase interna de partícula ────────────────────────────────────────────────
class Particle {
  constructor(w, h, initial = false) {
    this.w = w;
    this.h = h;
    this.reset(initial);
  }

  reset(initial = false) {
    this.x = Math.random() * this.w;
    this.y = initial ? Math.random() * this.h : this.h + 10;
    const c         = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
    this.r          = c.r;
    this.g          = c.g;
    this.b          = c.b;
    this.size       = Math.random() * PARTICLE_MAX_SIZE + 0.5;
    this.speed      = Math.random() * 0.4 + 0.1;
    this.opacity    = Math.random() * 0.5 + 0.15;
    this.opacityDir = (Math.random() - 0.5) * 0.005;
    this.drift      = (Math.random() - 0.5) * 0.3;
    this.pulse      = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.005;
  }

  update() {
    this.y      -= this.speed;
    this.x      += this.drift;
    this.pulse  += this.pulseSpeed;
    this.opacity += this.opacityDir;
    if (this.opacity > 0.65 || this.opacity < 0.05) this.opacityDir *= -1;
    if (this.y < -10 || this.x < -20 || this.x > this.w + 20) this.reset();
  }

  draw(ctx) {
    const glow = Math.sin(this.pulse) * 0.3 + 0.7;
    ctx.save();
    ctx.globalAlpha = this.opacity * glow;
    ctx.fillStyle   = `rgb(${this.r},${this.g},${this.b})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ── Clase de punto de grilla ──────────────────────────────────────────────────
class GridDot {
  constructor(x, y) {
    this.x           = x;
    this.y           = y;
    this.baseOpacity = Math.random() * 0.07 + 0.03;
    this.opacity     = this.baseOpacity;
    this.phase       = Math.random() * Math.PI * 2;
    this.speed       = Math.random() * 0.008 + 0.003;
  }

  update() {
    this.phase  += this.speed;
    this.opacity = this.baseOpacity + Math.sin(this.phase) * 0.04;
  }

  draw(ctx) {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle   = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, GRID_DOT_RADIUS, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function AnimatedBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], gridDots: [], raf: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;

      // Partículas
      stateRef.current.particles = Array.from(
        { length: PARTICLE_COUNT },
        () => new Particle(w, h, true),
      );

      // Grilla de puntos
      const dots = [];
      const cols = Math.ceil(w / GRID_SPACING) + 1;
      const rows = Math.ceil(h / GRID_SPACING) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push(new GridDot(i * GRID_SPACING, j * GRID_SPACING));
        }
      }
      stateRef.current.gridDots = dots;
    };

    const drawGradients = (w, h) => {
      // Glow rojo — esquina izquierda
      const g1 = ctx.createRadialGradient(w * 0.2, h * 0.5, 0, w * 0.2, h * 0.5, w * 0.5);
      g1.addColorStop(0, 'rgba(192,57,43,0.07)');
      g1.addColorStop(1, 'transparent');
      ctx.globalAlpha = 1;
      ctx.fillStyle   = g1;
      ctx.fillRect(0, 0, w, h);

      // Glow púrpura — esquina derecha
      const g2 = ctx.createRadialGradient(w * 0.8, h * 0.3, 0, w * 0.8, h * 0.3, w * 0.45);
      g2.addColorStop(0, 'rgba(139,92,246,0.06)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
    };

    const animate = () => {
      const { particles, gridDots } = stateRef.current;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Fondo base
      ctx.globalAlpha = 1;
      ctx.fillStyle   = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Glows radiales sutiles
      drawGradients(w, h);

      // Grilla
      gridDots.forEach(d => { d.update(); d.draw(ctx); });

      // Partículas de color
      ctx.globalAlpha = 1;
      particles.forEach(p => { p.update(); p.draw(ctx); });

      stateRef.current.raf = requestAnimationFrame(animate);
    };

    const onResize = () => { init(); };

    init();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position:   'fixed',
        inset:      0,
        width:      '100%',
        height:     '100%',
        zIndex:     0,
        pointerEvents: 'none',
      }}
    />
  );
}
