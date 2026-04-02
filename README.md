# 삼성물산 패션부문 랜딩 페이지

삼성물산 패션부문의 반응형 랜딩 페이지입니다. 모바일, 태블릿, 데스크탑 환경에 최적화되어 있습니다.

## 🎨 주요 섹션

- **Header**: 로고 및 네비게이션
- **Hero Section**: 메인 비주얼 영역
- **Newsroom**: 최신 뉴스 및 콘텐츠
- **Brands**: 브랜드 포트폴리오
- **Career**: 채용 정보
- **Contact**: 연락처 정보
- **Footer**: 푸터 정보

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 2. 이미지 다운로드 (중요!)

프로젝트에서 사용하는 이미지를 다운로드해야 합니다.

#### Mac/Linux 사용자:
```bash
chmod +x download-images.sh
./download-images.sh
```

#### Windows 사용자 (PowerShell):
```powershell
.\download-images.ps1
```

#### 수동 다운로드:
자세한 다운로드 가이드는 `IMAGE_DOWNLOAD_GUIDE.md` 파일을 참고하세요.

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
pnpm dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)을 열어 확인할 수 있습니다.

## 📦 프로젝트 구조

```
.
├── public/
│   └── images/              # 이미지 파일들 (다운로드 필요)
│       ├── hero-bg.jpg
│       ├── hero-overlay.jpg
│       ├── news-1.jpg ~ news-4.jpg
│       ├── brand-1.jpg ~ brand-3.jpg
│       └── career-bg.jpg
├── src/
│   ├── app/
│   │   ├── components/      # React 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── NewsroomSection.tsx
│   │   │   ├── BrandsSection.tsx
│   │   │   ├── CareerSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SamsungLogo.tsx
│   │   └── App.tsx          # 메인 앱 컴포넌트
│   ├── imports/             # Figma에서 가져온 에셋
│   └── styles/              # 스타일 시트
├── download-images.sh       # 이미지 다운로드 스크립트 (Mac/Linux)
├── download-images.ps1      # 이미지 다운로드 스크립트 (Windows)
└── IMAGE_DOWNLOAD_GUIDE.md  # 이미지 다운로드 상세 가이드
```

## 🖼️ 이미지 관리

### 현재 상태
프로젝트는 Unsplash의 외부 URL을 사용하고 있습니다. GitHub에 푸시하기 전에 이미지를 다운로드해야 합니다.

### 이미지 다운로드 방법
1. `download-images.sh` (Mac/Linux) 또는 `download-images.ps1` (Windows) 스크립트를 실행
2. 이미지가 `public/images/` 폴더에 자동으로 다운로드됩니다
3. Git에 커밋하고 푸시합니다

### Git LFS 사용 (선택사항)
대용량 이미지 파일을 효율적으로 관리하려면 Git LFS를 사용하세요:

```bash
# Git LFS 설치
brew install git-lfs  # Mac
# 또는 https://git-lfs.github.com/ 에서 다운로드 (Windows)

# Git LFS 초기화
git lfs install

# .gitattributes 파일에서 주석 해제
# public/images/*.jpg filter=lfs diff=lfs merge=lfs -text
```

## 🛠️ 기술 스택

- **React**: UI 라이브러리
- **TypeScript**: 타입 안전성
- **Tailwind CSS v4**: 스타일링
- **Vite**: 빌드 도구

## 📱 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px ~ 1024px
- **데스크탑**: > 1024px

## 📄 라이선스

이 프로젝트에서 사용된 이미지는 Unsplash의 무료 라이선스를 따릅니다.
- Unsplash 라이선스: https://unsplash.com/license

## 🙋‍♂️ 문의

문제가 있거나 질문이 있으시면 이슈를 등록해주세요.
