import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { config } from './stackflow.config'
import HomeTabActivity from './activities/tabs/HomeTabActivity'
import MarketTabActivity from './activities/tabs/MarketTabActivity'
import TradeTabActivity from './activities/tabs/TradeTabActivity'
import MyTabActivity from './activities/tabs/MyTabActivity'
import ScreenActivity from './activities/ScreenActivity'
import BottomSheetActivity from './activities/BottomSheetActivity'
import ModalActivity from './activities/ModalActivity'

export const { Stack } = stackflow({
  config,
  components: {
    HomeTabActivity,
    MarketTabActivity,
    TradeTabActivity,
    MyTabActivity,
    ScreenActivity,
    BottomSheetActivity,
    ModalActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      config,
      fallbackActivity: () => 'HomeTabActivity',
    }),
  ],
})
