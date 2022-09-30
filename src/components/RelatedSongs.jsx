import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRelatedTracks, setPlayerSong } from '../actions/actions'

const RelatedSongs = ({songKey}) => {

    const dispatch = useDispatch()
    const relatedSongs = useSelector(state => state.relatedTracks.songs)
    const filteredList = relatedSongs.filter(song => 
                                    song.images.coverart  
                                    && song.artists[0] 
                                    && song.key 
                                    && song.hub.actions 
                                    && song.subtitle )
    
    //Get songs related to the song being viewed
    React.useEffect(() => {
        dispatch(getRelatedTracks(songKey))
    }, [dispatch, songKey])

    const handlePlay = (artist, title, url) => {
        dispatch(setPlayerSong(
            {
                artist: artist,
                title: title,
                url: url
            }
        ))
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
    <div key={`${song.key} related`} className="related-songs-div">

    <li className="track-list-item" >
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
            <div onClick={() => handlePlay(song.subtitle, song.title, song.hub.actions[1].uri)} style={{padding:"10px", cursor:"pointer",position:"relative", right:"20px", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
    </li>
</div>
    ))}
    </>
  )
}

export default RelatedSongs