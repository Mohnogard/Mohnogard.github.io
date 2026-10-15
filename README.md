# Mohammad Ishaqat — Portfolio

Personal portfolio site, live at **https://mohnogard.github.io**.

Software Engineer building AI-powered applications and intelligent systems — Python · Applied AI · Backend Development · C#/.NET.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4. Deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Editing content

| What | Where |
| --- | --- |
| The three sections (AI / Software / Mechatronics): titles, intros, skills, hero cards | `src/data/tracks.ts` |
| Projects and smaller builds | `src/data/projects.ts` |
| Work experience and education | `src/data/experience.ts` |
| CV link and spoken languages | `src/data/site.ts` |
| Images, video, CV PDF | `public/` |
