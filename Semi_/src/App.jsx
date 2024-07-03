import { useState } from 'react'

// import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <About></About>
    

    </div>
    
  )
}

export default App
