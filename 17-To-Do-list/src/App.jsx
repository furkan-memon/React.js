import React from 'react'
import Main from './component/Main'
import { Routes,Route} from 'react-router-dom'
import Addtask from './component/Addtask'

const App = () => {
  return (
    <div className='flex items-center justify-center flex-col '>
      <h1 className ='uppercase font-bold text-5xl text-white'>To Do List</h1>
      
      
      
       
        <Main />
                  
              
    </div>
  )
}

export default App