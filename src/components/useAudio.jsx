import { useState, useEffect } from "react";
import React from 'react'

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [songDuration, setSongDuration] = useState(0)
    const [progressBar, setProgressBar] = useState(0)
  
    const toggle = () => setPlaying(!playing);

    React.useEffect(() =>{
      
      if(url){
      audio.src = url
      setPlaying(true)
      audio.play()}

     },[url, audio])
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing, audio]
    );
  
    useEffect(() => {
      audio.addEventListener("timeupdate", function () {
          let time = this.currentTime;
          let duration = this.duration
          setCurrentTime(time || 0);
          setSongDuration(duration || 0)
          setProgressBar(time || 0)
        })
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio]);
  
    return [playing, toggle, currentTime, songDuration, progressBar, audio];
  };

export default useAudio