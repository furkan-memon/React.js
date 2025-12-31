import React from 'react'
import { useState } from "react";
// import "./counter.css";

const App = () => {





  const [count, setCount] = useState(0);
const pagescroling = () => {
  console.log("hello");
  
}
  return (
    <>
    <div className="counter-wrapper">
      <h3 className="title">Quantity</h3>

      <div className="counter-card">
        <button
          className="btn minus"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
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
      </div>
    </div>
    <div onWheel={pagescroling}>
      

    </div>
    </>
  );
}





export default App