import React from 'react'

import RightCardContent from './RightCardContent'
const RightCard = (props) => {
    console.log(props)
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80  rounded-4xl'>
            <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
            <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
        </div>
    )
}

export default RightCard