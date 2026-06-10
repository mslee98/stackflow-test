import { defineConfig } from '@stackflow/config'

export const config = defineConfig({
  activities: [
    {
      name: 'PlaygroundActivity',
      route: '/',
    },
    {
      name: 'ScreenActivity',
      route: '/screen/:depth',
    },
    {
      name: 'BottomSheetActivity',
      route: '/bottom-sheet',
    },
    {
      name: 'ModalActivity',
      route: '/modal',
    },
  ],
  transitionDuration: 350,
})
