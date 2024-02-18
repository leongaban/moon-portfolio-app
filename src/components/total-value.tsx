import { fragmentMono400 } from '@/src/common/constants/fonts'
import { splitMoneyNumber } from '@/src/common/utils/formatters'

interface TotalValueProps {
  total: string
  type: string
}

export default function TotalValue({ total, type }: TotalValueProps) {
  const usd = type === 'usd'
  const [integerPart, decimalPart] = splitMoneyNumber(total)

  return (
    <div className={`total-value ${fragmentMono400}`}>
      <span className="integer">{usd && '$'}</span>
      <span className="integer">{integerPart}</span>.
      <span className="decimal">{decimalPart}</span>
    </div>
  )
}
