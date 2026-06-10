declare module '@stackflow/config' {
  interface Register {
    PlaygroundActivity: Record<string, never>
    ScreenActivity: {
      depth: string
    }
    BottomSheetActivity: Record<string, never>
    ModalActivity: Record<string, never>
  }
}
