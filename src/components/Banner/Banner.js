import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { apikey,imagebaseurl,toprated } from '../../constants/constants'
function Banner() {

  const [movie, setmovie] = useState()
  
  useEffect(() => {
    axios.get(`movie/upcoming?api_key=${apikey}`).then((response)=>{
      var ran=Math.floor(Math.random()*20)
      console.log(response.data.results)
      setmovie(response.data.results[ran])

    })
  }, [])
  
  



  return (
    <div className='banner' style={{backgroundImage:`URL(${movie?imagebaseurl+movie.backdrop_path:""})`}}>
        <div className="content">
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner_buttons'>
            <button>play</button>
            <button>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview:""}</h1>
        


     </div> 
     <div className="fadebottom"></div>
    </div>
  )
}

export default Banner
