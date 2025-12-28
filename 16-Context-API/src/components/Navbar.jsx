import React from 'react'
import Nav2 from './Nav2'
import {useContext} from 'react'
import Themcontext, { themedata } from '../context/Themcontext'
const Navbar = () => {
const data = useContext(themedata)
console.log(data);
    
  return (
    <div className='flex bg-cyan-900 justify-between py-[20px] px-[40px]'>
       <h2>{data}</h2>
       <Nav2  />
    </div>
  )
}

export default Navbar