import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ArtistCard from '../../components/ArtistCard'
import Fade from "react-reveal/Fade"


const TopArtists = () => {

    const {songs} = useSelector(state => state.topCharts)

    const filteredList = songs.filter(song => song.images)
    
    const firstFourSongs = filteredList.slice(0, 4)
    const remainingSongs = filteredList.slice(4)

    React.useEffect(() => {
      document.getElementById("main").scrollTo(0, 0)
    }, [])

  return (
    <>
        <div className="discover-bg">
          <Fade left>
                <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"sans-serif", fontWeight:"700"}}>Top Artists Worldwide</h3>
          </Fade>
        </div>
        <div>
            <Grid container>
                {firstFourSongs.map(track => (
                        <Grid key={track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                          <Fade bottom>
                              <ArtistCard song={track}/>
                          </Fade>
                        </Grid>
                ))}
                {remainingSongs.map(track => (
                        <Grid key={track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                              <ArtistCard song={track}/>
                        </Grid>
                ))}
            </Grid>
        </div>
    </>
  )
}

export default TopArtists