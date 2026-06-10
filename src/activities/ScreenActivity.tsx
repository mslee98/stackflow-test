import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'

const ScreenActivity: ActivityComponentType<'ScreenActivity'> = ({
  params: { depth = '1' },
}) => {
  const { push, pop } = useFlow()
  const depthNum = Number(depth)
  const nextDepth = String(depthNum + 1)

  return (
    <AppScreen
      appBar={{
        title: `화면 ${depth}`,
        backButton: { onClick: () => pop() },
      }}
    >
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm text-slate-500">
          현재 스택 깊이: <strong className="text-slate-900">{depth}</strong>
        </p>

        <button
          type="button"
          className="rounded-xl bg-blue-500 px-4 py-3 font-medium text-white active:bg-blue-600"
          onClick={() => push('ScreenActivity', { depth: nextDepth })}
        >
          다음 화면 Push (depth {nextDepth})
        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 active:bg-slate-50"
          onClick={() => push('BottomSheetActivity', {})}
        >
          바텀시트 열기
        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 active:bg-slate-50"
          onClick={() => push('ModalActivity', {})}
        >
          모달 열기
        </button>
      </div>
    </AppScreen>
  )
}

export default ScreenActivity
