// MINUTO 00:39

import './App.css'
import { useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'



function App() {

  const { movies} = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    alert(value)
  }

  return (
    
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Star Wars, The Matrix, Avengers...'/>
          <button type="submit">Buscar</button>
      </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  
  )
}

export default App
