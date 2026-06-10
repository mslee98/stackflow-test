import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { Modal } from '@stackflow/plugin-basic-ui'
import { Button, Text } from '../design-system'

const ModalActivity: ActivityComponentType<'ModalActivity'> = () => {
  const { pop } = useFlow()

  return (
    <Modal>
      <div className="p-6">
        <Text typography="t4" fontWeight="semibold" color="grey900" as="h2">
          모달
        </Text>
        <Text typography="t6" color="grey500" as="p" className="mt-2">
          중앙에 표시되는 모달 UI입니다. 바깥 영역을 탭하면 닫힙니다.
        </Text>
        <Button display="full" className="mt-6" onClick={() => pop()}>
          닫기
        </Button>
      </div>
    </Modal>
  )
}

export default ModalActivity
