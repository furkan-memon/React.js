import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('Dark')
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme} />
    </div>
  )
}

export default App