export const ParticlesBackground = () => (
  <div className="css-particles" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, index) => (
      <span key={index} style={{ '--i': index } as React.CSSProperties} />
    ))}
  </div>
);
