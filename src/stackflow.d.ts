declare module '@stackflow/config' {
  interface Register {
    HomeTabActivity: Record<string, never>
    MarketTabActivity: Record<string, never>
    TradeTabActivity: Record<string, never>
    MyTabActivity: Record<string, never>
    ScreenActivity: {
      depth: string
    }
    BottomSheetActivity: Record<string, never>
    ModalActivity: Record<string, never>
  }
}
