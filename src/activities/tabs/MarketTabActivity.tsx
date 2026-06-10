import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'
import { ListRow } from '../../design-system'

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
              className="overflow-hidden rounded-xl border border-grey-200 bg-white shadow-sm"
            >
              <ListRow
                contents={
                  <ListRow.Texts
                    type="2RowTypeA"
                    top={market.symbol}
                    topProps={{ fontWeight: 'semibold', color: 'grey900' }}
                    bottom={market.name}
                    bottomProps={{ color: 'grey500' }}
                  />
                }
                right={
                  <ListRow.Texts
                    type="Right2RowTypeB"
                    top={`₩${market.price}`}
                    topProps={{ fontWeight: 'medium', color: 'grey900' }}
                    bottom={market.change}
                    bottomProps={{
                      color: market.change.startsWith('+') ? 'green500' : 'red500',
                    }}
                  />
                }
                verticalPadding="medium"
              />
            </li>
          ))}
        </ul>
      </TabLayout>
    </AppScreen>
  )
}

export default MarketTabActivity
