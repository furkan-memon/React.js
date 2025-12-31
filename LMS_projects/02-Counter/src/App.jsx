import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-wrapper">
      <h3 className="title">Quantity</h3>

      <div className="counter-card">
      
      
        <span className="count">{count}</span>
        <div className='flex gap-10'>

  <button
          className="btn minus"
          onClick={() => setCount((c) => c > 0 ? c - 1 : c = 0)}
        >
          −
        </button>

        <button
          className="btn plus"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
        </div>
       
      </div>
    </div>
  )
}

export default App