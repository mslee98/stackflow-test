# Icons

TDS 스타일 SVG 아이콘 세트입니다. **TSX 파일 없이 SVG만** `mono/` / `fill/` 폴더에 넣으면 자동 등록됩니다.

## 폴더 구조

```
icons/
├── mono/          # 단색 아이콘 (color prop으로 색상 변경 가능)
├── fill/          # 멀티컬러 아이콘 (원본 색상 유지)
├── registry.ts    # import.meta.glob 자동 등록
├── Icon.tsx       # 아이콘 컴포넌트
└── index.ts       # Public API
```

## 아이콘 추가

1. SVG 파일을 `mono/` 또는 `fill/`에 복사
2. `npm run icons:generate` 실행 (또는 `dev`/`build` 시 자동)
3. `public/icons/`에 복사되고 manifest가 갱신됩니다.

### 파일명 규칙

| 파일명 | 등록되는 name |
|--------|---------------|
| `icon-arrow-right-mono.svg` | `icon-arrow-right-mono` |
| `icon-arrow-right-mono,arrow,right,...svg` | `icon-arrow-right-mono` (쉼표 앞까지) |

TDS name은 **쉼표(`,`) 앞 부분**입니다.

## 사용법

### Icon 컴포넌트 (권장)

```tsx
import { Icon, ICON } from '../design-system'

// name으로 직접 지정
<Icon name="icon-arrow-right-mono" size={24} color="grey600" />

// 자주 쓰는 아이콘 상수
<Icon name={ICON.HOURGLASS} size={18} color="blue500" />
```

### Asset.Icon

```tsx
import Asset from '../components/Asset/Asset'

<Asset.Icon
  name="icon-u231B-mono"
  frameShape="CircleSmall"
  backgroundColor="grey100"
  color="grey600"
/>
```

### fill 아이콘

```tsx
<Icon name="icon-example-fill" source="fill" size={24} />
```

`source="auto"`(기본)는 mono → fill 순으로 찾습니다.

## mono vs fill

| 종류 | 폴더 | 색상 |
|------|------|------|
| mono | `mono/` | `color` prop → `currentColor` 치환 |
| fill | `fill/` | SVG 원본 색상 유지 |

## TypeScript 자동완성

`IconName` / `MonoIconName` 타입은 `registry.generated.ts` manifest에서 자동 생성됩니다.

```tsx
import type { IconName, MonoIconName } from '../design-system'

const name: IconName = 'icon-user-mono' // 자동완성 지원
```

## 자주 쓰는 아이콘 (`ICON` 상수)

| 상수 | name |
|------|------|
| `ICON.ARROW_RIGHT` | `icon-arrow-right-mono` |
| `ICON.HOURGLASS` | `icon-u231B-mono` |
| `ICON.USER` | `icon-user-mono` |

`registry.ts`의 `ICON` 객체에 추가하면 됩니다.

## 개발 팁

- mono 아이콘은 `#B0B8C1` 등 하드코딩 fill이 `currentColor`로 자동 치환됩니다.
- 아이콘이 안 보이면 DevTools 콘솔에 `[Icon] 아이콘을 찾을 수 없습니다` 경고가 출력됩니다.
- `hasIcon('icon-foo-mono')`로 등록 여부를 확인할 수 있습니다.
