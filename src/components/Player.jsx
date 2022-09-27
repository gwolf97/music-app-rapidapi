import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Typography } from "@mui/material";
import Volume from "./Volume";
import useAudio from "./useAudio";

const Player = () => {
  const [playing, toggle, currentTime, songDuration, progressBar, audio] = useAudio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/9c/94/0a9c94fa-b331-f24c-5615-c15405b60120/mzaf_11529453508369085869.plus.aac.ep.m4a");

  const [volume, setVolume] = React.useState(1)

const clickRef = useRef()

  const currentMinutes = Math.floor(currentTime.toFixed(0) / 60)
  const durationMinutes = Math.floor(songDuration.toFixed(0) / 60)

  const currentSeconds = currentTime.toFixed(0) % 60;
  const durationSeconds = songDuration.toFixed(0) % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const divProgress = offset / width * 100
    audio.currentTime = divProgress / 100 * songDuration
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
    <div className="player-container" style={{display:"flex", justifyContent:"center", alignItems:"center" ,position:"fixed", bottom:"0", width:"100vw", bottom:"0px", backgroundColor:"rgba(255, 255, 200, 0.05)", backdropFilter: "blur(12px)", borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}}>
    <div  className="player-title-artist" style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}} >
        <div style={{ height:"100%", width:"90%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography style={{ width:"",textAlign:"center" , color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem",
                  display: "-webkit-box",
                  "WebkitLineClamp": "1",
                   "WebkitBoxOrient": "vertical",
                    overflow:"hidden"}}>Going Crazy </Typography>
            <Typography style={{width:"",textAlign:"center", color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem",
                  display: "-webkit-box",
                  "WebkitLineClamp": "1",
                   "WebkitBoxOrient": "vertical",
                    overflow:"hidden"}}>Chris Brown</Typography>
        </div>
    </div>
    <div className="player-controls" style={{width:"100%", margin:"0 20px 0 0", height:"120px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
      <div style={{backgroundColor:"transparent",color:"#fefefe", cursor:"pointer", fontSize:"35px"}} onClick={toggle}>{playing ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</div>
        <div className="time-scroller" style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-around"}}>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(currentMinutes)}:${padTo2Digits(currentSeconds)}`}</Typography>
            <div onClick={checkWidth} ref={clickRef} style={{width:"100%", margin:"0 10px", height:"5px", backgroundColor:"#fefefe"}}>
                <div style={{height:"5px", backgroundColor:"#0d74f5", width:`${progressBar+"%"}`, display:"flex", justifyContent:"end", alignItems:"center"}}><div style={{height:"15px", borderRadius:"50%", padding:"7px", backgroundColor:"#0d74f5", marginRight:"-10px"}}></div></div> 
            </div>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(durationMinutes)}:${padTo2Digits(durationSeconds)}`}</Typography>
        </div>
    </div>
        <Volume handleVolume={handleVolume} mute={mute} unMute={unMute} volume={volume} />
    </div>
  );
};

export default Player;