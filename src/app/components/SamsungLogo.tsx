interface SamsungLogoProps {
  size?: number;
}

export function SamsungLogo({ size = 100 }: SamsungLogoProps) {
  const height = size * 0.332;
  return (
    <div
      className="overflow-clip relative shrink-0 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 33"
        style={{ width: size, height: height }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue oval background */}
        <rect x="0" y="0" width="100" height="33" rx="16.5" ry="16.5" fill="#034EA2" />
        {/* SAMSUNG text */}
        <text
          x="50"
          y="23.5"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          letterSpacing="1"
        >
          SAMSUNG
        </text>
      </svg>
    </div>
  );
}
