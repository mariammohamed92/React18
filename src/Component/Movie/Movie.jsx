import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Movie() {
    const[movieapi,setMovieApi]=useState([])

async function movie() {
let {data}= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(data.results);
setMovieApi(data.results)
}

useEffect(()=>{
    movie()
},[])


  return <>
    <div className="container mt-3 mb-3">
    <div className="row">
      <div className="col-md-4"></div>
<div className="col-md-3 text-center">
  <hr />
  <h1>Trend Movie</h1>
  <hr />
</div>
    </div>
  </div>
  {/* Api Movie */}
<div className="container">
  <div className="row">
  {movieapi.map((item,index)=><div className="col-md-3" key={index}>
  <Link to={`/detailsmovie/${item.id}`} className=' text-decoration-none'>
  <div className=" position-relative">
<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 rounded rounded-5 imgMovie' alt=''/>
<div className="imglayer">
 <div className="imginfo">
<h6>{item.title}</h6>
   </div>
  </div>

<h4 className=''>{item.title}</h4>
{item.vote_average?
        <div className="vote p-2 text-white position-absolute top-0 end-0">
          {item.vote_average?.toFixed(1)}</div>:''}

</div>
</Link>
</div>


)}
  </div>
</div>

  
  
  </>
}





