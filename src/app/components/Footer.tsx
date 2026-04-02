import svgPaths from "../../imports/svg-gglpr1yugh";

const footerLinks = [
  ["웹접근성", "개인정보 처리방침"],
  ["고정형 영상정보처리방침", "보안신고"],
  ["안전보건 경영방침", "이메일주소 무단수집거부"],
];

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Footer navigation links */}
      <div className="flex flex-col items-center gap-4 py-10 md:py-12 lg:py-16 px-4">
        {footerLinks.map((row, idx) => (
          <div key={idx} className="flex items-center gap-4 flex-wrap justify-center">
            {row.map((link) => (
              <a
                key={link}
                href="#"
                className="text-black hover:underline px-2 py-1"
                style={{
                  fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  fontWeight: 500,
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar: Social icons + Family site */}
      <div className="flex items-center justify-between px-4 pb-6 md:pb-8">
        {/* Social icons */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
          {/* Facebook */}
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
            <div className="relative w-5 h-5">
              <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2c54af00} fill="#8C8C8C" />
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
            <div className="relative w-5 h-5">
              <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3450cf00} fill="#8C8C8C" />
              </svg>
            </div>
          </a>

          {/* YouTube */}
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
            <div className="relative w-5 h-5">
              <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2c7a66c0} fill="#8C8C8C" />
              </svg>
            </div>
          </a>
        </div>

        {/* Family site button */}
        <button
          className="flex items-center gap-4 bg-[#8c8c8c] text-black font-medium rounded-2xl px-4 py-2 hover:bg-[#7a7a7a] transition-colors"
          style={{
            fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
            fontSize: "clamp(12px, 1.5vw, 16px)",
          }}
        >
          <span>Family site</span>
          <span>∧</span>
        </button>
      </div>

      {/* Copyright */}
      <div className="px-4 pb-4">
        <p
          className="text-[#8c8c8c] text-xs"
          style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
        >
          © Samsung C&T Corporation Fashion Division. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
