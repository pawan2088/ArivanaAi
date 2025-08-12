import React from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <div className='pt-50'></div>
      <Header />
    </div>
  )
}

export default App
