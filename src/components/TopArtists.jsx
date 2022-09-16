import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ArtistCard from './ArtistCard'


const TopArtists = () => {

    const {songs} = useSelector(state => state.topCharts)

    const filteredList = songs.filter(song => song.images)
    
  return (
    <>
        <div className="discover-bg">
                <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"sans-serif", fontWeight:"700"}}>Top Artists Worldwide</h3>
        </div>
        <div>
            <Grid container>
                {filteredList.map(track => (
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