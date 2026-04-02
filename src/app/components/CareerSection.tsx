const careerBg = "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWxzJTIwdGVhbSUyMGNhcmVlcnxlbnwxfHx8fDE3NzUxMTU4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function CareerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        alt="Career background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={careerBg}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center gap-8 md:gap-10 py-12 md:py-14 lg:py-16 px-6 text-white text-center"
        style={{ minHeight: "280px" }}
      >
        {/* Title and description */}
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-10">
          <h2
            className="font-semibold text-[28px] md:text-[36px] lg:text-[40px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Career
          </h2>
          <p
            className="font-medium text-sm md:text-[20px] lg:text-[24px]"
            style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
          >
            삼성물산 패션부분의 미래를
            <br />
            함께 만들어갈 여러분을 기다립니다.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 md:gap-8 items-center justify-center">
          <button
            className="border border-white text-white font-semibold px-6 md:px-8 py-3 hover:bg-white hover:text-black transition-colors"
            style={{
              fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 20px)",
              minWidth: "100px",
            }}
          >
            채용안내
          </button>
          <button
            className="border border-white text-white font-semibold px-6 md:px-8 py-3 hover:bg-white hover:text-black transition-colors"
            style={{
              fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 20px)",
              minWidth: "100px",
            }}
          >
            직무소개
          </button>
        </div>
      </div>
    </section>
  );
}