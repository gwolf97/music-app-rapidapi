import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link, Button} from 'react-router-dom'

const SongCard = ({song}) => {

const [showPlayButton, setShowPlayButton] = React.useState(false)

const title = song.title
const subtitle = song.subtitle
const coverart = song.images.coverart
const artistId = song.artists[0].adamid
const songId = song.key
const audioSampleLink = song.hub.actions[1].uri

const handlePlay = () => {
  console.log(audioSampleLink)
}

  return (
  <Card 
    style={{margin:"20px 0", borderRadius:"10px", backgroundColor:"transparent"}} sx={{ maxWidth: 300, height: 380}}
  >
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
        <div style={{height:"300px", width:"300px", backgroundColor:"black", opacity:"0.5", cursor:"pointer", position:"absolute"}}></div>
        <div style={{position:"absolute", cursor:"pointer", backgroundColor:"#fefefe", opacity:"0.7", border:"0px solid black", borderRadius:"50%", width:"40px", height:"40px", display:"flex", justifyContent:"center", alignItems:"center"}}><i style={{color:"#000", fontSize:"18px", marginLeft:"2px"}} className="fa-solid fa-play"></i></div>
      </>
    )}
    </CardActionArea>
    <CardContent 
      style={{backgroundColor:"#4e4482", color:"#fefefe", borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px", height:"100px"}}
    >
        <Typography
          style={{
          fontFamily:"Roboto, sans-serif",
          fontWeight:"700",
          fontSize:"16px", 
          display: "-webkit-box",
                  "-webkit-line-clamp": "1",
                   "-webkit-box-orient": "vertical",
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
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
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