export default function FallingEffects() {
  const stars = Array.from({ length: 40 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-1">
      
      {/* Stars */}
      {stars.map((_, i) => (
        <span
          key={"star-" + i}
          className="falling-star"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 6 + "s",
            animationDuration: 4 + Math.random() * 6 + "s",
          }}
        />
      ))}
    </div>
  );
}
