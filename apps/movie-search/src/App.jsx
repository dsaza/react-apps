import { useState, useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'

import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { LoaderMovies, Movies } from './components/Movies'
import { IconGithub, IconMovie, IconSearch } from './components/Icons'
import './App.css'

function App() {
	const [sort, setSort] = useState('az')
	const { search, updateSearch, error } = useSearch()
	const { movies, loading, getMovies } = useMovies({ search, sort })

	const debouncedGetMovies = useCallback(
		debounce(search => {
			getMovies({ search })
		}, 500),
		[]
	)

	const handleSumbit = (evt) => {
		evt.preventDefault()
		getMovies({ search })
	}

	const handleChange = (evt) => {
		const newSearch = evt.target.value
		updateSearch(newSearch)
		debouncedGetMovies(newSearch)
	}

	const handleSort = (evt) => {
		setSort(evt.target.value)
	}

	useEffect(() => {
		getMovies({ search })
	}, [])

	return (
		<div>
			<header className='Header'>
				<div className="Header-wrapper">
					<a href='/' className='Header-title' role="heading" title='Buscador de películas OMDb API'>
						<IconMovie />
					</a>
					<div className="Form">
						<div className="Container">
							<form className='Form-wrapper' onSubmit={handleSumbit}>
								<div className={`Form-field ${error ? 'is-invalid' : ''}`}>
									<input
										className='Form-input'
										type='text'
										placeholder='Avengers, Star Wars, The Matrix...'
										value={search}
										autoFocus
										onChange={handleChange}
									/>
									<button className='Form-submit' type='submit'>
										<IconSearch />
									</button>
								</div>
								<select className='Form-sort' onChange={handleSort} value={sort}>
									<option value="az">A-Z</option>
									<option value="za">Z-A</option>
								</select>
								{error && <p className='Form-error'>{error}</p>}
							</form>
						</div>
					</div>
					<div className='Header-github'>
						<a href="https://github.com/dsaza/react-apps/tree/main/apps/movie-search" target='_blank' rel='noopener noreferrer'>
							<IconGithub />
						</a>
					</div>
				</div>
			</header>
			<main>
				<div className='Container'>
					{loading
						? <LoaderMovies />
						: <Movies movies={movies} />
					}
				</div>
			</main>
			<footer className='Footer'>
				<div className="Container">
					<div className="Footer-wrapper">
						<a href="https://github.com/dsaza" target='_blank' rel='noopener noreferrer'>{'@dsaza (Dayron Daza)'}</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
