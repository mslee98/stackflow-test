import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../components/layout/TabLayout'
import { getTabTitle } from '../constants/tabs'
import { useTabNavigation } from '../hooks/useTabNavigation'
import HomeTabContent from './tabs/content/HomeTabContent'
import UiTabContent from './tabs/content/UiTabContent'
import MyTabContent from './tabs/content/MyTabContent'
import TradeTabContent from './tabs/content/TradeTabContent'

const MainTabActivity: ActivityComponentType<'MainTabActivity'> = () => {
  const { activeTab, changeTab } = useTabNavigation()

  return (
    <AppScreen appBar={{ title: getTabTitle(activeTab) }}>
      <TabLayout activeTab={activeTab} onTabChange={changeTab}>
        <div className={activeTab === 'home' ? '' : 'hidden'}>
          <HomeTabContent />
        </div>
        <div className={activeTab === 'ui' ? '' : 'hidden'}>
          <UiTabContent />
        </div>
        <div className={activeTab === 'trade' ? '' : 'hidden'}>
          <TradeTabContent />
        </div>
        <div className={activeTab === 'my' ? '' : 'hidden'}>
          <MyTabContent />
        </div>
      </TabLayout>
    </AppScreen>
  )
}

export default MainTabActivity
