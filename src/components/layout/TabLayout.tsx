import type { ReactNode } from 'react'
import type { TabId } from '../../constants/tabs'
import BottomNav from './BottomNav'

type TabLayoutProps = {
  activeTab: TabId
  children: ReactNode
}

export default function TabLayout({ activeTab, children }: TabLayoutProps) {
  return (
    <>
      <div className="tab-content">{children}</div>
      <BottomNav activeTab={activeTab} />
    </>
  )
}
