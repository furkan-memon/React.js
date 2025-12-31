import React from 'react'
import { useState } from 'react'
import Taskinp from './Taskinp'
import Priority from './Priority'
import DateInput from './DateInput'
import Addtaskbtn from './Addtaskbtn'
const Addtask = (props) => {

  const submitform = (e) => {
    e.preventDefault()
   
    if (props.Task == '' || props.Priorityse == '' || props.date == '') {
      alert('fill the input')
    } else {
      props.setSavedTask(prev => [
        ...prev,
        {
          id: Date.now(),
          Task: props.Task,
          Priority: props.Priorityse,
          Date: props.date
        }

      ])

      props.setPriorityse('')
      props.setTask('')
      props.setDate('')
    }
    
  }



  


  return (
    <div className='rounded text-white flex flex-col border-2 border-white py-5 px-5'>
      <form onSubmit={submitform} className='flex flex-col justify-between gap-4'>

        <Taskinp Task={props.Task} setTask={props.setTask} />
        <Priority Priority={props.Priorityse} setPriority={props.setPriorityse} />
        <DateInput date={props.date} setDate={props.setDate} />
        <Addtaskbtn />
      </form>
    </div>
  )
}

export default Addtask
