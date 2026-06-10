import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'

const TEST_ITEMS = [
  {
    label: '화면 Push 전환',
    description: '기본 스택 네비게이션 (오른쪽에서 슬라이드)',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('ScreenActivity', { depth: '1' }),
  },
  {
    label: '바텀시트',
    description: '아래에서 올라오는 시트 UI',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('BottomSheetActivity', {}),
  },
  {
    label: '모달',
    description: '중앙 팝업 형태의 모달 UI',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('ModalActivity', {}),
  },
] as const

const PlaygroundActivity: ActivityComponentType<'PlaygroundActivity'> = () => {
  const { push } = useFlow()

  return (
    <AppScreen appBar={{ title: 'Stackflow 테스트' }}>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm text-slate-500">
          아래 버튼으로 Stackflow 네비게이션을 테스트해보세요.
        </p>

        <ul className="flex flex-col gap-3">
          {TEST_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-colors active:bg-slate-50"
                onClick={() => item.action(push)}
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </AppScreen>
  )
}

export default PlaygroundActivity
