import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { setPlayerSong } from '../actions/actions';
import AsideLoader from './AsideLoader';

const Aside = ({playerOpen}) => {

const topCharts = useSelector(state => state.topCharts.songs)
const {loading, success} = useSelector(state => state.topCharts)
const topFiveSongs = topCharts.slice(0, 5);

const navigate = useNavigate()
const dispatch = useDispatch()

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
    <div className='aside-top-charts-see-more-div' >
        <h3>Top Charts</h3>
        <p>
            <Link to={`/topcharts/:topcharts`} className={"see-more"}> 
                    See More 
            </Link>      
        </p>
    </div>
    
    {!loading && success ? (<>
        <ul className='aside-charts-ul'>
        {topFiveSongs.map(song => (
            <div key={`${song.key} aside`}>
                <Fade right>
                <li className="track-list-item aside-charts-li">
                    <div className='aside-charts-index' >
                        {topFiveSongs.indexOf(song) + 1}
                        <img src={song.images.coverart} alt=""/>
                    </div>
                    <div className='aside-charts-titles'>
                        <Typography style={{ fontFamily:"Roboto, sans-serif", fontWeight:"700", fontSize:"16px",  display: "-webkit-box", "WebkitLineClamp": "1", "WebkitBoxOrient": "vertical", overflow:"hidden"}} >
                                <Link to={`/song/${song.key}`} className={"song-title-link"}> 

                                    {song.title}

                                </Link>        
                        </Typography>
                        <Typography style={{fontFamily:"Roboto, sans-serif",fontWeight:"700",fontSize:"14px", display:  "-webkit-box","WebkitLineClamp": "1","WebkitBoxOrient": "vertical",overflow:"hidden",color:"#fefefe"}} >                            
                                <Link to={`/artist/${song.artists[0].adamid}`} className={"song-title-link"} >

                                    {song.subtitle}

                                </Link>
                        </Typography>
                    </div>
                        <div onClick={() => handlePlay(song.subtitle, song.title, song.hub.actions[1].uri)} 
                             className="aside-play-btn-div">
                            <i className="fa-solid fa-play"></i>
                        </div>
                </li>
                </Fade>
            </div>
        ))}
    </ul>
    <Fade when={!playerOpen}>
        <div className='aside-top-artists-see-more-div' >
            <h3>Top Artists</h3>
            <p>
            <Link to={`/topartists/:topartists`} className={"see-more"}> 
                    See More 
            </Link>   
            </p>
        </div>
    </Fade>
    <div className='sm-charts-scroll sm-charts-scroll-aside'>
        <div className='top-artists-aside-container' >
            {topFiveSongs.map(song => (
                <div  key={`${song.key} aside artist key`}>
                <Fade right when={!playerOpen}>
                        <div onClick={() => navigate(`/artist/${song.artists[0].adamid}`)}  
                             className='top-artists-aside-avatar-title'
                             style={playerOpen ? "" : {zIndex:"1"}}
                             >
                            <Avatar 
                                    sx={{width:"60px", height:"60px"}} 
                                    src={song.images.background}/>

                            <Typography                             
                                style={{fontFamily:"Roboto, sans-serif", color:"#fefefe", fontWeight:"700", fontSize:"12px",  display:  "-webkit-box","WebkitLineClamp": "1","WebkitBoxOrient": "vertical",overflow:"hidden"}}>

                                    {song.subtitle}

                            </Typography>
                        </div>
                </Fade>
                </div>
            ))}
        </div>
    </div>
    </>
    ) : (<AsideLoader/>) }
    </>
  )
}

export default Aside