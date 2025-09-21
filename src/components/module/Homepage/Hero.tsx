import bannerImage from "../../../assets/Banner/parcelbanner.png";

export default function Hero() {
  return (
    <header
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center bg-no-repeat"
    >
      {/* Dark/Light overlay (optional) */}
      <div className="absolute inset-0 bg-slate-900/50" />
    </header>
  );
}
