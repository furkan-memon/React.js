import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResulteGrid from './components/ResulteGrid'

const App = () => {
  return (
    <div className='h-screen  text-white w-full bg-gray-950'>
    <SearchBar />
    <Tabs />
    <ResulteGrid />
    </div>
  )
}

export default App