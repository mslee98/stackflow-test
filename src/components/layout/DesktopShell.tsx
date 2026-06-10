import type { ReactNode } from 'react'
import DownloadBanner from './DownloadBanner'

type DesktopShellProps = {
  children: ReactNode
}

export default function DesktopShell({ children }: DesktopShellProps) {
  return (
    <div className="page-shell">
      <div className="page-shell__inner">
        <DownloadBanner />
        <main id="frameMain" className="app-column">
          {children}
        </main>
      </div>
    </div>
  )
}
