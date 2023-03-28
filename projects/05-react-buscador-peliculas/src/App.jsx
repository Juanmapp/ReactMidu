import { useState } from 'react'
import responseMovies from './mocks/withResults.json'
import noResults from './mocks/noResults.json'
import './App.css'

function App() {

    const movies = responseMovies.Search
    const hasMovies = movies?.length > 0

  return (
    
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Star Wars, The Matrix, Avengers...'/>
          <button type="submit">Buscar</button>
      </form>
      </header>

      <main>
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title}/>
                  </li>
                ))
              }
            </ul>
          )
          : 
          <p>
            No se encontraron peliculas para esta busqueda
          </p>
        }

      </main>
    </div>
  
  )
}

export default App
