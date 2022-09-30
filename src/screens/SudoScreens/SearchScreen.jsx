import React from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from '../../components/SongCard'
import Fade from "react-reveal/Fade"
import { useParams } from 'react-router-dom'
import { search } from '../../actions/actions'
import Loader from '../../components/Loader'

const SearchScreen = () => {

    const [fadeAmount, setFadeAmount] = React.useState(4)

    const params = useParams() 
    const dispatch = useDispatch()
   
    React.useEffect(() =>{
        const query = params.search
        dispatch(search(query))
    },[dispatch, params])

    const {search: searchResults, loading, success} = useSelector(state => state.search)

    const songs = !loading && success ? searchResults.tracks.hits : []

    const filteredList = songs.filter(song => 
                                        song.track.images.coverart  
                                        && song.track.artists[0] 
                                        && song.track.key 
                                        && song.track.hub.actions 
                                        && song.track.subtitle)
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
        {!loading && success ? (
        <>
            <div className="discover-bg">
            <Fade left>
                    <h3>Results for "{params.search}"</h3>
            </Fade>
            </div>
            <div>
                <Grid container>
                    { firstSongs.map(song => (
                            <Grid key={song.track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                            <Fade bottom>
                                    <SongCard topCharts={false} song={song.track}/>
                            </Fade>
                            </Grid>
                    ))}
                    {remainingSongs.map(song => (
                            <Grid key={song.track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                                    <SongCard topCharts={false} song={song.track}/>
                            </Grid>
                    ))}
                </Grid>
            </div>
        </>
        ) : (<Loader/>)}
    </>
  )
}

export default SearchScreen