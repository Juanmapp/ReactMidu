import responseMovies from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'

export function useMovies() {
    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      tittle: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
    
  return {movies: mappedMovies}
  }