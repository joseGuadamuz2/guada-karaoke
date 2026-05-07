/**
 * Línea divisora con gradiente de neón.
 * Usada entre secciones de la landing.
 */
export default function NeonDivider() {
  return (
    <div
      className="w-full h-px opacity-30"
      style={{
        background:
          'linear-gradient(90deg, transparent, #C0392B, #8B5CF6, #3B82F6, transparent)',
      }}
    />
  );
}
