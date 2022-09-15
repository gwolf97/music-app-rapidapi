import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SongCard from './SongCard';


const TopFiveCharts = () => {

const topCharts = useSelector(state => state.topCharts.songs)
const topFiveSongs = topCharts.slice(0, 5);

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
        <div className="sm-charts-scroll">
            <div style={{display:"flex", flexDirection:"row", overflow:"scroll", width:"105rem"}}>
                    {topFiveSongs.map(song => (
                        <SongCard topCharts={true} song={song}/>
                    ))}
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"12px 10px 0 10px"}}>
            <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Artists</h3>
            <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>
                <Link to={`/topartists`} className={"see-more"}> 
                    See More 
                </Link>   
            </p>
        </div>
        <div style={{height:"250px"}} className="sm-charts-scroll">
        <div style={{display:"flex", width:"50rem", height:"250px", justifyContent:"space-between", alignItems:"start", paddingTop:"20px", paddingLeft:"60px"}}>
            {topFiveSongs.map(song => (
                <div style={{display:"flex", flexDirection:"column", width:"100px", alignItems:"center", justifyContent:"center", width:"80px", marginRight:"130px"}}>
                    <Avatar sx={{width:"11rem", height:"11rem"}} src={song.images.background}/>
                    <Typography                             
                    style={{
                        fontFamily:"Roboto, sans-serif",
                        color:"#fefefe",
                        fontWeight:"700",
                        fontSize:"14px", 
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
    </div>
    </>
  )
}

export default TopFiveCharts