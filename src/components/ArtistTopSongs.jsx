import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ArtistTopSongs = ({artist}) => {

    const songs = Object.values(artist[1].songs)

    const handlePlay = () => {
        console.log("play")
    }


  return (
    <>
        <Typography
            style={{
                fontFamily:"Roboto, sans-serif",
                color:"#fefefe",
                fontWeight:"900",
                fontSize:"28px",
                marginLeft:"30px"
            }}
            >
                Top Songs:
         </Typography>
         {songs.map(song => (
    <div key={`${song.id} top songs`} style={{margin:"0px 0", padding:"0 10px"}}>

    <li className="track-list-item" style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%",}}>
        <div style={{width:"100%", display:"flex", justifyContent:"start", alignItems:"center", color:"#fefefe", fontFamily:"sans-serif", fontSize:"16px", padding:"10px 40px"}}>
            <div style={{width:"75px", fontSize:"16px", marginLeft:"-10px"}} >
                {songs.indexOf(song) + 1}
            </div>
        <div style={{width:"20em", marginLeft:"-5px"}}>
            <Typography
                style={{
                fontFamily:"Roboto, sans-serif",
                fontWeight:"700",
                fontSize:"16px", 
                display: "-webkit-box",
                        "WebkitLineClamp": "1",
                        "WebkitBoxOrient": "vertical",
                overflow:"hidden"}}
                >
                    {song.attributes.name}        
            </Typography>
            <Typography 
                style={{
                fontFamily:"Roboto, sans-serif",
                fontWeight:"700",
                fontSize:"14px", 
                display:  "-webkit-box",
                            "WebkitLineClamp": "1",
                            "WebkitBoxOrient": "vertical",
                overflow:"hidden"}} >

                        {song.attributes.artistName}
            </Typography>
        </div>
        </div>
            <div onClick={() => handlePlay} style={{padding:"10px", cursor:"pointer",position:"relative", right:"20px", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
    </li>
</div>
    ))}
    </>
  )
}

export default ArtistTopSongs