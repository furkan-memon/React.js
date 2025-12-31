import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
 const [a, setA] = useState(0)
  function achaning(){
    console.log('value of a is change ');
    
  }
  useEffect(()=>{
    achaning()
  },[a])
  return (
    <div>
 <h2>{a}</h2>
      <button className =" bg-blue-200 p-3 rounded  " onClick = {
()=>{
   setA(a+1)
}
      }>change</button>
      <div>
        
      </div>
    </div>
  )
}

export default App