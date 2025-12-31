import SearchBox from './SearchBox'
import TaskCard from './TaskCard'
import { useState, useEffect } from 'react'
import Addtask from "./Addtask";

const Main = () => {

  const [savedTask, setSavedTask] = useState(() => {
    const stored = localStorage.getItem('task')
    return stored ? JSON.parse(stored) : []
  })
  
  const [Task, setTask] = useState('')
  const [Priorityse, setPriorityse] = useState('')
  const [date, setDate] = useState('')
  const [search, setsearch] = useState('')


  const filteredtask = savedTask.filter((savedTask) =>
    savedTask.Task.toLowerCase().includes(search.toLowerCase())
  );



  const onedit = (id) => {
    const index = savedTask.findIndex(task => task.id === id)
    if (index === -1) return;
    const res = savedTask[index];
    setTask(res.Task || " ")
    setPriorityse(res.Priority || " ")
    setDate(res.Date || " ")

  }

  const ondelete = (id) => {
    const data = savedTask.filter(task => task.id !== id)

    localStorage.setItem('task', JSON.stringify(data))
    setSavedTask(data)
  }
 
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(savedTask))

  }, [savedTask])

  return (
    <div className='py-3 px-10 flex  w-full gap-5  mt-10 '>
      <div className='1/2'>
        <Addtask  setSavedTask={setSavedTask} Priorityse={Priorityse} date={date} Task={Task} setTask={setTask} setPriorityse={setPriorityse} setDate={setDate} />
      </div>
      <div className="flex justify-between w-2/3 flex-col">

        <div className="flex justify-between border-bottom border-white border-b-[2px] py-3 px-3 ">

          <SearchBox  search={search} setsearch={setsearch}/>
        </div>

        <div className='mt-4 flex flex-wrap gap-4'>
          {filteredtask.map((elem, idx) => {
            return <TaskCard
              key={idx}
              id={elem.id}
              Task={elem.Task}
              Priority={elem.Priority}
              Date={elem.Date}
              onedit={onedit}
              ondelete={ondelete}
            />
          })}
        </div>
      </div>

    </div>
  )
}

export default Main
