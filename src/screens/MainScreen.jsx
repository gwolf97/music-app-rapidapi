import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import Navbar from "../components/Navbar.jsx"
import SearchBar from '../components/SearchBar.jsx';
import DiscoverScreen from './SudoScreens/DiscoverScreen.jsx';
import Aside from '../components/Aside.jsx';
import { useParams } from 'react-router-dom';
import TopChartsScreen from './SudoScreens/TopChartsScreen.jsx';
import TopArtistsScreen from './SudoScreens/TopArtistsScreen.jsx';
import SongScreen from './SudoScreens/SongScreen.jsx';
import ArtistScreen from './SudoScreens/ArtistScreen.jsx';
import SearchScreen from './SudoScreens/SearchScreen.jsx';
import Fade from "react-reveal/Fade"
import Player from '../components/Player.jsx';
import { useSelector } from 'react-redux';


const MainScreen = ({discover}) => {

    const {song} = useSelector(state => state.playerSong)

    const [navOpen, setNavOpen] = useState(false)
    const [variant, setVariant] = useState(null)
    const [playerOpen, setPlayerOpen] = useState(false)

    //Opens player when song is selected

    useEffect(() =>{
      song.url && setPlayerOpen(true)
    },[song.url])

    //Navbar breakpoints

    useEffect(() => {
        function handleResize() {
          window.innerWidth >= 769 ? setNavOpen(true) : setNavOpen(false)
          window.innerWidth >= 769 ? setVariant("permanent")  : setVariant(null)
    }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])

    const params = useParams()

    const  handleClose = () => {
        setNavOpen(false)
    }


  return (
    <main className="container">
        <div className="search">
          <div className='menu-btn'>
            <Button onClick={() =>setNavOpen(!navOpen)} 
            style={{height:"100%"}} 
            disableRipple 
            startIcon={(
                <i style={{fontSize:"22px"}} className="fa-solid fa-bars menu-btn-icon"></i>
                )}/>
          </div>
           <SearchBar/>
        </div>
        <Fade left>
          <div className={ "navbar"}>
              <Navbar handleClose={handleClose} navOpen={navOpen} variant={variant}/>
          </div>
        </Fade>
        <div id="main" className="main">
            {discover && <DiscoverScreen/>}
            {params.topcharts === ":topcharts" && <TopChartsScreen/>}
            {params.artists === ":topartists" && <TopArtistsScreen/>}
            {params.key && <SongScreen /> }
            {params.id && <ArtistScreen /> }
            {params.search && <SearchScreen /> }
        </div>
        <div className="aside">
            <Aside playerOpen={playerOpen}/>
        </div>
        { song.url && (
          <>
            <Fade bottom when={!playerOpen}>
            <div onClick={() => setPlayerOpen(true)} className="open-player-div" >
              <i className="fa-solid fa-chevron-up"></i> 
              <p>open</p>
            </div>
            </Fade>
          </>
        )}
          <Player playerOpen={playerOpen} setPlayerOpen={setPlayerOpen}/>

    </main>
  )
}

export default MainScreen