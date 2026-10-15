import { education, type Role } from "../data/experience";
import ProjectGallery from "./ProjectGallery";

export default function RoleTimeline({ roles, showEducation = false }: { roles: Role[]; showEducation?: boolean }) {
  return (
    <ol className="relative border-l border-[var(--color-border)] ml-2 space-y-10">
      {roles.map((r) => (
        <li key={r.slug} data-reveal className="pl-8 relative">
          <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

          <div className="rounded-2xl glow-border bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-x-6 gap-y-1 flex-wrap">
              <div>
                <h4 className="text-xl font-bold text-[var(--color-text)]">{r.company}</h4>
                <p className="text-[var(--color-accent)] text-sm mt-1">{r.title}</p>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-muted)] sm:text-right">
                <p>{r.period}</p>
                <p>{r.location}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">{r.summary}</p>

            <div className={r.images ? "mt-1 grid md:grid-cols-2 gap-6 items-start" : ""}>
              <ul className="mt-4 space-y-2">
                {r.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent2)] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              {r.images && <ProjectGallery images={r.images} name={r.company} position="center" />}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {r.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}

      {showEducation && (
        <li data-reveal className="pl-8 relative">
          <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[var(--color-accent2)] ring-4 ring-[var(--color-bg)]" />
          <div className="rounded-2xl glow-border bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-x-6 gap-y-1 flex-wrap">
              <div>
                <h4 className="text-xl font-bold text-[var(--color-text)]">{education.degree}</h4>
                <p className="text-[var(--color-accent2)] text-sm mt-1">{education.school}</p>
              </div>
              <p className="text-xs font-mono text-[var(--color-text-muted)]">{education.period}</p>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">{education.note}</p>
          </div>
        </li>
      )}
    </ol>
  );
}
