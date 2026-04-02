export function ContactSection() {
  return (
    <section className="w-full">
      <div className="flex flex-wrap items-stretch">
        {/* 고객 상담 */}
        <div className="flex-1 min-w-[280px] bg-[#f6f7f9] relative border-b border-[#8c8c8c]">
          <div className="px-4 py-10 flex flex-col gap-4">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <p
                className="text-black text-lg md:text-2xl lg:text-[28px] font-medium"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                고객상담실
              </p>
              <p
                className="text-[#6b6b6b] text-xs md:text-sm lg:text-base font-medium"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                평일 09:00 ~ 18:00 토,일,공휴일 휴무
              </p>
            </div>

            {/* Phone numbers */}
            <div className="flex flex-col gap-1 text-black whitespace-nowrap">
              <div className="flex items-center gap-8 md:gap-12">
                <span
                  className="font-semibold text-sm md:text-base lg:text-lg"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  전국
                </span>
                <span
                  className="font-medium text-base md:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  1599-0007
                </span>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <span
                  className="font-semibold text-sm md:text-base lg:text-lg"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  수신자부담
                </span>
                <span
                  className="font-medium text-base md:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  080-700-1472
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 온라인 문의 */}
        <div className="flex-1 min-w-[280px] bg-[#f6f7f9] relative border-b border-[#8c8c8c]">
          <div className="px-4 py-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p
                className="text-black text-lg md:text-2xl lg:text-[28px] font-medium"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                온라인 문의
              </p>
              <p
                className="text-black text-xs md:text-sm lg:text-base font-medium leading-relaxed"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                패션부문 제품 및 서비스에 대해 궁금하시거나 불편하신 사항에 대해 성실히 답변해 드리겠습니다.
              </p>
            </div>
            {/* Links */}
            <div className="flex gap-6 md:gap-8 items-center">
              <a
                href="#"
                className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity"
              >
                <span
                  className="underline text-xs md:text-sm font-medium"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  제품 A/S
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
                >
                  〉
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity"
              >
                <span
                  className="underline text-xs md:text-sm font-medium"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  매장서비스
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
                >
                  〉
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 판매위탁사업주 모집 */}
        <div className="flex-1 min-w-[280px] bg-[#f6f7f9]">
          <div className="px-4 py-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p
                className="text-black text-lg md:text-2xl lg:text-[28px] font-medium"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                판매위탁사업주 모집
              </p>
              <p
                className="text-black text-xs md:text-sm lg:text-base font-medium leading-relaxed"
                style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
              >
                삼성물산의 문화적 소명과 가치를 함께할 전문 지식과 열정을 고루 갖춘 판매위탁 사업주를 모집합니다.
              </p>
            </div>
            {/* Links */}
            <div className="flex gap-6 md:gap-8 items-center">
              <a
                href="#"
                className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity"
              >
                <span
                  className="underline text-xs md:text-sm font-medium"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  모집 안내
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
                >
                  〉
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity"
              >
                <span
                  className="underline text-xs md:text-sm font-medium"
                  style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
                >
                  지원등록
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
                >
                  〉
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
