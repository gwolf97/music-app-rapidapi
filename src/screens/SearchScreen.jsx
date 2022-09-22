import React from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from '../components/SongCard'
import Fade from "react-reveal/Fade"
import { useParams } from 'react-router-dom'
import { search } from '../actions/actions'


const SearchScreen = () => {

    const params = useParams() 
    const dispatch = useDispatch()
   

    React.useEffect(() =>{
        const query = params.search
        dispatch(search(query))
    },[dispatch, params])

    const {search: searchResults, loading, success} = useSelector(state => state.search)

    const songs = !loading && success ? searchResults.tracks.hits : []

    const filteredList = songs.filter(song => song.track.images)

    const firstFourSongs = filteredList.slice(0, 4)
    const remainingSongs = filteredList.slice(4)

    React.useEffect(() => {
      document.getElementById("main").scrollTo(0, 0)
    }, [])
    
  return (
    <>
        {!loading && success && (
        <>
            <div className="discover-bg">
            <Fade left>
                    <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"sans-serif", fontWeight:"700"}}>Results for "{params.search}"</h3>
            </Fade>
            </div>
            <div>
                <Grid container>
                    { firstFourSongs.map(song => (
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
        )}
    </>
  )
}

export default SearchScreen