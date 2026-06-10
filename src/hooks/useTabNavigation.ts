import { useCallback, useEffect, useState } from 'react'
import {
  getTabFromPathname,
  TABS,
  type TabId,
} from '../constants/tabs'

export function useTabNavigation() {
  const [activeTab, setActiveTab] = useState<TabId>(() =>
    getTabFromPathname(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromPathname(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const changeTab = useCallback((tabId: TabId) => {
    const tab = TABS.find((item) => item.id === tabId)
    if (!tab) return

    setActiveTab(tabId)
    window.history.replaceState(null, '', tab.route)
  }, [])

  return { activeTab, changeTab }
}
