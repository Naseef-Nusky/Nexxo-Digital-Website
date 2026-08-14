export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  className = '',
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className={`font-display text-xs font-semibold tracking-[0.16em] uppercase md:text-sm md:tracking-[0.22em] ${
            light ? 'text-cyan' : 'text-blue'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          className={`font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl ${
            eyebrow ? 'mt-2 md:mt-3' : ''
          } ${light ? 'text-white' : 'text-ink'}`}
        >
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p
          className={`mt-3 max-w-3xl text-base leading-relaxed md:mt-4 md:text-xl ${
            light ? 'text-white/75' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
