import axios from "axios"
import { Typography, Avatar } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"

const SongScreen = () => {

    const [titleSize, setTitleSize] = React.useState("30px")
    const [avatarSize, setAvatarSize] = React.useState("250px")

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[])

    React.useEffect(() => {
        function handleResize() {
            window.innerWidth < 769 && setTitleSize("20px")
            window.innerWidth < 769 && setAvatarSize("200px")
            window.innerWidth >= 769 && setTitleSize("25px")
            window.innerWidth >= 769 && setAvatarSize("250px")
          window.innerWidth >= 1280 && setTitleSize("35px")
          window.innerWidth >= 1280 && setAvatarSize("300px")
    }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])

    console.log(song)

    const handlePlay = () => {
        console.log("play")
    }

  return (
    <div className="song-details-div">
            {!loading && success && (
                <>
                    <div className="song-avatar-title-container" >
                        <Avatar className={"song-details-avatar"} style={{margin:"0 20px 0 0", width: avatarSize, height: avatarSize, border:"2px solid #FEFEFE", boxShadow: "5px 5px 30px 1px rgba(0,0,0,1)"}} src={song.images.coverart} alt="" />
                    <div style={{ width:"100%", display:"flex", flexDirection:"column", justifyContent:"start"}}>
                        <Typography
                            style={{
                            height:"100%",
                            width:"100%",
                            margin:"-10px 0 5px 0",
                            fontFamily:"'Roboto', sans-serif",
                            fontWeight:"900",
                            fontSize: titleSize, 
                            display: "-webkit-box",
                                    "WebkitLineClamp": "4",
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