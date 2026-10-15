import type { CSSProperties } from "react";
import { CEFR, languages } from "../data/site";
export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-8">
          <span className="text-gradient">About me</span>
        </h2>

        <p data-reveal className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-3xl">
          I started as a Mechatronics Engineer. Working across companies in Germany — Pilz, Bosch
          and a Munich photonics startup — I got the chance to work diverse jobs, from building a
          robot vehicle, to writing the software that evaluates optical measurement systems, to
          designing control electronics. Somewhere in that process I ended up spending most of my time writing
          software, and that's where I kept going: first full-stack web development, now AI
          engineering. I'm currently looking for a role as an{" "}
          <span className="text-[var(--color-text)] font-semibold">AI Engineer</span>, or in{" "}
          <span className="text-[var(--color-text)] font-semibold">Backend / Full-Stack development</span>.
        </p>

        <div className="mt-14">
          <h4 data-reveal className="text-sm font-mono tracking-widest text-[var(--color-text-muted)] mb-5">
            LANGUAGES
          </h4>
          <div className="grid sm:grid-cols-3 gap-5">
            {languages.map((l, i) => (
              <div
                key={l.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as CSSProperties}
                className="rounded-xl p-5 glow-border bg-[var(--color-surface)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-semibold text-[var(--color-text)]">{l.name}</span>
                  <span className="font-mono text-sm font-semibold text-gradient">{l.level}</span>
                </div>
                <div className="mt-4 grid grid-cols-6 gap-1.5" aria-label={`${l.name}: ${l.level}`}>
                  {CEFR.map((c, ci) => (
                    <div key={c}>
                      <div
                        className={`meter-seg h-1.5 rounded-full ${ci < l.cefr ? "on" : ""}`}
                        style={{ "--i": ci } as CSSProperties}
                      />
                      <span className="block mt-1.5 text-center font-mono text-[10px] text-[var(--color-text-muted)]">
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[var(--color-text-muted)]">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
