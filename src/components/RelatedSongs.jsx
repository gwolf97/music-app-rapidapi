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

    const handlePlay = () => {
        console.log("play")
    }

  return (
    <>
    <Typography
    style={{
        fontFamily:"Roboto, sans-serif",
        color:"#fefefe",
        fontWeight:"900",
        fontSize:"28px",
        marginLeft:"30px"
    }}
    >
        Related Songs:
    </Typography>
    {filteredList.map(song => (
    <div key={`${song.key} related`} style={{margin:"0px 0", padding:"0 10px"}}>

    <li className="track-list-item" style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%",}}>
        <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif", fontSize:"16px", padding:"10px 40px"}}>
            <div style={{width:"20px"}}>
                {filteredList.indexOf(song) + 1}
            </div>
            <img style={{width:"75px", marginLeft:"20px", boxShadow: "0px 0px 10px 1px rgba(0,0,0,1)"}} src={song.images.coverart} alt="" />
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
            <div onClick={() => handlePlay} style={{padding:"10px", cursor:"pointer",position:"relative", right:"20px", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
    </li>
</div>
    ))}
    </>
  )
}

export default RelatedSongs