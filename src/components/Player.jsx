import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Volume from "./Volume";
import useAudio from "./useAudio";
import Fade from "react-reveal/Fade"
import { useSelector } from "react-redux";


const Player = ({playerOpen, setPlayerOpen}) => {


  const {title, artist, url} = useSelector(state => state.playerSong.song)
  
  const [playing, toggle, currentTime, songDuration, progressBar, audio] = useAudio(url);

  const [volume, setVolume] = React.useState(1)

  const currentMinutes = Math.floor(currentTime.toFixed(0) / 60)
  const durationMinutes = Math.floor(songDuration.toFixed(0) / 60)

  const currentSeconds = currentTime.toFixed(0) % 60;
  const durationSeconds = songDuration.toFixed(0) % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const checkWidth = (e) => {
    audio.currentTime = e.target.value
  }

  const handleVolume = (e) =>{
    setVolume(e.target.valueAsNumber)
    audio.volume = volume
  }

  const mute = () =>{
    setVolume(0)
    audio.volume = 0
  }

  const unMute = () =>{
    setVolume(0.7)
    audio.volume = 0.7
  }

  return (
    <Fade bottom when={playerOpen}>
    <div className="player-container" style={{display:"flex", justifyContent:"center", alignItems:"center" ,position:"fixed", bottom:"0", width:"100vw", bottom:"0px", backgroundColor:"rgba(255, 255, 200, 0.05)", backdropFilter: "blur(12px)", borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}}>
    <div onClick={() => setPlayerOpen(false)} style={{color:"#fefefe", position:"absolute", left:"25px", top:"8px", opacity:"0.5", fontSize:"22px", cursor:"pointer"}}>
        <Fade when={playerOpen}>
         <i className="fa-solid fa-chevron-down"></i>  
        </Fade>
    </div>
    <div  className="player-title-artist" style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}} >
        <div style={{ height:"100%", width:"90%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography style={{textAlign:"center" , color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem",
                  display: "-webkit-box",
                  "WebkitLineClamp": "1",
                   "WebkitBoxOrient": "vertical",
                    overflow:"hidden"}}>{title}</Typography>
            <Typography style={{width:"",textAlign:"center", color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem",
                  display: "-webkit-box",
                  "WebkitLineClamp": "1",
                   "WebkitBoxOrient": "vertical",
                    overflow:"hidden"}}>{artist}</Typography>
        </div>
    </div>
    <div className="player-controls" style={{width:"100%", margin:"0 20px 0 0", height:"120px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
      <div style={{backgroundColor:"transparent",color:"#fefefe", cursor:"pointer", fontSize:"35px"}} onClick={toggle}>{playing ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</div>
        <div className="time-scroller" style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-around"}}>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(currentMinutes)}:${padTo2Digits(currentSeconds)}`}</Typography>
            <input
                style={{height:"5px",width:"100%", cursor:"pointer", margin:"0 6px"}}
                type="range"
                min={0}
                max={songDuration}
                step={0.2}
                value={progressBar}
                onChange={e => checkWidth(e)}
            />
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(durationMinutes)}:${padTo2Digits(durationSeconds)}`}</Typography>
        </div>
    </div>
        <Volume handleVolume={handleVolume} mute={mute} unMute={unMute} volume={volume} />
    </div>
    </Fade>
  );
};

export default Player;