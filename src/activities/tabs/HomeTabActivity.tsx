import type { ActivityComponentType } from '@stackflow/react'
import { useFlow } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'
import { ListRow, Text } from '../../design-system'

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

const HomeTabActivity: ActivityComponentType<'HomeTabActivity'> = () => {
  const { push } = useFlow()

  return (
    <AppScreen appBar={{ title: 'TradeFlow' }}>
      <TabLayout activeTab="home">
        <div className="flex flex-col gap-4 p-4">
          <Text typography="t6" color="grey500" as="p">
            Stackflow 네비게이션을 테스트해보세요.
          </Text>

          <ul className="flex flex-col gap-3">
            {TEST_ITEMS.map((item) => (
              <li
                key={item.label}
                className="overflow-hidden rounded-xl border border-grey-200 shadow-sm"
              >
                <ListRow
                  contents={
                    <ListRow.Texts
                      type="2RowTypeA"
                      top={item.label}
                      topProps={{ fontWeight: 'semibold', color: 'grey900' }}
                      bottom={item.description}
                      bottomProps={{ color: 'grey500' }}
                    />
                  }
                  arrowType="right"
                  verticalPadding="medium"
                  onClick={() => item.action(push)}
                />
              </li>
            ))}
          </ul>
        </div>
      </TabLayout>
    </AppScreen>
  )
}

export default HomeTabActivity
