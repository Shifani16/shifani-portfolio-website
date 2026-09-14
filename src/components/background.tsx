export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#7d7d7f]">
      {/* Pink Top Glow */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-pink-600/25 blur-[120px]" />
      {/* Deep Purple Center Glow */}
      <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[150px]" />
      {/* Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}