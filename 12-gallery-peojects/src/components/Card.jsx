import React from 'react'

const Card = (props) => {
  return (
    <div> <a href={props.elem.url} target="_blank">

 <div className='h-40 text-white w-44 rounded-xl   bg-white'>
  <img className="h-full  w-full object-cover rounded-xl  bg-cover" src={props.elem.download_url} alt="" />
  <h2 className="font-bold">{props.elem.author}</h2>
</div>
</a></div>
  )
}

export default Card