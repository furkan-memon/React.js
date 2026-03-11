import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSLice'
const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const subminthenler = (e)=>{
  e.preventDefault()
  dispatch(setQuery(text))
  setText('')
  
    }
  return (
    <div><form onSubmit={(e)=>{
        subminthenler(e)
    }} action="" className='bg-gray-900 flex gap-3 py-10 px-14'>
        <input type="text " value={text} onChange={(e)=>{setText(e.target.value)}} className=' w-full border-2 rounded outline-none px-4 py-2 text-xl' required placeholder='Search Anything' name="" id="" />
         <button className=' cursor-pointer active:scale-95 border-2 rounded outline-none px-4 py-2 text-xl' type='submit'>Search</button>
        </form></div>
  )
}

export default SearchBar