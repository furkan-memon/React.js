import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getdata = async () => {
const res = await axios.get('https://picsum.photos/v2/list')
setData(res.data)
console.log(res.data);

 
  }
  
  return (
    <div>

      <button className =" bg-blue-200 p-3 roundede " onClick = {getdata}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 kay={idx}>{elem.author}</h3>
        }
        )}
      </div>
    </div>
  )
}

export default App