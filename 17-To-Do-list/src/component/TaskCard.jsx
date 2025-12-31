import React, { useState } from 'react'
import { EllipsisVertical ,Pen,Trash2} from 'lucide-react'

const TaskCard = ( props) => {
  //  Task, Priority,id, Date,idx,onedit,ondelete
  const [open, setOpen] = useState(false)

  return (
    <div  className="relative bg-white rounded-2xl w-50 py-3 px-4 flex flex-col gap-5">
      
      <div className="flex justify-between items-center">
        <span className="border-s-4 border-black px-3 py-2 rounded font-semibold bg-slate-200">
          {props.Priority}
        </span>

        
        <button onClick={() => setOpen(!open)}>
          <EllipsisVertical />
        </button>
      </div>


      {open && (
        <div className="absolute top-12 right-4 flex  bg-white border rounded-lg shadow-md w-28 z-10">
          <button onClick={()=>{
            props.onedit(props.id)
          console.log(props.id);
          }} className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Pen />
          </button>
          <button
          onClick={(id)=>{
            
           props.ondelete(props.id)
          }} className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
            <Trash2 />
          </button>
        </div>
      )}

      <div>
        <p>{props.Task}</p>
        <span className="text-[10px] flex justify-end">
          {props.Date}
        </span>
      </div>
    </div>
  )
}

export default TaskCard
