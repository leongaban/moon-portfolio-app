/* // ? Component usage
  <Alert type={'error'} msg={'Some seriously bad happened.'} />
  <Alert type={'success'} msg={'You are going to make it!'} />
*/

import { useState } from 'react'

interface AlertProps {
  type: string
  msg: string
}

export default function Alert({ type, msg }: AlertProps) {
  const [fill, setFill] = useState('black')
  const [brighness, setBrightness] = useState('')

  const defaultClasses =
    'w-full border text-white px-4 py-3 rounded cursor-pointer relative'
  const colorClass = type === 'error' ? 'bg-red' : 'bg-green'
  let finalColorClass = defaultClasses.concat(` ${colorClass}`)

  return (
    <div
      className={`${finalColorClass} ${brighness}`}
      role="alert"
      onMouseEnter={() => {
        setBrightness('brightness-150')
        setFill('white')
      }}
      onMouseLeave={() => {
        setBrightness('')
        setFill('black')
      }}
    >
      <span className="block sm:inline">{msg}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-white"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            fill={fill}
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  )
}
