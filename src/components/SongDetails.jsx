import React from 'react'
import { Typography, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPlayerSong } from '../actions/actions'


const SongDetails = ({song}) => {

    const [titleSize, setTitleSize] = React.useState("30px")
    const [avatarSize, setAvatarSize] = React.useState("250px")
    const [margin, setMargin] = React.useState("0 20px 30px 0")

    const dispatch = useDispatch()

    React.useEffect(() => {
        function handleResize() {
            window.innerWidth <= 500 ? setMargin("20px 20px 30px 0") : setMargin("0 20px 0px 0")
            window.innerWidth < 769 && setTitleSize("20px")
            window.innerWidth >= 769 && setTitleSize("25px")
            window.innerWidth >= 1280 && setTitleSize("35px")
            window.innerWidth < 769 && setAvatarSize("200px")
            window.innerWidth >= 769 && setAvatarSize("250px")
          window.innerWidth >= 1280 && setAvatarSize("300px")
    }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])

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
    <div className="song-avatar-title-container" >
        <div className='song-screen-avatar-div'
        style={{margin: margin, height:avatarSize, width:avatarSize}}>
            <Avatar style={{ width: avatarSize, height: avatarSize, border:"2px solid #FEFEFE", boxShadow: "5px 5px 30px 1px rgba(0,0,0,1)"}} 
                    src={song.images.coverart} 
                    alt="" />
        </div>
        <div className='song-screen-titles'>
            <Typography style={{ height:"100%", width:"100%", margin:"0px 0 5px 0", fontFamily:"'Roboto', sans-serif", fontWeight:"900", fontSize: titleSize,  display: "-webkit-box", "WebkitLineClamp": "6", "WebkitBoxOrient": "vertical", }}>

                    {song.title}   

            </Typography>
            <Typography style={{height:"100%",fontFamily:"Roboto, sans-serif",fontWeight:"700",fontSize:"1em", display:  "-webkit-box", "WebkitLineClamp": "3", "WebkitBoxOrient": "vertical",}} >

                <Link to={`/artist/${song.artists[0].adamid}`} className={"song-title-link"} >
                    {song.subtitle}
                </Link>

            </Typography>
            <Typography style={{ position:"relative", height:"100%", fontFamily:"Roboto, sans-serif", fontWeight:"400", fontSize:"16px",  width:"150px", display:  "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical",}}>

                {song.genres.primary}

            </Typography>
        </div>
    </div>
    <div className="play-btn-song-screen" 
         onClick={() => handlePlay(song.subtitle, song.title, song.hub.actions[1].uri)} >
            <i className="fa-solid fa-play"></i>
    </div>
</>
  )
}

export default SongDetails