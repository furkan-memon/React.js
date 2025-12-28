import React from 'react'

const TaskCard = ({Task,Priority,Date}) => {
 
   
          
           
       
  return (
    <div className="bg-white rounded-2xl w-50 py-3 px-4 flex flex-col gap-5">
    
        <div >
            <span className='border-s-5 mt-3 border-black px-2 w-full px-3 py-2 rounded font-semibold bg-slate-200'>{Priority}</span>
        </div>
        <div>
            <p>
               {Task}
            </p>
            <span className='text-[10px] items-end flex justify-end'>
                {Date}
            </span>
        </div>
    </div>
  )
}

export default TaskCard