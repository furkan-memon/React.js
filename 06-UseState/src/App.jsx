import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({user:'Amaan',age:19});
  const onclick = () => {
    // const newuser ={...user};
    // newuser.user="furkan"
setUser(prev=>({...prev,age:28}))
  // console.log(newuser.user);
  

  }

  return (
    <div className="counter-wrapper">
      <h3 className="title">Quantity</h3>
<button onClick={onclick} className="btn minus">{user.age}</button>
      <div className="counter-card">
      
        <button
          className="btn minus"
          onClick={() => setCount((c) => c > 0 ? c - 5 : c = 0)}
        >
          5
        </button>
  <button
          className="btn minus"
          onClick={() => setCount((c) => c > 0 ? c - 1 : c = 0)}
        >
          −
        </button>
        <span className="count">{count}</span>

        <button
          className="btn plus"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
        <button
          className="btn plus"
          onClick={() => setCount((c) => c + 5)}
        >
           5
        </button>
      </div>
    </div>
  )
}

export default App