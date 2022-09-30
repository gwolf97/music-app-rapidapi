import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SongCard from './SongCard';
import Fade from 'react-reveal/Fade';

const TopFiveCharts = () => {

const topCharts = useSelector(state => state.topCharts.songs)
const topFiveSongs = topCharts.slice(0, 5);

const navigate = useNavigate()

  return (
    <>
        <div className="top-five-discover-title-one">
            <h3>Top Charts</h3>
            <p>
                <Link to={`/topcharts/:topcharts`} className={"see-more"}> 
                    See More 
                </Link>   
            </p>
        </div>
        <Fade right>
            <div className="sm-charts-scroll sm-charts-scroll-one">
                <div className="top-five-cards">
                        {topFiveSongs.map(song => (
                            <div key={`${song.key} this is unique`}>
                                <SongCard topCharts={true} song={song}/>
                            </div>
                        ))}
                </div>
            </div>
        </Fade>
        <div className="top-five-discover-title-two">
            <h3>Top Artists</h3>
            <p>
                <Link to={`/topartists/:topartists`} className={"see-more"}> 
                    See More 
                </Link>   
            </p>
        </div>
        <div className="sm-charts-scroll">
        
            <div className="top-five-artists-avatar-container">
                {topFiveSongs.map(song => (
                    <div key={`${song.key} unique artist`}>
                        <Fade right>
                            <div className="top-five-artists-avatar-title">
                                <Avatar 
                                onClick={() => navigate(`/artist/${song.artists[0].adamid}`)} 
                                sx={{width:"11rem", height:"11rem", cursor:"pointer"}} 
                                src={song.images.background}/>

                                <Typography style={{fontFamily:"Roboto, sans-serif",color:"#fefefe",fontWeight:"700",fontSize:"14px", display:  "-webkit-box","WebkitLineClamp": "1","WebkitBoxOrient": "vertical",overflow:"hidden"}}> 

                                        {song.subtitle}
                                        
                                </Typography>
                            </div>
                        </Fade>
                    </div>
            ))}
            </div>
    </div>
    </>
  )
}

export default TopFiveCharts