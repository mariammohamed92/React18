import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function Tv() {
    const[movieapi,setMovieApi]=useState([])

async function TvTrend() {
let {data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(data.results);
setMovieApi(data.results)
}

useEffect(()=>{
    TvTrend()
},[])


  return <>
    <div className="container mt-3 mb-3">
    <div className="row">
      <div className="col-md-4"></div>
<div className="col-md-3 text-center">
  <hr />
  <h1>Trend Tv</h1>
  <hr />
</div>
    </div>
  </div>
  {/* Api Tv */}
<div className="container">
  <div className="row">
  {movieapi.map((item,index)=><div className="col-md-3" key={index}>
    <div className="movie position-relative">
<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 rounded rounded-5 imgMovie' alt=''/>

<h4 className=''>{item.name}</h4>


</div>
</div>
)}
  </div>
</div>

  
  
  </>
}




