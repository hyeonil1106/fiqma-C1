import svgPaths from "../../imports/svg-gglpr1yugh";

const newsImages = [
  "https://images.unsplash.com/photo-1641521953954-7f11e07cbb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWFnYXppbmUlMjBlZGl0b3JpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzUxMTU4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1651742532474-ea4401a34a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMGZhc2hpb24lMjB3b21lbnxlbnwxfHx8fDE3NzUxMTU4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zd2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzc1MDQwMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1635814314546-5ecfa8f1a647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzc1MTE1ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const newsItems = [
  {
    id: 1,
    image: newsImages[0],
    title: "삼성물산 패션, 온·오프라인 통합 프로모션 실시\n\"봄 시즌 최대 행사 '브랜드데이' 열린다\"",
    date: "2026, March 13",
  },
  {
    id: 2,
    image: newsImages[1],
    title: "삼성물산 패션, 온·오프라인 통합 프로모션 실시\n\"봄 시즌 최대 행사 '브랜드데이' 열린다\"",
    date: "2026, March 13",
  },
  {
    id: 3,
    image: newsImages[2],
    title: "삼성물산 패션, 온·오프라인 통합 프로모션 실시\n\"봄 시즌 최대 행사 '브랜드데이' 열린다\"",
    date: "2026, March 13",
  },
  {
    id: 4,
    image: newsImages[3],
    title: "삼성물산 패션, 온·오프라인 통합 프로모션 실시\n\"봄 시즌 최대 행사 '브랜드데이' 열린다\"",
    date: "2026, March 13",
  },
];

function NewsItem({ image, title, date }: { image: string; title: string; date: string }) {
  return (
    <div className="flex gap-4 items-start cursor-pointer hover:opacity-80 transition-opacity">
      {/* Image */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{ width: "clamp(90px, 20vw, 214px)", height: "100px" }}
      >
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <p
          className="font-semibold text-black whitespace-pre-wrap text-sm md:text-base lg:text-[18px]"
          style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
        >
          {title}
        </p>
        <p
          className="font-medium text-black text-xs md:text-sm lg:text-base"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {date}
        </p>
      </div>
    </div>
  );
}

export function NewsroomSection() {
  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-6 md:mb-8 gap-4">
          <h2
            className="font-semibold text-black text-[32px] md:text-[48px] lg:text-[56px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Newsroom
          </h2>
          <button className="flex items-center gap-4 hover:opacity-70 transition-opacity">
            <span
              className="font-semibold text-black text-sm md:text-base lg:text-[20px] whitespace-nowrap"
              style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
            >
              뉴스 전체보기
            </span>
            <span className="relative w-10 h-4">
              <svg
                className="absolute inset-0 w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 45 15"
              >
                <path d={svgPaths.p316e6300} fill="black" />
              </svg>
            </span>
          </button>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {newsItems.map((item) => (
            <NewsItem key={item.id} image={item.image} title={item.title} date={item.date} />
          ))}
        </div>
      </div>
    </section>
  );
}