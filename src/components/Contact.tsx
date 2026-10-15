import { CV_URL } from "../data/site";

const links = [
  { label: "Email", value: "mohammed.az.ishaqat@gmail.com", href: "mailto:mohammed.az.ishaqat@gmail.com" },
  { label: "LinkedIn", value: "/-mohammad-ishaqat99", href: "https://www.linkedin.com/in/-mohammad-ishaqat99" },
  { label: "GitHub", value: "@Mohnogard", href: "https://github.com/Mohnogard" },
  { label: "CV", value: "View / download ↗", href: CV_URL },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]/60">
      <div className="mx-auto max-w-4xl text-center">
        <h3 data-reveal className="text-3xl sm:text-4xl font-bold mb-4">Let's work together</h3>
        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
          Open to AI Engineer roles, and Backend / Full-Stack development positions.
          Based in Amman, Jordan — open to remote work.
        </p>

        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-lg glow-border bg-[var(--color-surface)] text-sm flex flex-col items-center min-w-[170px]"
            >
              <span className="text-[var(--color-accent)] font-mono text-xs mb-1">{l.label}</span>
              <span className="text-[var(--color-text)]">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
