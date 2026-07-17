# Botari

한국 전통문화 특화 생성형 AI 이미지 플랫폼의 보따리 이미지 생성 초기 화면을 구현한 React + Vite 프런트엔드입니다.

## 배포

이 프로젝트는 GitHub Pages에 자동 배포됩니다.

- 프로덕션 URL: https://dauuoon.github.io/botari/
- 브랜치: `main`에 푸시 시 GitHub Actions가 빌드 후 Pages에 배포합니다.

## 실행

```bash
npm install
npm run dev
```

프로덕션 빌드는 아래 명령으로 생성됩니다.

```bash
npm run build
```

## 구성

- `src/App.tsx`: 전체 레이아웃과 상태 관리
- `src/components/`: 헤더, 사이드바, 결과 패널, 아이콘 버튼
- `src/data/botariData.ts`: 샘플 옵션 데이터
- `src/styles.css`: 화면 전반 스타일
- `public/assets/logo/`: 로고 SVG 교체 위치
- `public/assets/icons/`: 아이콘 SVG 교체 위치
- `public/assets/styles/`: 스타일 썸네일 SVG 교체 위치

## 자산 교체 방식

로고, 아이콘, 스타일 썸네일은 모두 `public/assets/...` 아래의 SVG 파일만 바꾸면 화면에 반영되도록 구성했습니다.
컴포넌트 코드는 파일 경로만 바라보므로 디자인 파일 교체가 쉽습니다.
