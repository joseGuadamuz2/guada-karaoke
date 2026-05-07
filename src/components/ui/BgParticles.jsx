/**
 * BgParticles — partículas flotantes con colores de marca
 * Se monta una sola vez en App.jsx, encima de body::before/after
 */

const PARTICLES = [
  // [left%, delay(s), duration(s), size(px), color, drift]
  ['8%',   0,    14, 3,   '#C0392B', '20px'  ],
  ['15%',  2,    18, 2,   '#8B5CF6', '-15px' ],
  ['23%',  5,    12, 1.5, '#C0392B', '25px'  ],
  ['31%',  1,    20, 2.5, '#3B82F6', '-20px' ],
  ['38%',  7,    16, 1,   '#8B5CF6', '10px'  ],
  ['45%',  3,    22, 3,   '#C0392B', '-30px' ],
  ['52%',  9,    15, 2,   '#8B5CF6', '18px'  ],
  ['59%',  0.5,  19, 1.5, '#C0392B', '-12px' ],
  ['67%',  6,    13, 2,   '#3B82F6', '22px'  ],
  ['74%',  4,    17, 3,   '#8B5CF6', '-25px' ],
  ['81%',  2.5,  21, 1,   '#C0392B', '15px'  ],
  ['88%',  8,    14, 2.5, '#8B5CF6', '-18px' ],
  ['93%',  1.5,  16, 2,   '#C0392B', '28px'  ],
  ['12%',  10,   18, 1.5, '#3B82F6', '-10px' ],
  ['56%',  11,   20, 1,   '#8B5CF6', '20px'  ],
  ['70%',  3.5,  15, 2,   '#C0392B', '-22px' ],
  ['42%',  6.5,  23, 1.5, '#8B5CF6', '12px'  ],
  ['27%',  9.5,  17, 2.5, '#C0392B', '-28px' ],
  ['85%',  4.5,  19, 1,   '#3B82F6', '16px'  ],
  ['5%',   7.5,  21, 2,   '#8B5CF6', '-14px' ],
];

export default function BgParticles() {
  return (
    <div className="bg-particles" aria-hidden="true">
      {PARTICLES.map(([left, delay, duration, size, color, drift], i) => (
        <span
          key={i}
          style={{
            left,
            bottom: '-10px',
            width:  `${size}px`,
            height: `${size}px`,
            background: color,
            '--drift': drift,
            animationDelay:    `${delay}s`,
            animationDuration: `${duration}s`,
            boxShadow: `0 0 ${size * 3}px ${color}99`,
          }}
        />
      ))}
    </div>
  );
}
