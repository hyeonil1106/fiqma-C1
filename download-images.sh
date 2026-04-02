#!/bin/bash

# 삼성물산 패션부문 랜딩 페이지 이미지 다운로드 스크립트
# 이 스크립트는 프로젝트에서 사용하는 모든 Unsplash 이미지를 다운로드합니다.

# 색상 출력을 위한 변수
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}이미지 다운로드 시작${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# public/images 폴더 생성
mkdir -p public/images

# Hero Section 이미지
echo -e "${GREEN}[1/10] Hero 배경 이미지 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1920&q=80" -o public/images/hero-bg.jpg

echo -e "${GREEN}[2/10] Hero 오버레이 이미지 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1756483510864-5bc7bdc3cf22?w=1920&q=80" -o public/images/hero-overlay.jpg

# Newsroom Section 이미지
echo -e "${GREEN}[3/10] 뉴스룸 이미지 1 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?w=800&q=80" -o public/images/news-1.jpg

echo -e "${GREEN}[4/10] 뉴스룸 이미지 2 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1651742532474-ea4401a34a10?w=800&q=80" -o public/images/news-2.jpg

echo -e "${GREEN}[5/10] 뉴스룸 이미지 3 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1627962534033-0818d66f82ed?w=800&q=80" -o public/images/news-3.jpg

echo -e "${GREEN}[6/10] 뉴스룸 이미지 4 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1635814314546-5ecfa8f1a647?w=800&q=80" -o public/images/news-4.jpg

# Brands Section 이미지
echo -e "${GREEN}[7/10] 브랜드 이미지 1 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?w=800&q=80" -o public/images/brand-1.jpg

echo -e "${GREEN}[8/10] 브랜드 이미지 2 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=800&q=80" -o public/images/brand-2.jpg

echo -e "${GREEN}[9/10] 브랜드 이미지 3 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1651083018668-33a9dc339579?w=800&q=80" -o public/images/brand-3.jpg

# Career Section 이미지
echo -e "${GREEN}[10/10] 커리어 배경 이미지 다운로드 중...${NC}"
curl -L "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1920&q=80" -o public/images/career-bg.jpg

echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}다운로드 완료!${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo "다운로드된 이미지 파일:"
ls -lh public/images/*.jpg
echo ""
echo "이제 컴포넌트 파일의 이미지 URL을 로컬 경로로 변경해주세요."
echo "자세한 내용은 IMAGE_DOWNLOAD_GUIDE.md 파일을 참고하세요."
