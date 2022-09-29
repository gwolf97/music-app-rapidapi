import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ArtistCard from '../../components/ArtistCard'
import Fade from "react-reveal/Fade"
import {SpinnerDotted} from "spinners-react"

const TopArtists = () => {

    const [fadeAmount, setFadeAmount] = React.useState(4)


    const {songs, loading, success} = useSelector(state => state.topCharts)

    const filteredList = songs.filter(song => song.images)
    
    const firstSongs = filteredList.slice(0, fadeAmount)
    const remainingSongs = filteredList.slice(fadeAmount)

    React.useEffect(() => {
      document.getElementById("main").scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
      function handleResize() {
          window.innerWidth < 900 ? setFadeAmount(2) : setFadeAmount(4)
       }
      handleResize()
      window.addEventListener('resize', handleResize)
    },[])

  return (
    <>
       {!loading && success ? (<>
        <div className="discover-bg">
          <Fade left>
                <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"sans-serif", fontWeight:"700"}}>Top Artists Worldwide</h3>
          </Fade>
        </div>
        <div>
            <Grid container>
                {firstSongs.map(track => (
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
        </>) : (
              <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <SpinnerDotted color={"#fefefe"} size={100}/> 
              </div>
        )}
    </>
  )
}

export default TopArtists