import React from 'react'
import { Select, MenuItem, Grid } from '@mui/material'
import { getTopCharts, getTracksByGenere } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from './SongCard'
import TopFiveCharts from './TopFiveCharts'
import Fade from 'react-reveal/Fade';

const TopCharts = () => {

    const {songs, success} = useSelector(state => state.topCharts)

    const filteredList = songs.filter(song => song.images )
    
  return (
    <>
        <div className="discover-bg">
                <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"sans-serif", fontWeight:"700"}}>Top Songs Worldwide</h3>
        </div>
        <div>
            <Grid container>
                {filteredList.map(track => (
                        <Grid key={track.key} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                                <SongCard topCharts={false} song={track}/>
                        </Grid>
                ))}
            </Grid>
        </div>
    </>
  )
}

export default TopCharts