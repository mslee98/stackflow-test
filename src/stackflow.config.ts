import { defineConfig } from '@stackflow/config'

export const config = defineConfig({
  activities: [
    {
      name: 'HomeTabActivity',
      route: '/',
    },
    {
      name: 'MarketTabActivity',
      route: '/market',
    },
    {
      name: 'TradeTabActivity',
      route: '/trade',
    },
    {
      name: 'MyTabActivity',
      route: '/my',
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
