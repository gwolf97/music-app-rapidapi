import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Aside = () => {

const topCharts = useSelector(state => state.topCharts.songs)
const topFiveSongs = topCharts.slice(0, 5);

const handlePlay = (songPreviewLink) => {
    console.log(songPreviewLink)
}

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"10px 10px 5px 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Charts</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>See More</p>
    </div>
    <div style={{overflow:"scroll", width:"100%", height:"500px"}}>
        {topFiveSongs.map(song => (
            <ul key={`${song.key} aside`}>
                <li style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"100px", width:"100%"}}>
                    <div style={{width:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif"}}>
                        {topFiveSongs.indexOf(song) + 1}
                        <img style={{width:"85px", marginLeft:"12px"}} src={song.images.coverart} alt="" />
                    </div>
                    <div style={{width:"150px"}}>
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
                        <div onClick={handlePlay(song.hub.actions[1].uri)} style={{cursor:"pointer", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
                </li>
            </ul>
        ))}
    </div>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"12px 10px 0 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Artists</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>See More</p>
    </div>
    <div style={{display:"flex", width:"100%", height:"100px"}}>
        {topFiveSongs.map(song => (
            <div style={{display:"flex", flexDirection:"column", width:"60px", alignItems:"center", justifyContent:"center", width:"80px"}}>
                <Avatar sx={{width:"60px", height:"60px"}} src={song.images.background}/>
                <Typography                             
                style={{
                     fontFamily:"Roboto, sans-serif",
                     color:"#fefefe",
                     fontWeight:"700",
                     fontSize:"12px", 
                     display:  "-webkit-box",
                                 "WebkitLineClamp": "1",
                                 "WebkitBoxOrient": "vertical",
                     overflow:"hidden"}}
                     >
                        {song.subtitle}
                </Typography>
            </div>

        ))}
    </div>
    </>
  )
}

export default Aside