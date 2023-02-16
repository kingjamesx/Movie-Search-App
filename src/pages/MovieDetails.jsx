import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector} from 'react-redux'
const img_path="https://image.tmdb.org/t/p/w500"

const MovieDetails = () => {
    const movie=useSelector((state)=>state.Data.movies.payload)
    const {id}=useParams()
   const singleMovie=movie.find((item)=>item.id==id)
   console.log(singleMovie)
  return (
    <div>
       <section className='movie-details'>
        <div><img src={img_path+singleMovie.poster_path} alt="" /></div>
        <div>
            <h1>Title:{singleMovie.original_title}</h1>
            <p>Description:{singleMovie.overview}</p>
            <p>Release-date:{singleMovie.release_date}</p>
            <p>Rating:{singleMovie.vote_average}</p>
        </div>
       </section>
        <Link to='/'>Go back Home</Link>
    </div>
  )
}

export default MovieDetails