export function BackgroundImage({
  className,
  backgroundFixed,
}: {
  className?: string;
  backgroundFixed?: boolean;
}) {
  return (
    <div className={`absolute top-0 block h-full w-full ${className}`}>
      <div
        className={`absolute block h-full w-full bg-[url('./assets/HeroSection2-darken.jpg')] bg-cover bg-center ${backgroundFixed && "bg-fixed"}`}
      />
      <div className="absolute block h-full w-full bg-neutral-800 opacity-75" />
    </div>
  );
}
