import { FC } from 'react'
import { MOON_PORTFOLIO } from '@/src/common/constants/copy'

interface headProps {}

const head: FC<headProps> = ({}) => {
  return (
    <>
      <title>{MOON_PORTFOLIO}</title>
    </>
  )
}

export default head
