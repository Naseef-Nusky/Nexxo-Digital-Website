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
          className={`font-display text-sm font-semibold tracking-[0.22em] uppercase ${
            light ? 'text-cyan' : 'text-blue'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          className={`font-display text-3xl font-bold tracking-tight md:text-5xl ${
            eyebrow ? 'mt-3' : ''
          } ${light ? 'text-white' : 'text-ink'}`}
        >
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p
          className={`mt-4 max-w-3xl text-lg md:text-xl ${
            light ? 'text-white/75' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
