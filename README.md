# Stackflow Test

Stackflow 기반 모바일 웹 앱 + **로컬 Mobile Design System** 프로젝트입니다.

## 시작하기

```bash
npm install
npm run dev
```

`dev` / `build` 실행 시 아이콘 manifest(`icons:generate`)가 자동으로 생성됩니다.

## 프로젝트 구조

```
src/
├── design-system/     # 독립 React DS (TDS 토큰·패턴 기반)
├── activities/        # Stackflow Activity 화면
├── components/        # 앱 전용 레이아웃 (BottomNav 등)
├── stackflow.ts       # Stackflow 설정
└── index.css          # Pretendard + DS base.css + Tailwind @theme
```

## Design System

TDS Tier 1·2 컴포넌트, SVG 아이콘, 터치 피드백이 포함된 로컬 디자인 시스템입니다.

| 문서 | 내용 |
|------|------|
| [`src/design-system/README.md`](./src/design-system/README.md) | 전체 가이드 — Provider, 컴포넌트 API, 터치 피드백, 토큰 |
| [`src/design-system/icons/README.md`](./src/design-system/icons/README.md) | 아이콘 추가·fetch 동작·mono/fill |

### 빠른 예시

```tsx
import { DSProvider, Text, Button, ListRow } from './design-system'

function App() {
  return (
    <DSProvider>
      <Text typography="t5">본문</Text>
      <Button color="primary" variant="fill" display="full">확인</Button>
    </DSProvider>
  )
}
```

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (아이콘 manifest 자동 생성) |
| `npm run build` | 프로덕션 빌드 |
| `npm run icons:generate` | SVG → manifest + `public/icons/` 복사 |

## 기술 스택

- React + TypeScript + Vite
- Stackflow (`@stackflow/react`)
- Framer Motion (DS 터치 피드백)
- Pretendard (npm)
- Tailwind CSS v4
