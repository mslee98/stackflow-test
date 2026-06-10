import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { BottomSheet } from '@stackflow/plugin-basic-ui'
import { Button, Text } from '../design-system'

const BottomSheetActivity: ActivityComponentType<'BottomSheetActivity'> = () => {
  const { pop } = useFlow()

  return (
    <BottomSheet>
      <div className="p-6">
        <Text typography="t4" fontWeight="semibold" color="grey900" as="h2">
          바텀시트
        </Text>
        <Text typography="t6" color="grey500" as="p" className="mt-2">
          바깥 영역을 탭하거나 아래 버튼으로 닫을 수 있습니다.
        </Text>
        <Button display="full" className="mt-6" onClick={() => pop()}>
          닫기
        </Button>
      </div>
    </BottomSheet>
  )
}

export default BottomSheetActivity
