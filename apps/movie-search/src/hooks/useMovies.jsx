import { useState, useRef, useMemo, useCallback } from 'react'
import { readMoviesByTitle } from '../services/movies'

export function useMovies({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const previousSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await readMoviesByTitle({ search })
      setMovies(newMovies)
    } catch (error) {
      setMovies([])
    } finally {
      setLoading(false)
    }
  }, [])
  
  const sortedMovies = useMemo(() => {
    return sort === 'az'
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])
    
  return { movies: sortedMovies, loading, getMovies }
}
