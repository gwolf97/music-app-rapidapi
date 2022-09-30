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
                    <div className='artist-screen-top-tracks-index' >
                        {songs.indexOf(song) + 1}
                    </div>
                <div className="artist-screen-top-tracks-titles">
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
                    <div 
                    onClick={() => handlePlay(song.attributes.artistName, song.attributes.name, song.attributes.previews[0].url)} 
                    className="sm-play-btn-div">
                        <i className="fa-solid fa-play"></i>
                    </div>
            </li>
        </div>
    ))}
    </>
  )
}

export default ArtistTopSongs