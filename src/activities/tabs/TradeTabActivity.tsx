import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'

const TradeTabActivity: ActivityComponentType<'TradeTabActivity'> = () => {
  return (
    <AppScreen appBar={{ title: '거래' }}>
      <TabLayout activeTab="trade">
        <div className="flex flex-col gap-4 p-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
            <p className="text-sm text-slate-500">BTC / KRW</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              ₩98,420,000
            </p>
            <p className="mt-2 text-sm text-green-500">+2.34% (24h)</p>
          </section>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-xl bg-green-500 py-4 text-lg font-semibold text-white active:bg-green-600"
            >
              매수
            </button>
            <button
              type="button"
              className="rounded-xl bg-red-500 py-4 text-lg font-semibold text-white active:bg-red-600"
            >
              매도
            </button>
          </div>
        </div>
      </TabLayout>
    </AppScreen>
  )
}

export default TradeTabActivity
