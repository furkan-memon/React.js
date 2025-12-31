import React from 'react'

const DateInput = (props) => {
  return (
    <div >
        <input className ="border-2 w-full border-white py-2 px-2 rounded" onChange={(e)=>
  props.setDate(e.target.value)
        } type="date" value={props.date}  placeholder='What is your Task'/>
    </div>
  )
}

export default DateInput