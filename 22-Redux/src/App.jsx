import React from 'react'
import { increment,decrement } from './redux/features/createSlice';
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
   
  const count = useSelector((state)=>  state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
    dispatch(increment())
      }}>
        INCREMENT
      </button>
        <button onClick={()=>{
    dispatch(decrement())
        
      }}>
        DICREMENT
      </button>
    </div>
  )
}

export default App