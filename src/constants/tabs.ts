export type TabId = 'home' | 'ui' | 'trade' | 'my'

export type TabItem = {
  id: TabId
  label: string
  title: string
  route: string
}

export const TABS: TabItem[] = [
  { id: 'home', label: '홈', title: 'TradeFlow', route: '/' },
  { id: 'ui', label: 'UI', title: 'UI', route: '/ui' },
  { id: 'trade', label: '거래', title: '거래', route: '/trade' },
  { id: 'my', label: '내정보', title: '내정보', route: '/my' },
]

export function getTabFromPathname(pathname: string): TabId {
  return TABS.find((tab) => tab.route === pathname)?.id ?? 'home'
}

export function getTabTitle(tabId: TabId): string {
  return TABS.find((tab) => tab.id === tabId)?.title ?? 'TradeFlow'
}
