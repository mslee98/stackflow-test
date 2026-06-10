import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { Modal } from '@stackflow/plugin-basic-ui'

const ModalActivity: ActivityComponentType<'ModalActivity'> = () => {
  const { pop } = useFlow()

  return (
    <Modal>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-900">모달</h2>
        <p className="mt-2 text-sm text-slate-500">
          중앙에 표시되는 모달 UI입니다. 바깥 영역을 탭하면 닫힙니다.
        </p>
        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white active:bg-slate-800"
          onClick={() => pop()}
        >
          닫기
        </button>
      </div>
    </Modal>
  )
}

export default ModalActivity
