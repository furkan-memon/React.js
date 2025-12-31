import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between '>
        <h2>Extrack</h2>
        <div className='flex gap-8'>
            {/* <a className='text-lg font-bold' href="/">Home</a>
            <a className='text-lg font-bold' href="/About">About</a>
            <a className='text-lg font-bold' href="/product">Product</a> */}
         
     <Link className='text-lg font-bold' to='/'>Home</Link>
   <Link className='text-lg font-bold' to='/about'>About</Link>
   <Link className='text-lg font-bold' to='/courses'>Courses</Link>

   <Link className='text-lg font-bold' to='/product'>Product</Link>

        </div>
    </div>
  )
}

export default Navbar