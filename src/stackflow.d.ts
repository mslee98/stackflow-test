declare module '@stackflow/config' {
  interface Register {
    MainTabActivity: Record<string, never>
    ScreenActivity: {
      depth: string
    }
    BottomSheetActivity: Record<string, never>
    ModalActivity: Record<string, never>
  }
}
