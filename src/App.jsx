import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'


function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Navbar openAddToDoModel={() => setModalVisible(true)} />
      <div className="main-container">
        <Homepage {... {isModalVisible, setModalVisible, todos, setTodos}}/>

    </div>
    </div>
  )
}

export default App
