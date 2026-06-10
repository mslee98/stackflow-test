import { ListHeader, ListRow, Top } from '../../../design-system'

const MENU_ITEMS = [
  { label: '내 자산', value: '₩12,450,000' },
  { label: '주문 내역', value: '' },
  { label: '알림 설정', value: '' },
  { label: '고객센터', value: '' },
]

export default function MyTabContent() {
  return (
    <div className="p-4">
      <div className="mb-6 overflow-hidden rounded-2xl border border-grey-200 bg-white">
        <Top
          title={
            <Top.TitleParagraph typography="st5" fontWeight="bold">
              사용자님
            </Top.TitleParagraph>
          }
          subtitleTop={
            <Top.SubtitleParagraph typography="t6" color="grey500">
              안녕하세요
            </Top.SubtitleParagraph>
          }
          className="!px-5 !pt-5 !pb-4"
        />
      </div>

      <ListHeader
        title={
          <ListHeader.TitleParagraph typography="t5" fontWeight="bold">
            메뉴
          </ListHeader.TitleParagraph>
        }
        className="!px-0"
      />

      <ul className="mt-1 flex flex-col gap-2">
        {MENU_ITEMS.map((item) => (
          <li key={item.label}>
            <ListRow
              variant="card"
              contents={
                <ListRow.Texts
                  type="2RowTypeA"
                  top={item.label}
                  topProps={{ fontWeight: 'semibold', color: 'grey900' }}
                />
              }
              right={
                item.value ? (
                  <ListRow.Texts
                    type="Right1RowTypeE"
                    top={item.value}
                    topProps={{ fontWeight: 'semibold', color: 'blue500' }}
                  />
                ) : undefined
              }
              arrowType={item.value ? 'none' : 'right'}
              verticalPadding="medium"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
