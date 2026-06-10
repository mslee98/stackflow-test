import { TABS, type TabId } from '../../constants/tabs'
import { IconButton } from '../../design-system'

type BottomNavProps = {
  activeTab: TabId
  onTabChange: (tabId: TabId) => void
}

function TabIcon({ tabId, active }: { tabId: TabId; active: boolean }) {
  const color = active ? 'text-blue-500' : 'text-grey-400'

  const icons: Record<TabId, React.ReactNode> = {
    home: (
      <svg
        className={`h-6 w-6 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9M5 10v10h14V10"
        />
      </svg>
    ),
    ui: (
      <svg
        className={`h-6 w-6 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </svg>
    ),
    trade: (
      <svg
        className={`h-6 w-6 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16V8m0 0L4 11m3-3l3 3m7 0v8m0 0l3-3m-3 3l-3-3"
        />
      </svg>
    ),
    my: (
      <svg
        className={`h-6 w-6 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    ),
  }

  return icons[tabId]
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="하단 메뉴">
      <ul>
        {TABS.map((tab) => {
          const active = tab.id === activeTab

          return (
            <li key={tab.id} className="flex h-full flex-1 items-center justify-center">
              <IconButton
                active={active}
                label={tab.label}
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  if (!active) onTabChange(tab.id)
                }}
              >
                <TabIcon tabId={tab.id} active={active} />
              </IconButton>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
