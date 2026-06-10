import type { RegisteredActivityName } from '@stackflow/config'

export type TabId = 'home' | 'market' | 'trade' | 'my'

export type TabItem = {
  id: TabId
  label: string
  activity: RegisteredActivityName
  route: string
}

export const TABS: TabItem[] = [
  { id: 'home', label: '홈', activity: 'HomeTabActivity', route: '/' },
  { id: 'market', label: '마켓', activity: 'MarketTabActivity', route: '/market' },
  { id: 'trade', label: '거래', activity: 'TradeTabActivity', route: '/trade' },
  { id: 'my', label: '내정보', activity: 'MyTabActivity', route: '/my' },
]
