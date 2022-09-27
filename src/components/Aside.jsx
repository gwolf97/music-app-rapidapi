import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Aside = ({playerOpen}) => {

const topCharts = useSelector(state => state.topCharts.songs)
const {loading, success} = useSelector(state => state.topCharts)
const topFiveSongs = topCharts.slice(0, 5);

const array = [1,2,3,4,5]

const handlePlay = (songPreviewLink) => {
   
}

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"10px 10px 5px 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Charts</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>
        <Link to={`/toptracks`} className={"see-more"}> 
                See More 
        </Link>      
        </p>
    </div>
    
    {!loading && success ? (<>
        <ul style={playerOpen ? {overflow:"scroll", width:"100%", height:"380px"} : {overflow:"scroll", width:"100%", height:"480px"}  }>
        {topFiveSongs.map(song => (
            <div key={`${song.key} aside`}>
                <Fade right>
                <li className="track-list-item"  style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%"}}>
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
                            overflow:"hidden",
                            color:"#fefefe"
                            }} >
                            
                                <Link to={`/artist/${song.artists[0].adamid}`} className={"song-title-link"} >
                                    {song.subtitle}
                                </Link>
                        </Typography>
                    </div>
                        <div onClick={handlePlay(song.hub.actions[1].uri)} style={{cursor:"pointer", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
                </li>
                </Fade>
            </div>
        ))}
    </ul>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"12px 10px 0 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Artists</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>
        <Link to={`/topartists`} className={"see-more"}> 
                See More 
        </Link>   
        </p>
    </div>
    <div style={{paddingTop:"5px"}} className='sm-charts-scroll'>
        <div style={{display:"flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", paddingLeft:"60px"}}>
            {topFiveSongs.map(song => (
                <div key={`${song.key} aside artist key`}>
                <Fade right>
                <div style={{display:"flex", flexDirection:"column", width:"60px", alignItems:"center", justifyContent:"center", width:"80px"}}>
                    <Avatar sx={{width:"60px", height:"60px", cursor:"pointer"}} src={song.images.background}/>
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
                </Fade>
                </div>
            ))}
        </div>
    </div>
    </>
    ) : (
        <>
            {array.map(key =>(
                <li key={key} className="track-list-item"  style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%"}}>
                <div style={{width:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif"}}>
                    <div style={{width:"85px", height:"85px", marginLeft:"12px", backgroundColor:"#4c426e"}}></div>
                </div>
                <div style={{width:"100%"}}>
                    <div style={{width:"70%", height:"5px", borderRadius:"20px", backgroundColor:"#4c426e", marginLeft:"10px"}}></div>
                    <div style={{width:"50%", height:"5px", borderRadius:"20px", backgroundColor:"#4c426e", margin:"10px 0 0 10px"}}></div>
                    <div></div>
                </div>
            </li>
            ))}
        </>
    ) }
    </>
  )
}

export default Aside