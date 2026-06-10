import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { config } from './stackflow.config'
import MainTabActivity from './activities/MainTabActivity'
import ScreenActivity from './activities/ScreenActivity'
import BottomSheetActivity from './activities/BottomSheetActivity'
import ModalActivity from './activities/ModalActivity'

export const { Stack } = stackflow({
  config,
  components: {
    MainTabActivity,
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
      fallbackActivity: () => 'MainTabActivity',
    }),
  ],
})
