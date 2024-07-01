import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    <Hero/>

    </div>
    
  )
}

export default App
