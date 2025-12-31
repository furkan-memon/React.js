import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full bg-white flex-nowrap rounded-4xl gap-10 overflow-x-auto flex p-6 w-3/4 '>
    {  props.user.map(function(elem,idx){
      return <RightCard kay={idx} id={idx} color={elem.color} img={elem.image} tag={elem.tag}/>
    }) 

    }
      
  

    </div>
  )
}

export default RightContent