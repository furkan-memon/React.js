import React from 'react'

const SearchBox = (props) => {
  return (
    <div>
        <input onChange={(e)=>
   props.setsearch(e.target.value)}  value={props.search} className='border-1 py-1 px-3 border-white text-white  rounded ' type="text" placeholder ='Search Task' />
    </div>
  )
}

export default SearchBox
