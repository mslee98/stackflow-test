export default function DownloadBanner() {
  return (
    <aside className="download-banner" aria-label="앱 다운로드 배너">
      <div className="download-banner__inner">
        <div className="download-banner__content" aria-label="download banner">
          <div className="download-banner__image rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white">
            <p className="text-sm font-medium opacity-90">TradeFlow</p>
            <p className="mt-2 text-xl font-bold leading-snug">
              모바일 앱으로
              <br />
              더 빠르게 거래하세요
            </p>
          </div>

          <div className="download-banner__promo flex items-center justify-between gap-3">
            <p className="flex-1 pl-1 text-base font-bold leading-snug whitespace-pre-line text-slate-900">
              앱 첫 설치 시{'\n'}수수료 50% 할인
            </p>
            <div
              aria-label="app download qr area"
              className="download-banner__qr shrink-0"
            >
              <div
                aria-label="app download qr code"
                className="grid h-[140px] w-[140px] grid-cols-5 grid-rows-5 gap-1 rounded-lg border border-slate-200 bg-white p-2"
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${i % 3 === 0 ? 'bg-slate-900' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
