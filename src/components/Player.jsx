import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/9c/94/0a9c94fa-b331-f24c-5615-c15405b60120/mzaf_11529453508369085869.plus.aac.ep.m4a"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/9c/94/0a9c94fa-b331-f24c-5615-c15405b60120/mzaf_11529453508369085869.plus.aac.ep.m4a");

  return (
    <div style={{position:"absolute", width:"100vw", height:"300px", bottom:"0px"}}>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;