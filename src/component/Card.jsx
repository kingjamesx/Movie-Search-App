import React from 'react'
import wakanda from '../assets/wakanda.jpg'
import { Link } from 'react-router-dom'
const Card = ({data}) => {
  const img_path="https://image.tmdb.org/t/p/w500"
  return (
           <div className='card'>
             <Link to={`/${data.id}`}>
               <span>
                <img src={img_path+data.poster_path} alt="image of movie" />
               </span>
               <span>
              <p> {data.original_title}</p>
                <p>{data.release_date}</p>
               </span>
               </Link>
            </div>
  )
}

export default Card