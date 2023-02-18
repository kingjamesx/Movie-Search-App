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
    <div className='single-movie'>
       <section className='movie-details'>
        <div><img src={img_path+singleMovie.poster_path} alt="" /></div>
        <div>
            <h1 className='movie-details-title'>Title: {singleMovie.original_title}</h1>
            <p className='desc '>Description: {singleMovie.overview}</p>
            <p className='desc'>Release-date: {singleMovie.release_date}</p>
            <p className='desc'>Rating: {singleMovie.vote_average}</p>
        </div>
       </section>
       <div className='moviedetails-btn-box'><Link to='/'> <button>Go back Home</button> </Link></div> 
    </div>
  )
}

export default MovieDetails