import { MARQUEE } from "@/lib/site";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative z-10 border-y border-white/8 bg-[var(--bg-2)]/60 py-5">
      <div className="marquee">
        {[0, 1].map((track) => (
          <div className="marquee__track" key={track} aria-hidden={track === 1}>
            {items.map((word, i) => (
              <span key={`${track}-${i}`} className="flex items-center">
                <span className="display px-6 text-2xl md:text-3xl font-semibold text-white/85">
                  {word}
                </span>
                <span className="grad-bg h-1.5 w-1.5 rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
