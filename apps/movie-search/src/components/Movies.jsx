import { IconImage } from './Icons'
import './Movies.css'

export function MovieCard ({ movie }) {
  return (
    <li className='Movie-card'>
      <figure className='Movie-cardPoster'>
        {movie.poster === 'N/A'
          ? <span><IconImage /></span>
          : <img src={movie.poster} alt={movie.title} />}
      </figure>
      <div className='Movie-cardContent'>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <span className={`is-${movie.type.toLowerCase()}`}>{movie.type}</span>
      </div>
    </li>
  )
}

export function ListOfMovies ({ movies }) {
  return (
    <ul className='Movies'>
      {
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      }
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <div className='MoviesEmpty'>
      <p>No se han encontrado resultados para tu búsqueda.</p>
    </div>
  )
}

export function LoaderMovies () {
  return (
    <ul className='MoviesLoader'>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((item) => (
        <li key={item} className='MoviesLoader-item' />
      ))}
    </ul>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />
}
