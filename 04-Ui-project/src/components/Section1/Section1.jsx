import React from 'react'
import Nabevar from './Navebar.jsx'
import Page1Content from './Page1Content.jsx'
const Section1 = (props) => {
  console.log(props.user);
  
  return (
    <div className='h-screen w-full'>
        <Nabevar />
        <Page1Content user={props.user} />
    </div>
  )
}

export default Section1