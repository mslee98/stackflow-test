# Icons

TDS 스타일 SVG 아이콘 세트입니다. **TSX 컴포넌트 없이 SVG 파일만** `mono/` · `fill/`에 넣으면 빌드 스크립트가 manifest를 생성하고, 런타임에 `fetch`로 로드합니다.

> 600개 이상 아이콘을 JS 번들에 넣지 않기 위한 구조입니다. `npm run build` 결과물 크기는 아이콘 개수에 거의 영향받지 않습니다.

---

## 목차

1. [동작 원리](#동작-원리)
2. [폴더 구조](#폴더-구조)
3. [아이콘 추가하기](#아이콘-추가하기)
4. [사용법](#사용법)
5. [mono vs fill](#mono-vs-fill)
6. [TypeScript 자동완성](#typescript-자동완성)
7. [자주 쓰는 아이콘](#자주-쓰는-아이콘)
8. [문제 해결](#문제-해결)

---

## 동작 원리

```
┌─────────────────────────────────────────────────────────────┐
│  개발자: mono/icon-arrow-right-mono.svg 추가                  │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  npm run icons:generate  (dev/build 시 자동)                  │
│  scripts/generate-icon-registry.mjs                         │
│    1. SVG → public/icons/mono/ 복사                          │
│    2. registry.generated.ts manifest 생성 (name ↔ filename)  │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  런타임: <Icon name="icon-arrow-right-mono" />               │
│    1. manifest에서 filename 조회                              │
│    2. fetch('/icons/mono/icon-arrow-right-mono.svg')         │
│    3. prepareMonoSvg — fill → currentColor 치환              │
│    4. Map 캐시에 저장 → 이후 동일 아이콘은 fetch 생략         │
│    5. dangerouslySetInnerHTML로 SVG 렌더                     │
└─────────────────────────────────────────────────────────────┘
```

| 단계 | 파일 | 역할 |
|------|------|------|
| 소스 | `icons/mono/*.svg` | Git에 커밋되는 원본 |
| 생성물 | `registry.generated.ts` | name → filename manifest (자동 생성, 수정 금지) |
| 생성물 | `public/icons/` | Vite 정적 호스팅 (`.gitignore`, 빌드 시 재생성) |
| 런타임 | `registry.ts` | resolve, fetch, 메모리 캐시 |
| 런타임 | `Icon.tsx` | React 컴포넌트 (로딩 플레이스홀더 포함) |
| 유틸 | `utils.ts` | `prepareMonoSvg`, `prepareFillSvg`, URL 생성 |

---

## 폴더 구조

```
icons/
├── mono/                    # 단색 아이콘 (667종) — color prop으로 색상 변경
├── fill/                    # 멀티컬러 아이콘 (원본 색상 유지)
├── registry.generated.ts    # AUTO-GENERATED manifest
├── registry.ts              # fetch + 캐시 + ICON 상수
├── Icon.tsx                 # 아이콘 컴포넌트
├── utils.ts                 # SVG 전처리
├── index.ts                 # Public API
└── README.md
```

---

## 아이콘 추가하기

### 1. SVG 파일 복사

`mono/` 또는 `fill/`에 `.svg` 파일을 넣습니다.

### 2. manifest 갱신

```bash
npm run icons:generate
```

`dev` / `build` 실행 시에도 자동으로 돌아갑니다 (`package.json`의 `predev` / `prebuild`).

### 3. 사용

```tsx
<Icon name="icon-my-new-icon-mono" size={24} color="grey600" />
```

### 파일명 규칙

소스·public 모두 **`icon-이름-mono.svg`** 형식을 사용합니다 (쉼표 alias 없음).

| 파일명 | 등록되는 `name` |
|--------|-----------------|
| `icon-arrow-right-mono.svg` | `icon-arrow-right-mono` |

TDS 원본에 쉼표 alias가 붙은 파일은 `npm run icons:normalize`로 일괄 정리합니다.

---

## 사용법

### `Icon` 컴포넌트 (권장)

```tsx
import { Icon, ICON } from '../design-system'

// name 직접 지정
<Icon name="icon-arrow-right-mono" size={24} color="grey600" />

// 자주 쓰는 아이콘 상수
<Icon name={ICON.HOURGLASS} size={18} color="blue500" />

// 접근성 — 의미 있는 아이콘에 label
<Icon name={ICON.NAVIGATION_X} size={24} aria-label="닫기" />
```

| prop | 기본값 | 설명 |
|------|--------|------|
| `name` | — | manifest에 등록된 아이콘 name |
| `source` | `auto` | `mono` · `fill` · `auto` (mono 우선) |
| `size` | `24` | px 또는 CSS 길이 |
| `color` | — | `ColorToken` (mono만 적용) |

### `Asset.Icon`

ListRow left 슬롯 등 **프레임 + 아이콘** 조합.

```tsx
import { Asset, ICON } from '../design-system'

<Asset.Icon
  name={ICON.HOURGLASS}
  frameShape="CircleSmall"
  backgroundColor="grey100"
  color="grey600"
/>
```

### fill 아이콘

```tsx
<Icon name="icon-example-fill" source="fill" size={24} />
```

`source="auto"`(기본)는 mono → fill 순으로 manifest를 조회합니다.

### 등록 여부 확인

```tsx
import { hasIcon } from '../design-system'

if (hasIcon('icon-foo-mono')) {
  // ...
}
```

### 저수준 API

```tsx
import { fetchIconSvg, getIconSvg } from '../design-system'

// 비동기 fetch (캐시에 저장)
const svg = await fetchIconSvg('icon-arrow-right-mono')

// 동기 — 이미 캐시된 경우만
const cached = getIconSvg('icon-arrow-right-mono')
```

---

## mono vs fill

| 종류 | 폴더 | 색상 | 전처리 |
|------|------|------|--------|
| **mono** | `mono/` | `color` prop → CSS `color` → SVG `currentColor` | `prepareMonoSvg`: `fill="#B0B8C1"` 등을 `currentColor`로 치환 |
| **fill** | `fill/` | SVG 원본 색상 유지 | `prepareFillSvg`: width/height만 정규화 |

mono 아이콘은 TDS에서 내려온 `#B0B8C1` 같은 하드코딩 fill이 자동으로 `currentColor`로 바뀝니다.

---

## TypeScript 자동완성

`IconName` / `MonoIconName` / `FillIconName`은 `registry.generated.ts`에서 자동 생성됩니다.

```tsx
import type { IconName, MonoIconName } from '../design-system'

const name: IconName = 'icon-user-mono' // 자동완성
```

SVG를 추가하고 `icons:generate`를 실행하면 타입이 갱신됩니다.

---

## 자주 쓰는 아이콘

`registry.ts`의 `ICON` 객체에 상수로 등록합니다.

| 상수 | name | 용도 |
|------|------|------|
| `ICON.ARROW_RIGHT` | `icon-arrow-right-mono` | ListRow 화살표 |
| `ICON.ARROW_RIGHTWARDS` | `icon-arrow-rightwards-mono` | TextButton 화살표 |
| `ICON.ARROW_RIGHT_SOLID` | `icon-arrow-solid-right-mono` | solid 화살표 |
| `ICON.HOURGLASS` | `icon-u231B-mono` | 대기·로딩 |
| `ICON.NAVIGATION_X` | `icon-navigation-x-mono` | 닫기 |
| `ICON.USER` | `icon-user-mono` | 사용자 |

새 상수 추가:

```ts
// registry.ts
export const ICON = {
  // ...
  MY_ICON: 'icon-my-icon-mono',
} as const satisfies Record<string, IconName>
```

---

## 문제 해결

### 아이콘이 안 보임

1. DevTools 콘솔에 `[Icon] fetch 실패` 또는 `[Icon] 아이콘을 찾을 수 없습니다` 확인
2. `npm run icons:generate` 실행 후 `registry.generated.ts`에 name이 있는지 확인
3. `public/icons/mono/`에 파일이 복사되었는지 확인 (dev 서버 재시작)

### 첫 렌더 시 빈 공간

fetch 전까지 크기만 맞춘 placeholder `<span>`이 표시됩니다. 캐시된 아이콘은 즉시 렌더됩니다.

### 번들 크기

SVG 본문은 번들에 포함되지 않습니다. manifest TS 파일만 타입·조회용으로 포함됩니다.

### Git

- `icons/mono/` — **커밋함** (소스)
- `public/icons/` — **gitignore** (빌드 산출물)
- `registry.generated.ts` — **커밋함** (타입 자동완성·CI용)
