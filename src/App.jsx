import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Homepage {... { todos, setTodos }} />
      </div>
    </div>
  )
}

export default App
