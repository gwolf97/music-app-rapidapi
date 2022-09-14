import React from 'react'
import { Select, MenuItem, Grid } from '@mui/material'
import { getTracksByGenere } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from './SongCard'

const Discover = () => {

    const [selected, setSelected] = React.useState("POP")

    const dispatch = useDispatch()
    const {genreTracks} = useSelector(state => state.genre)

    React.useEffect(() => {
        dispatch(getTracksByGenere(selected))
    }, [selected])

    console.log(genreTracks)

  return (
    <>
        <div className='discover-bg'>
            <h3 style={{ color:"#fefefe", fontSize:"30px", fontFamily:"Robot, sans-serif", fontWeight:"700"}}>Discover</h3>
            <Select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                style={{width:"200px", height:"35px", backgroundColor:"#191624", color:"#fefefe"}}
                defaultValue="POP"
                MenuProps={{style:{ height:"300px"}}}
            >
                <MenuItem value="POP">POP</MenuItem>
                <MenuItem value="HIP_HOP_RAP">HIP_HOP_RAP</MenuItem>
                <MenuItem value="DANCE">DANCE</MenuItem>
                <MenuItem value="ELECTRONIC">ELECTRONIC</MenuItem>
                <MenuItem value="SOUL_RNB">SOUL_RNB</MenuItem>
                <MenuItem value="ALTERNATIVE">ALTERNATIVE</MenuItem>
                <MenuItem value="ROCK">ROCK</MenuItem>
                <MenuItem value="LATIN">LATIN</MenuItem>
                <MenuItem value="FILM_TV">FILM_TV</MenuItem>
                <MenuItem value="COUNTRY">COUNTRY</MenuItem>
                <MenuItem value="AFRO_BEATS">AFRO_BEATS</MenuItem>
                <MenuItem value="WORLDWIDE">WORLDWIDE</MenuItem>
                <MenuItem value="REGGAE_DANCE_HALL">REGGAE_DANCE_HALL</MenuItem>
                <MenuItem value="HOUSE">HOUSE</MenuItem>
                <MenuItem value="K_POP">K_POP</MenuItem>
                <MenuItem value="FRENCH_POP">FRENCH_POP</MenuItem>
                <MenuItem value="SINGER_SONGWRITER">SINGER_SONGWRITER</MenuItem>
                <MenuItem value="REG_MEXICO">REG_MEXICO</MenuItem>

            </Select>
        </div>
        <Grid container>
            {genreTracks.map(track => (
                <Grid style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} item xs={12} md={6}>
                    <SongCard song={track}/>
                </Grid>
            ))}
        </Grid>
    </>
  )
}

export default Discover