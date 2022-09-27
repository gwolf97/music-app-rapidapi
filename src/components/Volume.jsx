import React from 'react'

const Volume = ({handleVolume, mute, unMute, volume}) => {
  
    return (
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
    )
}

export default Volume