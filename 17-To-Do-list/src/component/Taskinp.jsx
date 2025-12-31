import React from 'react'

const Taskinp = (props) => {
  return (
    <div>
        <input className ="border-2 border-white py-2 px-2 rounded" onChange={(e)=>
   props.setTask(e.target.value)
        } type="text" value={props.Task}  placeholder='What is your Task'/>
    </div>
  )
}

export default Taskinp