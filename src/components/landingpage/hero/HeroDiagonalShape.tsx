const HeroDiagonalShape = () => {
  return (
    // This div is ONLY responsible for drawing the shape.
    // It has no content inside.
    <div
      className="h-full w-full bg-white/75 backdrop-blur-sm [clip-path:polygon(0_0,80%_0,58%_100%,0%_100%)]"
    />
  );
};

export default HeroDiagonalShape;