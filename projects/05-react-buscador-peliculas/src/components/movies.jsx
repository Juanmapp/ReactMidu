function ListOfMovies({movies}) {
    return (
        <ul className="movies">
            {
            movies.map(movie => (
                <li className="movie" key={movie.id}>
                <h3>{movie.tittle}</h3>
                <p>{movie.year}</p>
                <img src={movie.image} alt={movie.tittle}/>
                </li>
                ))
            }
        </ul>
        )
    }
            
function NoMoviesResults () {
    return (
        <p>
              No se encontraron peliculas para esta busqueda
            </p>
    )
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0
    return(
        hasMovies 
        ? <ListOfMovies movies={movies}/> 
        : <NoMoviesResults/>
    )
}

