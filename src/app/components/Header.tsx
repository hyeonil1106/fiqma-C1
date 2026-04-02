import { SamsungLogo } from "./SamsungLogo";
import svgPaths from "../../imports/svg-gglpr1yugh";

export function Header() {
  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SamsungLogo size={65} />
          <span
            className="text-[#1428a0] text-[16px] md:text-[18px] lg:text-[20px] font-medium whitespace-nowrap"
            style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
          >
            삼성물산
          </span>
          <span
            className="text-[#1428a0] text-[11px] md:text-[12px] font-medium whitespace-nowrap"
            style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
          >
            패션부문
          </span>
        </div>

        {/* Hamburger Menu */}
        <button className="relative shrink-0 w-10 h-10 flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 48"
          >
            <path d={svgPaths.p106fe700} fill="black" />
          </svg>
        </button>
      </div>
    </header>
  );
}
