import { useEffect, useRef, useState } from "react";
import { CV_URL } from "../data/site";

const links = [
  { href: "#ai", label: "AI" },
  { href: "#software", label: "Software" },
  { href: "#mechatronics", label: "Mechatronics" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll handling stays off React's render path: the progress bar is written
  // straight to the DOM once per frame, and `scrolled` only re-renders when it flips.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Active section = whichever section crosses a band around 40% down the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/95 border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="logo flex items-center gap-3" aria-label="M.H. Ishaqat — back to top">
          <span className="logo-mark w-9 h-9 rounded-xl grid place-items-center font-mono text-sm font-bold text-[#06251f] shadow-[0_0_20px_-6px_var(--color-accent)]">
            MH
          </span>
          <span className="font-mono text-[15px] tracking-tight">
            <span className="text-[var(--color-text-muted)]">M</span>
            <span className="text-[var(--color-accent)]">.</span>
            <span className="text-[var(--color-text-muted)]">H</span>
            <span className="text-[var(--color-accent)]">.</span>
            <span className="font-bold text-[var(--color-text)]">Ishaqat</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm text-[var(--color-text-muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative py-1 transition-colors hover:text-[var(--color-accent)] ${
                    active === l.href ? "text-[var(--color-accent)]" : ""
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px w-full bg-[var(--color-accent)] origin-left transition-transform duration-300 ${
                      active === l.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-3 py-1.5 rounded-md border border-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            CV ↗
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-text)] p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      <div
        aria-hidden
        className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)]"
        ref={progressRef}
        style={{ transform: "scaleX(0)" }}
      />

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg)]/95 border-b border-[var(--color-border)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 hover:text-[var(--color-accent)] transition-colors ${
                  active === l.href ? "text-[var(--color-accent)]" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CV_URL} target="_blank" rel="noreferrer" className="block py-2 text-[var(--color-accent)]">
              CV ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
