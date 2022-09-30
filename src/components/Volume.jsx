import React from 'react'

const Volume = ({handleVolume, mute, unMute, volume}) => {
  
    return (
    <div className="player-volume">
        <div className="player-volume-child-div" >
            <div className="volume-icon-div">
                {volume === 0 
                ? <i onClick={() => unMute()} className="fa-solid fa-volume-xmark"></i> 
                : volume <= 0.6 ? <i onClick={() => mute()}  className="fa-solid fa-volume-low"></i> 
                : volume > 0.6 && <i onClick={() => mute()}  className="fa-solid fa-volume-high"></i>}
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
    )
}

export default Volume