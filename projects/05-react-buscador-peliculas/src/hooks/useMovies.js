import withResults from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'
import { useState } from 'react'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        tittle: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    const getMovies = () => {
        if (search) {
            setResponseMovies(withResults)
        } else  {
            setResponseMovies(noResults)
        }
    }
    
  return {movies: mappedMovies, getMovies}
}