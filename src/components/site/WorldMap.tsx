type Region = { name: string; x: number; y: number; r?: number };

const DEFAULT_REGIONS: Region[] = [
  { name: "USA", x: 22, y: 40, r: 36 },
  { name: "Benelux", x: 48.5, y: 32, r: 14 },
  { name: "Western Balkans", x: 52, y: 40, r: 16 },
  { name: "Jordan", x: 57.5, y: 46, r: 12 },
];

export function WorldMap({
  className = "",
  regions = DEFAULT_REGIONS,
  showLabels = false,
}: {
  className?: string;
  regions?: Region[];
  showLabels?: boolean;
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/eb/BlankMap-World.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(63%) sepia(58%) saturate(2316%) hue-rotate(229deg) brightness(101%) contrast(94%) opacity(0.22)",
        }}
      />
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <radialGradient id="ddRegionGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {regions.map((r) => (
          <g key={r.name}>
            <circle
              cx={r.x}
              cy={r.y}
              r={(r.r ?? 14) / 4}
              fill="url(#ddRegionGlow)"
            />
            <circle
              cx={r.x}
              cy={r.y}
              r={0.6}
              fill="var(--color-accent)"
            />
            {showLabels && (
              <text
                x={r.x + 1.2}
                y={r.y + 0.4}
                fontSize="1.4"
                fill="currentColor"
                className="font-mono"
              >
                {r.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
