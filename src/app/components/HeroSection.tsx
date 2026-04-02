const heroBg = "https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbW9kZWx8ZW58MXx8fHwxNzc1MDA2MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const heroOverlay = "https://images.unsplash.com/photo-1756483510864-5bc7bdc3cf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMHdvbWFuJTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc3NTExNTg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(320px, 52vw, 680px)" }}
    >
      {/* Main background image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={heroBg}
      />

      {/* Right-side fashion overlay image */}
      <div
        className="absolute top-0 right-0 h-full pointer-events-none"
        style={{ width: "60%" }}
      >
        <img
          alt=""
          className="w-full h-full object-cover object-center"
          src={heroOverlay}
        />
      </div>

      {/* Left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 text-white">
        {/* Title */}
        <div
          className="font-semibold leading-tight mb-5 md:mb-7"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(28px, 5vw, 64px)",
          }}
        >
          <p>Global</p>
          <p>Lifestyle</p>
          <p>Innovator</p>
        </div>

        {/* Description */}
        <div
          className="font-normal text-xs md:text-sm lg:text-base max-w-xs md:max-w-sm"
          style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
        >
          <p>우리는 변화와 혁신을 주도하는 기업으로서</p>
          <p>패션의 의미를 문화, 예술까지 확장하여</p>
          <p>전 세계 모든 사람들의 라이프스타일을 디자인할 것입니다.</p>
        </div>
      </div>
    </section>
  );
}