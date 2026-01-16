import React from 'react'

import Taskinp from './Taskinp'
import Priority from './Priority'
import DateInput from './DateInput'
import Addtaskbtn from './Addtaskbtn'
const Addtask = ({ setSavedTask ,Task,Priorityse,date,setDate,setPriorityse,setTask}) => {
  


  const submitform = (e) => {
    e.preventDefault()
    if (Task == '' || Priorityse == '' || date == '') {
      alert('fill the input')
    } else {
      setSavedTask(prev => [
        ...prev,
        {
          id: Date.now(),
          Task: Task,
          Priority: Priorityse,
          Date: date
        }
      ])
      setPriorityse('')
      setDate('')
      setTask("")
    }
  }


  return (
    <div className='rounded text-white flex flex-col border-2 border-white py-5 px-5'>
      <form onSubmit={submitform} className='flex flex-col justify-between gap-4'>

        <Taskinp Task={Task} setTask={setTask} />
        <Priority Priorityse={Prioritys} setPriorityse={setPrioritys} />
        <DateInput Date={date} setDate={setDate} />
        <Addtaskbtn />

      </form>
    </div>
  )
}

export default Addtask