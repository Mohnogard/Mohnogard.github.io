import { CV_URL } from "../data/site";
import { tracks } from "../data/tracks";
import AiArt from "./AiArt";

const socials = [
  { label: "GitHub", href: "https://github.com/Mohnogard" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/-mohammad-ishaqat99" },
  { label: "Email", href: "mailto:mohammed.az.ishaqat@gmail.com" },
];

const focus = ["Python", "Applied AI", "Backend Development", "C#/.NET"];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 px-6">
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="fade-up font-mono text-sm tracking-widest text-[var(--color-accent)] mb-4">
          AMMAN, JORDAN
        </p>
        <h1
          className="fade-up text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
          style={{ animationDelay: "100ms" }}
        >
          Mohammad Ishaqat
        </h1>
        <p
          className="fade-up mt-5 text-xl sm:text-2xl font-semibold leading-snug max-w-3xl mx-auto"
          style={{ animationDelay: "200ms" }}
        >
          Software Engineer building{" "}
          <span className="text-gradient-animated">AI-powered applications</span> and intelligent systems.
        </p>
        <p
          className="fade-up mt-5 font-mono text-sm sm:text-base text-[var(--color-text-muted)] flex flex-wrap justify-center gap-x-3 gap-y-1"
          style={{ animationDelay: "300ms" }}
        >
          {focus.map((f, i) => (
            <span key={f} className="flex items-center gap-3">
              {i > 0 && <span className="text-[var(--color-accent)]">·</span>}
              {f}
            </span>
          ))}
        </p>

        <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "400ms" }}>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[#06251f] text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--color-accent)] transition"
          >
            View CV ↗
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent-soft)] transition"
          >
            Get in Touch
          </a>
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5 text-left">
          {tracks.map((t, i) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="fade-up group rounded-2xl glow-border bg-[var(--color-surface)] overflow-hidden flex flex-col"
              style={{ animationDelay: `${550 + i * 120}ms` }}
            >
              <div className="h-36 overflow-hidden border-b border-[var(--color-border)]">
                {t.image ? (
                  <img
                    src={t.image}
                    alt=""
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <AiArt className="w-full h-full group-hover:scale-105 transition duration-500" />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-lg font-bold text-[var(--color-text)]">{t.label}</span>
                <span className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">{t.blurb}</span>
                <span className="mt-4 text-sm font-semibold text-[var(--color-accent)] flex items-center gap-1">
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
