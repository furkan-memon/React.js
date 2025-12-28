import React from 'react'

import SearchBox from './SearchBox'
import TaskCard from './TaskCard'
import {useState,useEffect} from 'react'
import Addtask from "./Addtask";
const Main = () => {
    // const [obj,setObj] = useState([])
       const [savedTask, setSavedTask] = useState(() => {
      const stored = localStorage.getItem('task')
      return stored ? JSON.parse(stored) : []
    })
 
 useEffect(() => {
    localStorage.setItem('task', JSON.stringify(savedTask))
  }, [savedTask])
  return (
    <div className='py-3 px-10 flex  w-full gap-5  mt-10 '>
        <div className='1/2'>
            <Addtask  setSavedTask={setSavedTask} />
        </div>
        <div className="flex justify-between w-2/3 flex-col">

        <div className="flex justify-between border-bottom border-white border-b-[2px] py-3 px-3 ">
      
        <SearchBox />
        </div>
        
        <div className='mt-4 flex flex-wrap gap-4'>
            {savedTask.map((elem,idx)=>{
            return <TaskCard
            key={idx}
            Task={elem.Task}
             Priority={elem.Priority}
              Date = {elem.Date}/>
                
            })}
        </div>
        </div>
       
    </div>
  )
}

export default Main