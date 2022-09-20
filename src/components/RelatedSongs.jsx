import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRelatedTracks } from '../actions/actions'

const RelatedSongs = ({songKey}) => {

    const dispatch = useDispatch()
    const relatedSongs = useSelector(state => state.relatedTracks.songs)

    const filteredList = relatedSongs.filter(song => song.images)

    React.useEffect(() => {
        dispatch(getRelatedTracks(songKey))
    }, [])

    console.log(relatedSongs)

    const handlePlay = () => {
        console.log("play")
    }

  return (
    <>
    <Typography
    style={{
        fontFamily:"Roboto, sans-serif",
        color:"#fefefe",
        fontWeight:"700",
        fontSize:"25px",
        marginLeft:"30px"
    }}
    >
        Related Songs:
    </Typography>
    {filteredList.map(song => (
    <div key={`${song.key} related`} style={{margin:"10px 0"}}>

    <li style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%",}}>
        <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif", fontSize:"16px", padding:"0 20px"}}>
            {filteredList.indexOf(song) + 1}
            <img style={{width:"85px", marginLeft:"12px"}} src={song.images.coverart} alt="" />
        <div style={{width:"20em", marginLeft:"10px"}}>
            <Typography
                style={{
                fontFamily:"Roboto, sans-serif",
                fontWeight:"700",
                fontSize:"16px", 
                display: "-webkit-box",
                        "WebkitLineClamp": "1",
                        "WebkitBoxOrient": "vertical",
                overflow:"hidden"}}
                >
                    <Link to={`/song/${song.key}`} className={"song-title-link"}> 
                    {song.title}  
                    </Link>        
            </Typography>
            <Typography 
                style={{
                fontFamily:"Roboto, sans-serif",
                fontWeight:"700",
                fontSize:"14px", 
                display:  "-webkit-box",
                            "WebkitLineClamp": "1",
                            "WebkitBoxOrient": "vertical",
                overflow:"hidden"}} >
                
                    <Link to={`/artist/${song.artists[0].adamid}`} className={"song-title-link"} >
                        {song.subtitle}
                    </Link>
            </Typography>
        </div>
        </div>
            <div onClick={handlePlay(song.hub.actions[1].uri)} style={{padding:"10px", cursor:"pointer",position:"relative", right:"20px", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
    </li>
</div>
    ))}
    </>
  )
}

export default RelatedSongs