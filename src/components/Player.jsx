import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Typography } from "@mui/material";
import Volume from "./Volume";

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
    audio.volume = volume
  }

  const unMute = () =>{
    setVolume(0.7)
    audio.volume = volume
  }

  return (
    <div className="player-container" style={{display:"flex", justifyContent:"center", alignItems:"center" ,position:"fixed", bottom:"0", width:"100vw", height:"110px", bottom:"0px", backgroundColor:"rgba(55, 51, 129, 0.2)", backdropFilter: "blur(15px)", borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}}>
    <div  className="player-title-artist" style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}} >
        <div style={{ height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem"}}>Going Crazy</Typography>
            <Typography style={{color:"#fefefe", fontFamily:"Roboto, sans-serif", fontWeight:"500", fontSize:"1.1rem"}}>Chris Brown</Typography>
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
    <div style={{width:"100%"}} className="player-volume">
            <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
                <div style={{fontSize:"16px", color:"#fefefe", marginRight:"2px", width:"25px"}}>
                    {volume === 0 ? <i onClick={() => unMute()} className="fa-solid fa-volume-xmark"></i> : volume <= 0.6 ? <i onClick={() => mute()}  className="fa-solid fa-volume-low"></i> : volume > 0.6 && <i onClick={() => mute()}  className="fa-solid fa-volume-high"></i>}
                </div>
                <input
                    style={{height:"5px", cursor:"pointer"}}
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume}
                    onChange={e => handleVolume(e)}
                />
            </div>
        </div>
    </div>
  );
};

export default Player;