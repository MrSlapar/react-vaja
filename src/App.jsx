import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'


function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Homepage />
      </div>
    </div>
  )
}

export default App
