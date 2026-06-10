import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { BottomSheet } from '@stackflow/plugin-basic-ui'

const BottomSheetActivity: ActivityComponentType<'BottomSheetActivity'> = () => {
  const { pop } = useFlow()

  return (
    <BottomSheet>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-900">바텀시트</h2>
        <p className="mt-2 text-sm text-slate-500">
          바깥 영역을 탭하거나 아래 버튼으로 닫을 수 있습니다.
        </p>
        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white active:bg-slate-800"
          onClick={() => pop()}
        >
          닫기
        </button>
      </div>
    </BottomSheet>
  )
}

export default BottomSheetActivity
