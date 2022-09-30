import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import SongCard from '../../components/SongCard'
import Fade from "react-reveal/Fade"
import Loader from '../../components/Loader'


const TopChartsScreen = () => {

    const [fadeAmount, setFadeAmount] = React.useState(4)

    const {songs, loading, success} = useSelector(state => state.topCharts)

    const filteredList = songs.filter(song => 
                                      song.images.coverart  
                                      && song.artists[0] 
                                      && song.key 
                                      && song.hub.actions 
                                      && song.subtitle)
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
                <h3>Top Songs Worldwide</h3>
          </Fade>
        </div>
        <div>
            <Grid container>
                {firstSongs.map(track => (
                        <Grid key={track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                          <Fade bottom>
                                <SongCard topCharts={false} song={track}/>
                          </Fade>
                        </Grid>
                ))}
                {remainingSongs.map(track => (
                        <Grid key={track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                                <SongCard topCharts={false} song={track}/>
                        </Grid>
                ))}
            </Grid>
        </div>
        </>) : (<Loader/>)}
    </>
  )
}

export default TopChartsScreen