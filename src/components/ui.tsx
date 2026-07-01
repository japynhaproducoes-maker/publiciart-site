import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "grad" | "solid" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "grad", external, className = "" }: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold px-7 py-3.5 text-sm tracking-wide transition-all duration-200";
  const styles = {
    grad: "grad-bg text-[#0a0711] hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-fuchsia-500/20",
    solid: "bg-white text-[#0a0711] hover:bg-white/90 hover:-translate-y-0.5",
    ghost: "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
  }[variant];
  const cls = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative z-10 pt-36 pb-14 md:pt-44 md:pb-20 border-b border-white/8">
      <Container>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display mt-6 text-5xl md:text-7xl font-bold max-w-4xl">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">{sub}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  center,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display mt-4 text-3xl md:text-5xl font-bold">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {sub && <p className="mt-4 text-[var(--muted)] leading-relaxed">{sub}</p>}
    </div>
  );
}
