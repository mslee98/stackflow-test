import { useEffect, useState } from 'react'
import DesktopShell from './components/layout/DesktopShell'
import SplashScreen from './components/SplashScreen'
import { DSProvider } from './design-system'
import { Stack } from './stackflow'

const SPLASH_MIN_MS = 1200

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), SPLASH_MIN_MS)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <DesktopShell>
      <DSProvider>
        {ready ? <Stack /> : <SplashScreen />}
      </DSProvider>
    </DesktopShell>
  )
}

export default App
