/** Illustration for the AI card: a small neural network with a few nodes
 *  pulsing. Pure SVG, so it stays sharp and costs nothing to load. */
const layers = [
  [30, 70, 110],
  [20, 52, 88, 120],
  [20, 52, 88, 120],
  [50, 90],
];
const xs = [40, 120, 200, 280];

export default function AiArt({ className = "" }: { className?: string }) {
  const nodes = layers.flatMap((ys, li) => ys.map((y) => ({ x: xs[li], y, li })));

  return (
    <svg viewBox="0 0 320 140" className={className} aria-hidden>
      <defs>
        <linearGradient id="ai-edge" x1="0" x2="1">
          <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--color-accent2)" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="ai-glow">
          <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="140" fill="var(--color-bg-soft)" />
      <circle cx="160" cy="70" r="110" fill="url(#ai-glow)" />
      {layers.slice(0, -1).map((ys, li) =>
        ys.flatMap((y1) =>
          layers[li + 1].map((y2) => (
            <line
              key={`${li}-${y1}-${y2}`}
              x1={xs[li]}
              y1={y1}
              x2={xs[li + 1]}
              y2={y2}
              stroke="url(#ai-edge)"
              strokeWidth="0.8"
            />
          )),
        ),
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.li === 3 ? 7 : 5.5}
          fill="var(--color-surface)"
          stroke={n.li % 2 ? "var(--color-accent2)" : "var(--color-accent)"}
          strokeWidth="1.6"
          className={i % 3 === 0 ? "ai-pulse" : undefined}
          style={{ animationDelay: `${(i % 5) * 0.4}s` }}
        />
      ))}
    </svg>
  );
}
