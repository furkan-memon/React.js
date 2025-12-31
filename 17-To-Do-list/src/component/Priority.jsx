import React from 'react'

const Priority = (props) => {
   
  return (
    <div>
      <select  onChange = {(e)=>{
        props.setPriority(e.target.value)
      }}   value={props.Priority} className='block bg-white text-black w-full border-gray-200 rounded-lg py-3 pl-3 pr-'>
             
            <option  value=""  disabled>Prioritys</option>
            <option value="Top Priority">Top Priority</option>
            <option  value="Mid Priority">Mid Priority</option>
            <option value="Low Priority">Low Priority</option>
        </select>
    </div>
  )
}

export default Priority
