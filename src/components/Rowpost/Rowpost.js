import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import {  apikey, imagebaseurl } from '../../constants/constants'
import'./Rowpost.css'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const [store,Setstore]=useState([])
  const [urlid,seturlid]=useState('')
  useEffect(()=>{
    axios.get(props.urls).then((response)=>{
      Setstore(response.data.results)
      console.log(response.data.results)
      
    })

  },[])

  // const handlechange=()=>{
  //   var id=response.data.results.id
  //   console.log(id)
  // }
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handle=(id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
        console.log(response.data)
        if(response.data.results.length!==0){
          seturlid(response.data.results[0])
        }
      })

    }



  return (
    <div className='row'>
      <br />
      <h1>{props.title}</h1>
      
      
         <div className="posters">

      {store.map((value,index)=>(<>
         <img onClick={()=>handle(value.id)} className={props.isSmall?'smallposter':'poster'}  alt="poster" src={`${imagebaseurl+value.backdrop_path}`} />
         {/* <div className='titlediv'><h2 className='nameofmovie'>title</h2>
</div> */}
         </>
      ))}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key}/>}

      
    </div>
  )
}

export default Rowpost
