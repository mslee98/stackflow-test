import DesktopShell from './components/layout/DesktopShell'
import { DSProvider } from './design-system'
import { Stack } from './stackflow'

function App() {
  return (
    <DesktopShell>
      <DSProvider>
        <Stack />
      </DSProvider>
    </DesktopShell>
  )
}

export default App
