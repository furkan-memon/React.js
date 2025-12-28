import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home' 
import About from './Pages/About'
import Product from './Pages/Product'
import Not from './Pages/Not'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CorsesDitels from './Pages/CorsesDitels'
import { useNavigate } from 'react-router-dom';

const App = () => {
  let neviget = useNavigate()
  const btnClick = () =>{
  neviget('/')
    }
      return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <button onClick={btnClick} className =' px-2 m-4 rounded bg-sky-950 text-white active:scale-98 cursor-pointer py-2'> Return To Home Page</button>
       <button onClick={()=>{
        neviget(-1)
       }} className =' px-2 m-4 rounded bg-sky-950 text-white active:scale-98 cursor-pointer py-2'> Back</button>
       <button onClick={()=>{
        neviget(+1)
       }} className =' px-2 m-4 rounded bg-sky-950 text-white active:scale-98 cursor-pointer py-2'> Next</button>
       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CorsesDitels />} />

        <Route path='/product' element={<Product />} >
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route>

   <Route path= '*'element={<Not />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App