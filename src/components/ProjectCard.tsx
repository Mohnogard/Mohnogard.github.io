import type { Project } from "../data/projects";
import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`rounded-2xl glow-border bg-[var(--color-surface)] p-6 sm:p-8 flex flex-col h-full ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h4 className="text-xl font-bold text-[var(--color-text)]">{project.name}</h4>
          <p className="text-[var(--color-accent)] text-sm mt-1">{project.tagline}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-md border border-[var(--color-border)] hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">{project.description}</p>

      {project.status && (
        <p className="mt-3 text-xs font-mono text-[var(--color-accent2)]">{project.status}</p>
      )}

      {project.images && project.images.length > 0 && (
        <ProjectGallery images={project.images} name={project.name} />
      )}

      {featured && project.highlights.length > 0 && (
        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent2)] shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
