import React from 'react'
import wakanda from '../assets/wakanda.jpg'
import { Link } from 'react-router-dom'
const Card = ({data}) => {
  const img_path="https://image.tmdb.org/t/p/w500"
  return (
           <div className='card'>
               <span>
                <img src={img_path+data.poster_path} alt="image of movie" />
               </span>
               <span>
                <Link to={`/${data.id}`}>{data.original_title}</Link>
                <p>{data.release_date}</p>
               </span>
            </div>
  )
}

export default Card