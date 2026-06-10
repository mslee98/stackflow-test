import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'

const MARKETS = [
  { symbol: 'BTC', name: '비트코인', price: '98,420,000', change: '+2.34%' },
  { symbol: 'ETH', name: '이더리움', price: '4,820,000', change: '-1.12%' },
  { symbol: 'SOL', name: '솔라나', price: '248,500', change: '+5.67%' },
  { symbol: 'XRP', name: '리플', price: '1,120', change: '+0.84%' },
]

const MarketTabActivity: ActivityComponentType<'MarketTabActivity'> = () => {
  return (
    <AppScreen appBar={{ title: '마켓' }}>
      <TabLayout activeTab="market">
        <ul className="flex flex-col gap-3 p-4">
          {MARKETS.map((market) => (
            <li
              key={market.symbol}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
            >
              <div>
                <p className="font-semibold text-slate-900">{market.symbol}</p>
                <p className="text-sm text-slate-500">{market.name}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-slate-900">₩{market.price}</p>
                <p
                  className={`text-sm ${
                    market.change.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {market.change}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </TabLayout>
    </AppScreen>
  )
}

export default MarketTabActivity
