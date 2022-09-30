import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link, useNavigate} from 'react-router-dom'

const ArtistCard = ({song, topCharts}) => {

const navigate = useNavigate()

const subtitle = song.subtitle
const background = song.images.background
const artistId = song.artists[0].adamid

  return (
  <Card 
    style={topCharts 
      ? {margin:"20px 16px", borderRadius:"10px", backgroundColor:"transparent"}
      : {margin:"20px 0", borderRadius:"10px", backgroundColor:"transparent"}} sx={{ maxWidth: 300, height: 380}
    }>
    <CardActionArea
    onClick={() => navigate(`/artist/${artistId}`)}
    style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <CardMedia
        component="img"
        height="300"
        image={background}
        alt="Cover art"
        className={"opacity"}
      /> 
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
          fontSize:"18px", 
          display:  "-webkit-box",
                    "WebkitLineClamp": "2",
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

export default ArtistCard