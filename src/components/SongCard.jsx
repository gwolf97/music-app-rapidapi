import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPlayerSong } from '../actions/actions'

const SongCard = ({song, topCharts}) => {

const [showPlayButton, setShowPlayButton] = React.useState(false)

const dispatch = useDispatch()

const title = song.title
const subtitle = song.subtitle
const coverart = song.images.coverart
const artistId = song.artists[0].adamid
const songId = song.key
const audioSampleLink = song.hub.actions[1].uri

const handlePlay = () => {
  dispatch(setPlayerSong(
    {
      title: title,
      artist: subtitle,
      url: audioSampleLink
    }
  ))
}



  return (
  <Card 
    style={topCharts 
      ? {margin:"20px 16px", borderRadius:"10px", backgroundColor:"transparent"}
      : {margin:"20px 0", borderRadius:"10px", backgroundColor:"transparent"}} sx={{ maxWidth: 300, height: 380}
    }>
    <CardActionArea
    onClick={handlePlay}
    onMouseEnter={() => setShowPlayButton(true)}
    onMouseLeave={() => setShowPlayButton(false)}
    style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <CardMedia
        component="img"
        height="300"
        image={coverart}
        alt="Cover art"
        className={"opacity"}
      /> 
    {showPlayButton && (
      <>
        <div className="song-card-overlay"></div>
        <div className='song-card-play-btn'>
          <i className="fa-solid fa-play"></i>
        </div>
      </>
    )}
    </CardActionArea>
    <CardContent 
      style={topCharts 
        ? {backgroundColor:"#171320", color:"#fefefe", borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px", height:"80px"} 
        : {backgroundColor:"#4e4482", color:"#fefefe", borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px", height:"100px"}
      }>
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
            <Link to={`/song/${songId}`} className={"song-title-link"}> 
              {title}  
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
          
              <Link to={`/artist/${artistId}`} className={"song-title-link"} >
                {subtitle}
              </Link>
         </Typography>
    </CardContent>
  </Card>
  )
}

export default SongCard