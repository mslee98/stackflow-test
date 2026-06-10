import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import { Button, Text, Top } from '../design-system'

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
      <Top
        title={
          <Top.TitleParagraph typography="t3" fontWeight="bold">
            스택 네비게이션
          </Top.TitleParagraph>
        }
        subtitleBottom={
          <Top.SubtitleParagraph>
            현재 스택 깊이:{' '}
            <Text typography="t6" fontWeight="bold" color="grey900" as="strong">
              {depth}
            </Text>
          </Top.SubtitleParagraph>
        }
        className="!px-4 !pt-4 !pb-2"
      />

      <div className="flex flex-col gap-4 px-4 pb-4">
        <Button
          color="primary"
          variant="fill"
          display="full"
          onClick={() => push('ScreenActivity', { depth: nextDepth })}
        >
          다음 화면 Push (depth {nextDepth})
        </Button>

        <Button
          color="light"
          variant="fill"
          display="full"
          onClick={() => push('BottomSheetActivity', {})}
        >
          바텀시트 열기
        </Button>

        <Button
          color="light"
          variant="fill"
          display="full"
          onClick={() => push('ModalActivity', {})}
        >
          모달 열기
        </Button>
      </div>
    </AppScreen>
  )
}

export default ScreenActivity
