import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setPlayerSong } from '../actions/actions'

const ArtistTopSongs = ({artist}) => {

    const songs = Object.values(artist[1].songs)

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
    <Typography style={{fontFamily:"Roboto, sans-serif",color:"#fefefe",fontWeight:"900",fontSize:"28px",marginLeft:"30px"}}>
              Top Songs:
    </Typography>
    {songs.map(song => (
        <div key={`${song.id} top songs`} className="artist-screen-top-songs-container">
            <li className="track-list-item">
                <div className='artist-screen-track-details'>
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
                    <div onClick={() => handlePlay(song.attributes.artistName, song.attributes.name, song.attributes.previews[0].url)} style={{padding:"10px", cursor:"pointer",position:"relative", right:"20px", backgroundColor:"#fefefe", border:"0px solid black", borderRadius:"50%", width:"28px", height:"28px", display:"flex", justifyContent:"center", alignItems:"center", margin:"0 10px 0 0px"}}><i style={{color:"#000", fontSize:"14px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
            </li>
        </div>
    ))}
    </>
  )
}

export default ArtistTopSongs