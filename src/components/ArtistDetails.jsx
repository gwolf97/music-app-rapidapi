import React from 'react'
import { Typography, Avatar } from '@mui/material'

const SongDetails = ({artist}) => {

    const [titleSize, setTitleSize] = React.useState("30px")
    const [avatarSize, setAvatarSize] = React.useState("250px")
    const [margin, setMargin] = React.useState("0 20px 30px 0")


    React.useEffect(() => {
        function handleResize() {
            window.innerWidth <= 500 ? setMargin("20px 16px 30px 0") : setMargin("30px 40px 0 0")
            window.innerWidth < 769 && setTitleSize("25px")
            window.innerWidth >= 769 && setTitleSize("35px")
            window.innerWidth >= 1280 && setTitleSize("45px")
            window.innerWidth < 769 && setAvatarSize("200px")
            window.innerWidth >= 769 && setAvatarSize("250px")
            window.innerWidth >= 1280 && setAvatarSize("300px")
    }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])


  return (
    <>
    <div className="artist-avatar-title-container" >
        <div style={{margin: margin, height:avatarSize, width:avatarSize}}
            className="artist-details-avatar-div"
        >
        <Avatar style={{ width: avatarSize, height: avatarSize, border:"2px solid #FEFEFE", boxShadow: "5px 5px 30px 1px rgba(0,0,0,1)"}} 
            src={artist[0].avatar} 
            alt="" />
        </div>
        <div className='artist-details-title-div'>
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