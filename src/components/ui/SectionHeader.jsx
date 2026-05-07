/**
 * Encabezado reutilizable de sección.
 * Incluye tag superior, título con acento de color opcional y subtítulo.
 *
 * @param {string}  tag       - Texto pequeño sobre el título (ej: "Lo que ofrecemos")
 * @param {string}  title     - Primera línea del título
 * @param {string}  accent    - Segunda línea del título con color de acento
 * @param {string}  accentColor - Clase de color de Tailwind (ej: "text-brand-red")
 * @param {string}  [subtitle]  - Subtítulo opcional debajo del título
 */
export default function SectionHeader({ tag, title, accent, accentColor = 'text-brand-red', subtitle }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-px bg-brand-red" />
        <span className="font-rajdhani text-brand-red text-xs tracking-[4px] uppercase">
          {tag}
        </span>
      </div>

      <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none">
        {title}{' '}
        <span className={accentColor}>{accent}</span>
      </h2>

      {subtitle && (
        <p className="font-inter text-gray-600 mt-3 text-base leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}
