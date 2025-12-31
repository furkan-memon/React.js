import React from 'react'

const DateInput = ({date,setDate}) => {
  

  
  return (
    <div >
        <input  className ="border-2 w-full border-white py-2 px-2 rounded" value={date ?? ""}  onChange={e=> setDate(e.target.value)
        } type="date" />
    </div>
  )
}

export default DateInput
