import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <form className='form'>

        <input placeholder='Star Wars, The Matrix, Avengers...'/>
        <button>Buscar</button>

      </form>
    
    </div>
  
  )
}

export default App
