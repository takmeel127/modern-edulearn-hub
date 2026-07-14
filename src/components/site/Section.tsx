import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(244,180,0,0.35),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(37,99,235,0.45),transparent_45%)]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-royal/30 blur-3xl animate-float-slow [animation-delay:2s]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
