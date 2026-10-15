import type { CSSProperties } from "react";
import type { TrackInfo } from "../data/tracks";
import { projects, experiments } from "../data/projects";
import { roles } from "../data/experience";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import RoleTimeline from "./RoleTimeline";

const chip =
  "text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] border border-[var(--color-border)]";

function SubHeading({ children }: { children: string }) {
  return (
    <h3 data-reveal className="text-xl font-bold mt-16 mb-6 text-[var(--color-text)]">
      {children}
    </h3>
  );
}

/** One of the three page sections (AI, Software, Mechatronics): heading, intro and
 *  skills, then whatever roles, projects and smaller builds belong to that track. */
export default function TrackSection({ track, tinted = false }: { track: TrackInfo; tinted?: boolean }) {
  const trackRoles = roles.filter((r) => r.track === track.id);
  const trackProjects = projects.filter((p) => p.track === track.id);
  const trackExperiments = experiments.filter((e) => e.track === track.id);

  return (
    <section
      id={track.id}
      className={`px-6 py-24 border-t border-[var(--color-border)] ${tinted ? "bg-[var(--color-bg-soft)]/60" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-gradient">{track.title}</span>
        </h2>
        <p data-reveal className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
          {track.intro}
        </p>
        <div data-reveal className="mt-6 flex flex-wrap gap-2">
          {track.skills.map((s) => (
            <span key={s} className={chip}>
              {s}
            </span>
          ))}
        </div>

        {trackRoles.length > 0 && (
          <>
            <SubHeading>Experience</SubHeading>
            <RoleTimeline roles={trackRoles} showEducation={track.id === "mechatronics"} />
          </>
        )}

        {trackProjects.length > 0 && (
          <>
            <SubHeading>Projects</SubHeading>
            <div className="grid gap-6">
              {trackProjects.map((p) => (
                <div key={p.slug} data-reveal>
                  <ProjectCard project={p} featured />
                </div>
              ))}
            </div>
          </>
        )}

        {trackExperiments.length > 0 && (
          <>
            <SubHeading>Smaller builds</SubHeading>
            <div className="grid sm:grid-cols-2 gap-5">
              {trackExperiments.map((e, i) => (
                <div
                  key={e.slug}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}
                  className="rounded-xl p-5 glow-border bg-[var(--color-surface)]"
                >
                  <h4 className="font-semibold text-[var(--color-text)]">{e.name}</h4>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{e.description}</p>
                  {e.images && e.images.length > 0 && <ProjectGallery images={e.images} name={e.name} />}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className={chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
