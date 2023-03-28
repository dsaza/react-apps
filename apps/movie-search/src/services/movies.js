const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = 'https://www.omdbapi.com'

function setApiUrl(parameters = {}) {
  const url = new URL(API_URL)

  url.searchParams.append('apiKey', API_KEY)

  for (const key in parameters) {
    url.searchParams.append(key, parameters[key])
  }

  return url
}

function setMappedMovies(movies) {
  return movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type
  }))
}

export async function readMoviesByTitle({ search }) {
  if (search === '') return []

  try {
    const response = await fetch(setApiUrl({ s: search }))
    const result = await response.json()
    
    const movies = result.Search
    
    if (!movies || !movies?.length > 0) return []

    return setMappedMovies(movies)
  } catch (error) {
    throw new Error('Error on get movies by title')
  }
}