/**
 * http://usejsdoc.org/
 */
import {useState} from 'react'

export const BuscadorPeliculas=()=>{
	// https://api.themoviedb.org/3/movie/11?api_key=c7833a5f4572fc3b1b0b1b64a4415e67'
	const urlBase="https://api.themoviedb.org/3/search/movie"
	const apiK='c7833a5f4572fc3b1b0b1b64a4415e67'
	const [busqueda,setBusqueda]= useState("")
	const [peliculas,setPeliculas]=useState([])
	
	const fetchPeliculas=async()=>{
		try {
		const response= await fetch(`${urlBase}?query=${busqueda}&api_key=${apiK}`)
		const data= await response.json()
		setPeliculas(data.results)
		} catch (error) {
			setBusqueda("Pelicula encontrada")
		}
	}
	
	const handleInputChange=()=>{
		setBusqueda(event.target.value)
	}
	
	
	const handleSubmit=(event)=>{
		event.preventDefault()
		fetchPeliculas()
	}
	return (
			<>
			<div className="container">
			<h1 className="title">Buscador Peliculas Inicial</h1>
			<form onSubmit={handleSubmit}>
			<input
			type="text"
			placeholder="Ingrese el nombre de una pelicula"
			value={busqueda}
			onChange={handleInputChange} />
			<button type="submit" className="search-button">Buscar</button>
			</form>
			<div className="movie-list">
			{peliculas.map((pelicula) => (
					<div key={pelicula.id} className="movie-card">
					<img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
					<h2>{pelicula.title}</h2>
					<p>{pelicula.overview}</p>
					</div>
			))}
			</div>
			</div>

			
			</>)
}