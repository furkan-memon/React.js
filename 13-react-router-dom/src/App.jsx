import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
const App = () => {
  return (
    <div className='bg-black'>
      <div className=' flex items-center justify-between py-[20px] px-[40px] bg-red-400'>
        <h3>Extrack</h3>

        <div className="flex items-center gap-[40px] ">
   <Link to='/'>Home</Link>
   <Link to='/about'>About</Link>
   <Link to='/contact'>Contact</Link>


        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App