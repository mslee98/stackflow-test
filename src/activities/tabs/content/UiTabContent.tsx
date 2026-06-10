import type { ReactNode } from 'react'
import { useFlow } from '@stackflow/react'
import {
  Asset,
  Badge,
  Button,
  ICON,
  ListHeader,
  ListRow,
  Text,
  TextButton,
  Top,
  type TextButtonSize,
} from '../../../design-system'

const TEXT_BUTTON_SIZES = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
] as const satisfies readonly TextButtonSize[]

const TEXT_BUTTON_DOC_SIZES = ['medium', 'xlarge', 'xxlarge'] as const satisfies readonly TextButtonSize[]

function TextButtonShowcaseRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">{children}</div>
  )
}

const TEST_ITEMS = [
  {
    label: '화면 Push 전환',
    description: '기본 스택 네비게이션 (오른쪽에서 슬라이드)',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('ScreenActivity', { depth: '1' }),
  },
  {
    label: '바텀시트',
    description: '아래에서 올라오는 시트 UI',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('BottomSheetActivity', {}),
  },
  {
    label: '모달',
    description: '중앙 팝업 형태의 모달 UI',
    action: (push: ReturnType<typeof useFlow>['push']) =>
      push('ModalActivity', {}),
  },
] as const

const SAMPLE_TRADES = [
  {
    id: '1',
    symbol: 'BTC',
    name: '비트코인',
    amount: '₩1,200,000',
    time: '오늘 14:32',
  },
  {
    id: '2',
    symbol: 'ETH',
    name: '이더리움',
    amount: '₩450,000',
    time: '어제 09:15',
  },
]

function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-3">
      <ListHeader
        title={
          <ListHeader.TitleParagraph typography="t5" fontWeight="bold">
            {title}
          </ListHeader.TitleParagraph>
        }
        description={
          description ? (
            <ListHeader.DescriptionParagraph color="grey500">
              {description}
            </ListHeader.DescriptionParagraph>
          ) : undefined
        }
        className="!px-0"
      />
      {children}
    </section>
  )
}

export default function UiTabContent() {
  const { push } = useFlow()

  return (
    <div className="flex flex-col gap-6 p-4">
      <Top
        title={
          <Top.TitleParagraph typography="t3" fontWeight="bold">
            디자인 시스템
          </Top.TitleParagraph>
        }
        subtitleBottom={
          <Top.SubtitleParagraph color="grey500">
            컴포넌트 쇼케이스
          </Top.SubtitleParagraph>
        }
        className="!px-0 !pt-0 !pb-0"
      />

      <ShowcaseSection title="Typography" description="텍스트 토큰">
        <div className="flex flex-col gap-1 rounded-xl border border-grey-200 bg-white p-4">
          <Text typography="t3" fontWeight="bold" color="grey900">
            t3 제목
          </Text>
          <Text typography="t5" color="grey700">
            t5 본문 텍스트
          </Text>
          <Text typography="t6" color="grey500">
            t6 보조 설명
          </Text>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button" description="Button · Badge">
        <div className="flex flex-col gap-3 rounded-xl border border-grey-200 bg-white p-4">
          <div className="flex flex-wrap gap-2">
            <Badge size="small" variant="fill" color="blue">
              신규
            </Badge>
            <Badge size="small" variant="weak" color="red">
              마감
            </Badge>
            <Badge size="medium" variant="weak" color="green">
              완료
            </Badge>
          </div>
          <Button color="primary" variant="fill" display="full">
            Primary Button
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button color="light" variant="fill" size="medium" display="full">
              Light
            </Button>
            <Button color="danger" variant="weak" size="medium" display="full">
              Danger
            </Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="TextButton" description="TDS Text Button">
        <div className="flex flex-col gap-5 rounded-xl border border-grey-200 bg-white p-4">
          <div className="flex flex-col gap-2">
            <Text typography="t6" fontWeight="semibold" color="grey800">
              크기 조정하기
            </Text>
            <TextButtonShowcaseRow>
              {TEXT_BUTTON_SIZES.map((size) => (
                <TextButton key={size} size={size} color="grey600">
                  텍스트 버튼
                </TextButton>
              ))}
            </TextButtonShowcaseRow>
          </div>

          <div className="flex flex-col gap-2">
            <Text typography="t6" fontWeight="semibold" color="grey800">
              화살표 추가하기
            </Text>
            <TextButtonShowcaseRow>
              {TEXT_BUTTON_SIZES.map((size) => (
                <TextButton
                  key={size}
                  size={size}
                  variant="arrow"
                  color="grey600"
                >
                  텍스트 버튼
                </TextButton>
              ))}
            </TextButtonShowcaseRow>
          </div>

          <div className="flex flex-col gap-2">
            <Text typography="t6" fontWeight="semibold" color="grey800">
              밑줄 긋기
            </Text>
            <TextButtonShowcaseRow>
              {TEXT_BUTTON_DOC_SIZES.map((size) => (
                <TextButton
                  key={size}
                  size={size}
                  variant="underline"
                  color="grey600"
                >
                  텍스트 버튼
                </TextButton>
              ))}
            </TextButtonShowcaseRow>
          </div>

          <div className="flex flex-col gap-2">
            <Text typography="t6" fontWeight="semibold" color="grey800">
              비활성화
            </Text>
            <TextButtonShowcaseRow>
              {TEXT_BUTTON_DOC_SIZES.map((size) => (
                <TextButton key={size} size={size} color="grey600" disabled>
                  텍스트 버튼
                </TextButton>
              ))}
            </TextButtonShowcaseRow>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="List" description="ListHeader · ListRow · Asset">
        <ListHeader
          title={
            <ListHeader.TitleParagraph typography="t5" fontWeight="bold">
              최근 거래
            </ListHeader.TitleParagraph>
          }
          description={
            <ListHeader.DescriptionParagraph color="grey500">
              최근 7일
            </ListHeader.DescriptionParagraph>
          }
          right={
            <ListHeader.RightArrow size="small">전체 보기</ListHeader.RightArrow>
          }
          className="!px-0"
        />
        <ul className="flex flex-col gap-2">
          {SAMPLE_TRADES.map((trade) => (
            <li key={trade.id}>
              <ListRow
                variant="card"
                left={
                  <Asset.Icon
                    name={ICON.HOURGLASS}
                    frameShape="CircleSmall"
                    backgroundColor="grey100"
                    color="grey600"
                  />
                }
                contents={
                  <ListRow.Texts
                    type="2RowTypeA"
                    top={trade.symbol}
                    topProps={{ fontWeight: 'semibold', color: 'grey900' }}
                    bottom={trade.name}
                    bottomProps={{ color: 'grey500' }}
                  />
                }
                right={
                  <ListRow.Texts
                    type="Right2RowTypeB"
                    top={trade.amount}
                    topProps={{ fontWeight: 'medium', color: 'grey900' }}
                    bottom={trade.time}
                    bottomProps={{ color: 'grey500' }}
                  />
                }
                arrowType="right"
                verticalPadding="medium"
              />
            </li>
          ))}
        </ul>
      </ShowcaseSection>

      <ShowcaseSection
        title="Stackflow 네비게이션"
        description="화면 내 스택 전환 (push / pop)"
      >
        <ul className="flex flex-col gap-2">
          {TEST_ITEMS.map((item) => (
            <li key={item.label}>
              <ListRow
                variant="card"
                contents={
                  <ListRow.Texts
                    type="2RowTypeA"
                    top={item.label}
                    topProps={{ fontWeight: 'semibold', color: 'grey900' }}
                    bottom={item.description}
                    bottomProps={{ color: 'grey500' }}
                  />
                }
                arrowType="right"
                verticalPadding="medium"
                onClick={() => item.action(push)}
              />
            </li>
          ))}
        </ul>
      </ShowcaseSection>
    </div>
  )
}
