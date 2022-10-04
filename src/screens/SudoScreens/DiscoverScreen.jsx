import React from 'react'
import {Grid } from '@mui/material'
import { getTracksByGenere } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import SongCard from '../../components/SongCard'
import TopFiveCharts from '../../components/TopFiveCharts'
import Fade from 'react-reveal/Fade';
import SelectGenre from '../../components/SelectGenre'
import Loader from '../../components/Loader'


const DiscoverScreen = () => {

    const [selected, setSelected] = React.useState("POP")
    const [fadeAmount, setFadeAmount] = React.useState(4)

    const dispatch = useDispatch()
    const {genreTracks, loading, success} = useSelector(state => state.genre)

    React.useEffect(() => {
     dispatch(getTracksByGenere(selected))
    }, [ dispatch, selected])


    React.useEffect(() => {
        document.getElementById("main").scrollTo(0, 0)
      }, [])

    React.useEffect(() => {
        function handleResize() {
            window.innerWidth < 1280 ? setFadeAmount(0) : setFadeAmount(4)
         }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])

    
    const filteredList = genreTracks.filter(song => 
                                            song.images.coverart  
                                            && song.artists[0] 
                                            && song.key 
                                            && song.hub.actions 
                                            && song.subtitle )
    const firstSongs = filteredList.slice(0, fadeAmount)
    const remainingSongs = filteredList.slice(fadeAmount)


    const handleSelectedGenere = (selection) =>{
        setSelected(selection)
    }

  return (
    <>
        {!loading && success ? (
        <div>
            <div className='top-five-container'>
                <TopFiveCharts/>
            </div>
            <div className='discover-bg'>
                <h3>Discover</h3>
                <SelectGenre 
                    selected={selected} 
                    handleSelectedGenere={handleSelectedGenere}/>
            </div>
            <div>
                <Grid container>
                    {firstSongs.map(track => (
                            <Grid 
                            key={track.key} 
                            style={{display:"flex",
                                    flexDirection:"column", 
                                    justifyContent:"center", 
                                    alignItems:"center"}} 
                            item xs={12} 
                            md={6}>
                                <Fade bottom>
                                    <SongCard topCharts={false} song={track}/>
                                </Fade>
                            </Grid>
                    ))}
                    {remainingSongs.map(track => (
                            <Grid 
                            key={track.key} 
                            style={{display:"flex", 
                                    flexDirection:"column", 
                                    justifyContent:"center", 
                                    alignItems:"center"}} 
                            item xs={12} 
                            md={6}>
                                    <SongCard topCharts={false} song={track}/>
                            </Grid>
                    ))}
                </Grid>
            </div>
        </div>) 
        : ( <Loader/> )}
            
    </>
  )
}

export default DiscoverScreen