import React from 'react'

import HroText from './HroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      <HroText />
      <Arrow />
    </div>
  )
}

export default LeftContent