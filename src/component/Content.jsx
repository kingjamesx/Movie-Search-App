import {useEffect,useState} from 'react'
import Card from './Card'
const BASE_URL='https://api.themoviedb.org/3'
const api_key="?api_key=7a5986f5cd3d969a4debd0b9a3c8991d"
let url= BASE_URL +'/movie/popular'+api_key
let genreurl=BASE_URL+'/genre/movie/list'+api_key+'&language=en-US'
import { useSelector, useDispatch } from 'react-redux'
import {addMovie  } from '../Redux/features/DataSlice'
const array=[
  'top-rated',"popular","trending","average","bluckbuster"
]
const date=['2023','2022','2021','2020','2019','2018','2017','2016','2015']
const Content = () => {
  const dispatch=useDispatch()
      const getdata=async ()=>{
         const response=await fetch(movie_url)
         const data= await response.json()
         SetmovieData(data.results)
         dispatch(addMovie(data.results))
      }
      const getgenre=async ()=>{
        const response=await fetch(genreurl)
        const data= await response.json()
        Setgenre(data.genres)
     }
      const handleChange=(e)=>{
         Setsearch(e.target.value)
         Setmovie_url(BASE_URL+'/search/movie'+api_key+'&language=en-US&query='+search+'&page=1&include_adult=false')

      }
      const handleGenre=(e)=>{
        const id=e.target.id;
        url=BASE_URL+'/discover/movie'+api_key+'&with_genres='+id
        Setmovie_url(url)
      }
      const handleDate=(e)=>{
        const year=e.target.value;
        url=BASE_URL+'/discover/movie'+api_key+'&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&year='+year+'&with_watch_monetization_types=flatrate'
        Setmovie_url(url)
      }
      const handleSort=(name)=>{
          if(name=='top-rated'){
         url= BASE_URL+"/movie/top_rated"+api_key+'&language=en-US&page=1'
       
          }
          if(name=='popular'){
         url= BASE_URL+"/movie/popular"+api_key+"&language=en-US&page=1"
         
          }
          if(name=='trending'){
         url=BASE_URL+'/discover/movie'+api_key+'&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
            
          }
          if(name=='average'){
        url=BASE_URL+'/discover/movie'+api_key+'&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
          }
          if(name=='bluckbuster'){
            url=BASE_URL+'/discover/movie'+api_key+'&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
          }
          Setmovie_url(url)
      }
    
    const [movieData,SetmovieData]=useState([])
    const [search,Setsearch]=useState('')
    const [movie_url,Setmovie_url]=useState(url)
    const [genre,Setgenre]=useState([])
    useEffect(
        ()=>{
           getdata()
           
        },[movie_url]
    )
    useEffect(
      ()=>{
        getgenre()
      },[]
    )
  return (
    <div className='content'>
        <section className='search-box'>
            <input type="text" onChange={handleChange} placeholder="Search for a movie"/> <button>Search</button>
        </section>
      <section className='tags'>
        <p className='filter-text'>Filter By:</p>
      {array.map(item=><button key={item} onClick={()=>handleSort(item)}>{item}</button>)}
      <section className='filters'>
          <div>
          <label htmlFor="">Genre: </label>
           <select name="" id="select" >
            {genre.map((item)=>{
              return(
                <option key={item.id} id={item.id} onClick={handleGenre}>{item.name}</option>
              )
            })}
           </select>
          </div>
           <div>
           <label htmlFor="">Release Date: </label>
           <select name="" id="select">
            {date.map((item)=>{
              return(
                <option key={item} onClick={handleDate}>{item}</option>
              )
            })}
           </select>
           </div>
        </section>
      </section>
      
        
         <section className='card-container'>
        {movieData.length==0?<p className='no-movie'>No Movie Found</p>: movieData.map((movie)=>{
          return(
            <div key={movie.id} className='grid-item'>
               <Card data={movie}/>
            </div>
            
          )
        })}
         </section>
         <hr />
    </div>
  )
}

export default Content