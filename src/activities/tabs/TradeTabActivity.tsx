import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'
import { Button, Text } from '../../design-system'

const TradeTabActivity: ActivityComponentType<'TradeTabActivity'> = () => {
  return (
    <AppScreen appBar={{ title: '거래' }}>
      <TabLayout activeTab="trade">
        <div className="flex flex-col gap-4 p-4">
          <section className="rounded-2xl border border-grey-200 bg-white p-5 text-center">
            <Text typography="t6" color="grey500" as="p">
              BTC / KRW
            </Text>
            <Text
              typography="t1"
              fontWeight="bold"
              color="grey900"
              as="p"
              className="mt-1"
            >
              ₩98,420,000
            </Text>
            <Text typography="t6" color="green500" as="p" className="mt-2">
              +2.34% (24h)
            </Text>
          </section>

          <div className="grid grid-cols-2 gap-3">
            <Button color="primary" variant="fill" size="large" display="full">
              매수
            </Button>
            <Button color="danger" variant="fill" size="large" display="full">
              매도
            </Button>
          </div>
        </div>
      </TabLayout>
    </AppScreen>
  )
}

export default TradeTabActivity
