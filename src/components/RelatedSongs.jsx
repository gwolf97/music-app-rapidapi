import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRelatedTracks, setPlayerSong } from '../actions/actions'

const RelatedSongs = ({songKey}) => {

    const dispatch = useDispatch()
    const relatedSongs = useSelector(state => state.relatedTracks.songs)

    const filteredList = relatedSongs.filter(song => Object.keys(song).length === 12)
    
    React.useEffect(() => {
        dispatch(getRelatedTracks(songKey))
    }, [dispatch, songKey])

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
    <Typography
    style={{
        fontFamily:"Roboto, sans-serif",
        color:"#fefefe",
        fontWeight:"900",
        fontSize:"28px",
        marginLeft:"30px"
    }}
    >
        Related Songs:
    </Typography>
    {filteredList.map(song => (
    <div key={`${song.key} related`} className="related-songs-div">

    <li className="track-list-item" >
        <div className="related-songs-track-details">
            <div className="related-songs-index">
                {filteredList.indexOf(song) + 1}
            </div>
            <img src={song.images.coverart} alt="" />
        <div className='related-songs-titles'>
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
                    <Link to={`/song/${song.key}`} className={"song-title-link"}> 
                    {song.title}  
                    </Link>        
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
                
                    <div className={"song-title-link artist"} >
                        {song.subtitle}
                    </div>
            </Typography>
        </div>
        </div>
            <div 
            onClick={() => handlePlay(song.subtitle, song.title, song.hub.actions[1].uri)} 
            className="sm-play-btn-div">
                <i className="fa-solid fa-play"></i>
            </div>
    </li>
</div>
    ))}
    </>
  )
}

export default RelatedSongs