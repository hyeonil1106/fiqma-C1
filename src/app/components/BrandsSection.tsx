import { useState, useRef } from "react";
import svgPaths from "../../imports/svg-gglpr1yugh";

const brandImages = [
  "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBjbG90aGluZyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc1MDU0ODY4fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBwcm9kdWN0JTIwY2xvdGhpbmclMjBtaW5pbWFsfGVufDF8fHx8MTc3NTExMDYxM3ww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1651083018668-33a9dc339579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwY2FzdWFsJTIwbW9kZXJufGVufDF8fHx8MTc3NTExMDYxM3ww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbmV3cyUyMGVkaXRvcmlhbCUyMG1hZ2F6aW5lfGVufDF8fHx8MTc3NTExMDU5N3ww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1627962534033-0818d66f82ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbHV4dXJ5JTIwYnJhbmQlMjBtZW5zd2VhcnxlbnwxfHx8fDE3NzUxMTA2MDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1651742532474-ea4401a34a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RyZWV0JTIwc3R5bGUlMjB3b21lbnxlbnwxfHx8fDE3NzUxMTA2MDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
];

const brandCategories = [
  ["MEN", "LADIES", "BEANPOLE"],
  ["CASUAL", "LIFESTYLE", "CSR"],
  ["GLOBAL"],
];

const brandNames = ["BEANPOLE", "HART SCHAFFNER", "GALAXY", "8SECONDS", "COUPANG", "COMPAREX"];

const brands = brandImages.map((image, i) => ({
  id: i + 1,
  image,
  name: brandNames[i],
  description: "코펜하겐을 베이스로 하는 개성 가득한 Scandi 2.0 스타일 감각의 브랜드",
}));

const CARD_WIDTH = 161;
const CARD_GAP = 16;

function BrandCard({ brand }: { brand: (typeof brands)[0] }) {
  return (
    <div className="flex flex-col gap-1 shrink-0" style={{ width: CARD_WIDTH }}>
      {/* Brand image */}
      <div className="relative overflow-hidden bg-[#8c8c8c] w-full" style={{ height: 164 }}>
        {brand.image && (
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={brand.image}
          />
        )}
      </div>
      {/* Brand name plate */}
      <div
        className="bg-[#1428a0] flex items-center justify-center shrink-0"
        style={{ width: 65, height: 25 }}
      >
        <span
          className="text-white text-[8px] font-bold tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {brand.name.slice(0, 8)}
        </span>
      </div>
      {/* Description */}
      <div className="px-1">
        <p
          className="text-black text-xs leading-snug"
          style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
        >
          {brand.description}
        </p>
      </div>
    </div>
  );
}

export function BrandsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "next" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      {/* Title */}
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <h2
          className="font-semibold text-black text-[32px] md:text-[48px] lg:text-[56px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Brands
        </h2>
      </div>

      {/* Category navigation */}
      <div className="px-4 md:px-6 lg:px-8 mb-4 md:mb-6">
        <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
          {brandCategories.map((row, rowIdx) =>
            row.map((cat) => (
              <button
                key={`${rowIdx}-${cat}`}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className="font-semibold transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  color: activeCategory === cat ? "#000" : "#8c8c8c",
                }}
              >
                {cat}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center gap-1 px-2 md:px-4">
        {/* Prev button */}
        <button
          onClick={() => scroll("prev")}
          className="relative rounded-full shrink-0 flex items-center justify-center hover:opacity-60 transition-opacity z-10"
          style={{ width: 40, height: 40, backgroundColor: "rgba(0,0,0,0.4)" }}
          aria-label="이전"
        >
          <div className="relative" style={{ width: 10, height: 24 }}>
            <svg
              className="absolute block w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 10 24"
            >
              <path d={svgPaths.p27718d00} fill="white" />
            </svg>
          </div>
        </button>

        {/* Scrollable brand list */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto flex-1 py-1"
          style={{ gap: CARD_GAP, scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => scroll("next")}
          className="relative rounded-full shrink-0 flex items-center justify-center hover:opacity-60 transition-opacity z-10"
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(0,0,0,0.4)",
            transform: "rotate(180deg)",
          }}
          aria-label="다음"
        >
          <div className="relative" style={{ width: 10, height: 24 }}>
            <svg
              className="absolute block w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 10 24"
            >
              <path d={svgPaths.p27718d00} fill="white" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
