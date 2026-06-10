import { Text } from '../design-system'

export default function SplashScreen() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background"
      role="status"
      aria-label="로딩 중"
    >
      <Text typography="t2" fontWeight="bold" color="grey900">
        TradeFlow
      </Text>
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
        aria-hidden
      />
    </div>
  )
}
