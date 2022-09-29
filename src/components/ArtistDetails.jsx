import React from 'react'
import { Typography, Avatar } from '@mui/material'

const SongDetails = ({artist, artistId}) => {

    const [titleSize, setTitleSize] = React.useState("30px")
    const [avatarSize, setAvatarSize] = React.useState("250px")
    const [margin, setMargin] = React.useState("0 20px 30px 0")


    React.useEffect(() => {
        function handleResize() {
            window.innerWidth < 769 && setAvatarSize("200px")
            window.innerWidth <= 500 ? setMargin("10px 20px 30px 0") : setMargin("0 40px 0px 0")
            window.innerWidth >= 769 && setTitleSize("35px")
            window.innerWidth >= 769 && setAvatarSize("250px")
          window.innerWidth >= 1280 ? setTitleSize("45px") : setTitleSize("35px")
          window.innerWidth >= 1280 && setAvatarSize("300px")
    }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])


  return (
    <>
    <div className="artist-avatar-title-container" >
        <div style={{margin: margin, height:avatarSize, width:avatarSize, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Avatar className={"song-details-avatar"} style={{ width: avatarSize, height: avatarSize, border:"2px solid #FEFEFE", boxShadow: "5px 5px 30px 1px rgba(0,0,0,1)"}} src={artist[0].avatar} alt="" />
        </div>
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
            <Typography
                style={{
                height:"100%",
                width:"100%",
                textAlign:"center",
                marginRight:"20px",
                fontFamily:"'Roboto', sans-serif",
                fontWeight:"900",
                fontSize: titleSize, 
                display: "-webkit-box",
                        "WebkitLineClamp": "6",
                        "WebkitBoxOrient": "vertical",
                }}
                >
                    {artist[0].name}
            </Typography>
        </div>
    </div>
</>
  )
}

export default SongDetails