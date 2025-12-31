import React, { useState } from 'react'
import { X } from 'lucide-react';
//  const onChange  = ()
const App = () => {
  const [Title, setTitle] = useState('')
  const [Notes, setNotes] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
  e.preventDefault()
  const copytask =[...task]
  if(Title == '' || Notes == '') {

alert("please fill the nots") 
}else{

  copytask.push({Title,Notes})
  setTask(copytask)
  console.log(task);
  setTitle('')
  setNotes('')
}
  
  }
  const deletenote = (idx) =>{
     const copytask =[...task]
    copytask.splice(idx,1)
    setTask(copytask)
    
  }

  
 
  return (
    <div className=' h-screen lg:flex bg-black text-white '>
      <form onSubmit = {(e)=>{
        submitHandler(e)
       
        
      }} className ="flex lg:w-1/2  items-start flex-col   gap-5  p-10">

        <h1 className=' text-3xl font-bold'>
        Add Notes
      </h1>
        <input value ={Title} onChange = {(e)=>{
          setTitle(e.target.value)
        }} type="text" placeholder='Enter Notes Title' className='px-5 w-full font-medium py-2 border-2 rounded '/>
        <textarea type='text' value={Notes} onChange ={(e)=>
          {
  setNotes(e.target.value)
          }
        } placeholder='Enter Notes ' className='px-5 h-32 py-2 font-medium w-full border-2 rounded '>

        </textarea>

      <button 
        
       className="bg-white  active:scale-98 text-black font-medium w-full px-5 py-2 rounded">Add Notes</button>

 
      </form>
      <div className=' lg:w-1/2  lg:border-l  flex-wrap p-10  '>
      <h1 className=' text-3xl font-bold'>
        Your Notes
      </h1>
      <div id="scrol" className='flex flex-wrap gap-5 h-[90%] mt-5 overflow-auto '>
   {task.map(function(elem,idx){
      return <div kay={idx}
      //  onClick={()=>{
      //   setTitle(elem.Title)
      //   setNotes(elem.Notes)
      // }} 
      className ='h-52 w-40 flex justify-between flex-col  text-black relative rounded-2xl py-8 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
   <div>
  <h2 className="font-bold text-2xl" >{elem.Title}</h2>
  <p className="mt-4 leading-tight font-medium text-gray-500">{elem.Notes}</p>
</div>

<button onClick = {(idx)=>{
  deletenote(idx)
}}  className= " cursor-pointer active:scale-98  bg-red-500 py-1 px-1 rounded font-bold text-white" >Delete</button>


      </div>

    
   })}
      
        

      </div>

      </div>
    </div>
  )
}

export default App