import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 flex h-[90vh] items-center gap-10 '>
        <LeftContent />
        <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content