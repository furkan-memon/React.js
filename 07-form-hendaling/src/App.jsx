import React from 'react'

const App = () => {
  const submitform = (e) =>{
  e.preventDefault()
  console.log('Form submitted');
  
  }
  return (
    <div>
      <form onSubmit ={(e) => {
        submitform(e)
      }}>
      <input type ="text" placeholde ='Type anything' className ="p-1 mt-2 rounded-2xl border-2"/>
      <input type ="submit" value="submit" className ="p-1 mt-2 rounded-2xl border-2" />
      
      </form>
    </div>
  )
}

export default App