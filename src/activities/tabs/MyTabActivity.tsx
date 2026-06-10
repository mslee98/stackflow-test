import type { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import TabLayout from '../../components/layout/TabLayout'

const MENU_ITEMS = [
  { label: '내 자산', value: '₩12,450,000' },
  { label: '주문 내역', value: '' },
  { label: '알림 설정', value: '' },
  { label: '고객센터', value: '' },
]

const MyTabActivity: ActivityComponentType<'MyTabActivity'> = () => {
  return (
    <AppScreen appBar={{ title: '내정보' }}>
      <TabLayout activeTab="my">
        <div className="p-4">
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">안녕하세요</p>
            <p className="mt-1 text-xl font-bold text-slate-900">사용자님</p>
          </div>

          <ul className="flex flex-col gap-2">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left active:bg-slate-50"
                >
                  <span className="font-medium text-slate-900">
                    {item.label}
                  </span>
                  {item.value && (
                    <span className="text-sm font-semibold text-blue-500">
                      {item.value}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </TabLayout>
    </AppScreen>
  )
}

export default MyTabActivity
