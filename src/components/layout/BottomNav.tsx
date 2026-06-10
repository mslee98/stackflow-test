import { useFlow } from '@stackflow/react'
import { TABS, type TabId } from '../../constants/tabs'

type BottomNavProps = {
  activeTab: TabId
}

function TabIcon({ tabId, active }: { tabId: TabId; active: boolean }) {
  const color = active ? 'text-blue-500' : 'text-slate-400'

  const icons: Record<TabId, React.ReactNode> = {
    home: (
      <svg className={`h-6 w-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
    market: (
      <svg className={`h-6 w-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16l4-6 4 3 5-8" />
      </svg>
    ),
    trade: (
      <svg className={`h-6 w-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V8m0 0L4 11m3-3l3 3m7 0v8m0 0l3-3m-3 3l-3-3" />
      </svg>
    ),
    my: (
      <svg className={`h-6 w-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  }

  return icons[tabId]
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const { replace } = useFlow()

  return (
    <nav className="bottom-nav" aria-label="하단 메뉴">
      <ul className="flex h-14 items-stretch">
        {TABS.map((tab) => {
          const active = tab.id === activeTab

          return (
            <li key={tab.id} className="flex-1">
              <button
                type="button"
                className="flex h-full w-full flex-col items-center justify-center gap-0.5 active:bg-slate-50"
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  if (!active) replace(tab.activity, {})
                }}
              >
                <TabIcon tabId={tab.id} active={active} />
                <span
                  className={`text-[11px] font-medium ${
                    active ? 'text-blue-500' : 'text-slate-400'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
