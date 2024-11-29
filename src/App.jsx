import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './app.css'
import About from './Components/About'
import Service from './Components/Service'
import Work from './Components/Work'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-black'>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App

