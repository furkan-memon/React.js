import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState('')
  const submitform = (e) =>{
  e.preventDefault()
  console.log('Form submitted',Title);
  setTitle("")
  }
  return (
    <div>
      <form onSubmit ={(e) => {
        submitform(e)
        
      }}>
      <input onChange={(e) => {
        console.log(e.target.value);
        setTitle(e.target.value)
        
      }}  value = {Title} type ="text" placeholde ='Type anything' className ="p-1 mt-2 rounded-2xl border-2"/>
      <input type ="submit" value="submit" className ="p-1 mt-2 rounded-2xl border-2" />
      
      </form>
    </div>
  )
}

export default App