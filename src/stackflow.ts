import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { config } from './stackflow.config'
import PlaygroundActivity from './activities/PlaygroundActivity'
import ScreenActivity from './activities/ScreenActivity'
import BottomSheetActivity from './activities/BottomSheetActivity'
import ModalActivity from './activities/ModalActivity'

export const { Stack } = stackflow({
  config,
  components: {
    PlaygroundActivity,
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
      fallbackActivity: () => 'PlaygroundActivity',
    }),
  ],
})
