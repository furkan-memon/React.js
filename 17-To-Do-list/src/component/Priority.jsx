import React from 'react'

const Priority = (props) => {
    // const Onchange = () => {
     
    // }
  return (
    <div>
      <select  onChange = {(e)=>{
        props.setPriorityse(e.target.value)
      }}  defaultValue="Prioritys" value={props.Priorityes} className='block bg-white text-black w-full border-gray-200 rounded-lg py-3 pl-3 pr-'>
             
            <option  disabled value="Prioritys">Prioritys</option>
            <option value="Top Priority">Top Priority</option>
            <option  value="Mid Priority">Mid Priority</option>
            <option value="Low Priority">Low Priority</option>
        </select>
    </div>
  )
}

export default Priority
