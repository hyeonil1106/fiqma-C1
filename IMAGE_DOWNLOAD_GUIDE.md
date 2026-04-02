# 이미지 다운로드 가이드

이 프로젝트에서 사용 중인 Unsplash 이미지들을 GitHub에 함께 올리기 위한 가이드입니다.

## 이미지 목록 및 다운로드 링크

### Hero Section (2개)
1. **hero-bg.jpg** (히어로 배경)
   - URL: https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1920&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/abd05ad64485/download?force=true)
   
2. **hero-overlay.jpg** (히어로 오버레이)
   - URL: https://images.unsplash.com/photo-1756483510864-5bc7bdc3cf22?w=1920&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/5bc7bdc3cf22/download?force=true)

### Newsroom Section (4개)
3. **news-1.jpg**
   - URL: https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/cc3ead9deb36/download?force=true)

4. **news-2.jpg**
   - URL: https://images.unsplash.com/photo-1651742532474-ea4401a34a10?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/ea4401a34a10/download?force=true)

5. **news-3.jpg**
   - URL: https://images.unsplash.com/photo-1627962534033-0818d66f82ed?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/0818d66f82ed/download?force=true)

6. **news-4.jpg**
   - URL: https://images.unsplash.com/photo-1635814314546-5ecfa8f1a647?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/5ecfa8f1a647/download?force=true)

### Brands Section (5개 고유 이미지)
7. **brand-1.jpg**
   - URL: https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/5ce5a59263bf/download?force=true)

8. **brand-2.jpg**
   - URL: https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/75f4056dfd05/download?force=true)

9. **brand-3.jpg**
   - URL: https://images.unsplash.com/photo-1651083018668-33a9dc339579?w=800&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/33a9dc339579/download?force=true)

### Career Section (1개)
10. **career-bg.jpg**
   - URL: https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1920&q=80
   - 다운로드 링크: [다운로드](https://unsplash.com/photos/6e237bc8b87d/download?force=true)

## 설치 방법

### 1단계: 폴더 구조 생성
프로젝트 루트에서 다음 폴더를 생성하세요:
```bash
mkdir -p public/images
```

### 2단계: 이미지 다운로드
위의 다운로드 링크를 클릭하거나 다음 curl 명령어를 사용하여 이미지를 다운로드하세요:

```bash
# Hero Section
curl -L "https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1920&q=80" -o public/images/hero-bg.jpg
curl -L "https://images.unsplash.com/photo-1756483510864-5bc7bdc3cf22?w=1920&q=80" -o public/images/hero-overlay.jpg

# Newsroom Section
curl -L "https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?w=800&q=80" -o public/images/news-1.jpg
curl -L "https://images.unsplash.com/photo-1651742532474-ea4401a34a10?w=800&q=80" -o public/images/news-2.jpg
curl -L "https://images.unsplash.com/photo-1627962534033-0818d66f82ed?w=800&q=80" -o public/images/news-3.jpg
curl -L "https://images.unsplash.com/photo-1635814314546-5ecfa8f1a647?w=800&q=80" -o public/images/news-4.jpg

# Brands Section
curl -L "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?w=800&q=80" -o public/images/brand-1.jpg
curl -L "https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=800&q=80" -o public/images/brand-2.jpg
curl -L "https://images.unsplash.com/photo-1651083018668-33a9dc339579?w=800&q=80" -o public/images/brand-3.jpg

# Career Section
curl -L "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1920&q=80" -o public/images/career-bg.jpg
```

### 3단계: 코드 수정
다운로드가 완료된 후, 컴포넌트 파일에서 Unsplash URL을 로컬 이미지 경로로 변경하세요.

변경 예시:
```tsx
// 변경 전
const heroBg = "https://images.unsplash.com/photo-1705232497552-abd05ad64485?...";

// 변경 후
const heroBg = "/images/hero-bg.jpg";
```

## 자동 변환 스크립트

아래 스크립트를 실행하면 자동으로 모든 이미지를 다운로드할 수 있습니다:

```bash
#!/bin/bash

# public/images 폴더 생성
mkdir -p public/images

# 이미지 다운로드
echo "이미지 다운로드 중..."

# Hero Section
curl -L "https://images.unsplash.com/photo-1705232497552-abd05ad64485?w=1920&q=80" -o public/images/hero-bg.jpg
curl -L "https://images.unsplash.com/photo-1756483510864-5bc7bdc3cf22?w=1920&q=80" -o public/images/hero-overlay.jpg

# Newsroom Section
curl -L "https://images.unsplash.com/photo-1563721465742-cc3ead9deb36?w=800&q=80" -o public/images/news-1.jpg
curl -L "https://images.unsplash.com/photo-1651742532474-ea4401a34a10?w=800&q=80" -o public/images/news-2.jpg
curl -L "https://images.unsplash.com/photo-1627962534033-0818d66f82ed?w=800&q=80" -o public/images/news-3.jpg
curl -L "https://images.unsplash.com/photo-1635814314546-5ecfa8f1a647?w=800&q=80" -o public/images/news-4.jpg

# Brands Section
curl -L "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?w=800&q=80" -o public/images/brand-1.jpg
curl -L "https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=800&q=80" -o public/images/brand-2.jpg
curl -L "https://images.unsplash.com/photo-1651083018668-33a9dc339579?w=800&q=80" -o public/images/brand-3.jpg

# Career Section
curl -L "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1920&q=80" -o public/images/career-bg.jpg

echo "다운로드 완료!"
```

위 스크립트를 `download-images.sh` 파일로 저장하고 실행하세요:
```bash
chmod +x download-images.sh
./download-images.sh
```

## 주의사항

1. **Unsplash 라이선스**: Unsplash 이미지는 상업적 용도로 무료로 사용 가능하지만, 가능하면 크레딧을 표기하는 것이 좋습니다.
2. **이미지 크기**: 프로덕션 환경에서는 이미지를 최적화하여 용량을 줄이는 것을 권장합니다.
3. **Git LFS**: 대용량 이미지 파일을 GitHub에 올릴 때는 Git LFS 사용을 고려하세요.

## Git LFS 설정 (선택사항)

대용량 이미지 파일을 효율적으로 관리하려면 Git LFS를 사용하세요:

```bash
# Git LFS 설치 (Mac)
brew install git-lfs

# Git LFS 초기화
git lfs install

# 이미지 파일 추적
git lfs track "public/images/*.jpg"
git lfs track "public/images/*.png"

# .gitattributes 파일 추가
git add .gitattributes

# 이미지 파일 추가 및 커밋
git add public/images/
git commit -m "Add local images"
git push
```
