import { useState } from 'react'
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
