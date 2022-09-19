import axios from "axios"
import { Typography, Avatar } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[])

    console.log(song)

    const handlePlay = () => {
        console.log("play")
    }

  return (
    <div style={{paddingTop:"160px", display:"flex", justifyContent:"space-between", alignItems:"center", height:"95px", width:"100%", background: "rgb(0,0,0)", background: "linear-gradient(90deg, rgba(0,0,0,0.5060399159663865) 0%, rgba(0,0,0,0.12228641456582634) 90%, rgba(0,0,0,0) 100%)"}}>
            {!loading && success && (
                <>
                    <div style={{ marginLeft:"180px", width:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif"}}>
                        <Avatar style={{margin:"0 20px 0 0", width:"250px", height:"250px", border:"2px solid #FEFEFE", boxShadow: "5px 5px 30px 1px rgba(0,0,0,1)"}} src={song.images.coverart} alt="" />
                    <div style={{width:"500px", display:"flex", flexDirection:"column", justifyContent:"start"}}>
                        <Typography
                            style={{
                            margin:"-10px 0 5px 0",
                            fontFamily:"'Roboto', sans-serif",
                            fontWeight:"900",
                            fontSize:"35px", 
                            display: "-webkit-box",
                                    "WebkitLineClamp": "1",
                                    "WebkitBoxOrient": "vertical",
                            overflow:"hidden"}}
                            >
                                {song.title}   
                        </Typography>
                        <Typography 
                            style={{
                            fontFamily:"Roboto, sans-serif",
                            fontWeight:"700",
                            fontSize:"20px", 
                            display:  "-webkit-box",
                                        "WebkitLineClamp": "1",
                                        "WebkitBoxOrient": "vertical",
                            overflow:"hidden"}} >
                            
                                <Link to={`/artist/${song.artists[0].adamid}`} className={"song-title-link"} >
                                    {song.subtitle}
                                </Link>
                        </Typography>
                        <Typography
                            style={{
                            fontFamily:"Roboto, sans-serif",
                            fontWeight:"400",
                            fontSize:"16px", 
                            width:"150px"
                           }}
                        >
                            {song.genres.primary}
                        </Typography>
                    </div>
                    </div>
                        <div onClick={() => handlePlay(song.hub.actions[1].uri)} style={{cursor:"pointer", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"50px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 50px 0 0px"}}><i style={{color:"#000", fontSize:"30px", marginLeft:"4px"}} className="fa-solid fa-play"></i></div>
                </>
                        )}
                </div>
  )
}

export default SongScreen