import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Typography } from "@mui/material";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0)
  const [songDuration, setSongDuration] = useState(0)
  const [progressBar, setProgressBar] = useState(0)

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener("timeupdate", function () {
        let time = this.currentTime;
        let duration = this.duration
        setCurrentTime(time);
        setSongDuration(duration)
        setProgressBar(time / duration * 100)
      })
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, currentTime, songDuration, progressBar, audio];
};

const Player = () => {
  const [playing, toggle, currentTime, songDuration, progressBar, audio] = useAudio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/9c/94/0a9c94fa-b331-f24c-5615-c15405b60120/mzaf_11529453508369085869.plus.aac.ep.m4a");

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

  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" ,position:"fixed", bottom:"0", width:"100vw", height:"120px", bottom:"0px", backgroundColor:"rgba(255, 255, 255, 0.2)", backdropFilter: "blur(8px)", borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}}>
    <div style={{display:"flex"}}>
        <i style={{fontSize:"50px", margin:"0px 5px 0 30px", color:"#171320"}} className="fa-solid fa-volume"></i>
        <div className="player-title-artist" style={{ height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start"}}>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"700", fontSize:"1.1rem"}}>Going Crazy</Typography>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"700", fontSize:"1.1rem"}}>Chris Brown</Typography>
        </div>
    </div>
    <div className="controls" style={{margin:"0 20px 0 0", height:"120px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
      <div style={{backgroundColor:"transparent",color:"#fefefe", cursor:"pointer", fontSize:"35px"}} onClick={toggle}>{playing ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</div>
        <div className="time-scroller" style={{display:"flex", width:"200px", alignItems:"center", justifyContent:"space-around"}}>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(currentMinutes)}:${padTo2Digits(currentSeconds)}`}</Typography>
            <div onClick={checkWidth} ref={clickRef} style={{width:"100%", margin:"0 10px", height:"5px", backgroundColor:"#fefefe"}}>
                <div style={{height:"5px", backgroundColor:"#0d74f5", width:`${progressBar+"%"}`, display:"flex", justifyContent:"end", alignItems:"center"}}><div style={{height:"15px", borderRadius:"50%", width:"15px", backgroundColor:"#0d74f5", marginRight:"-10px"}}></div></div> 
            </div>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"900", fontSize:"1rem"}}>{`${padTo2Digits(durationMinutes)}:${padTo2Digits(durationSeconds)}`}</Typography>
        </div>
    </div>
    </div>
  );
};

export default Player;