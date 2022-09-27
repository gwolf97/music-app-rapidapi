import React from 'react';
import {Button} from '@mui/material';
import Navbar from "../components/Navbar.jsx"
import SearchBar from '../components/SearchBar.jsx';
import Discover from './SudoScreens/Discover.jsx';
import Aside from '../components/Aside.jsx';
import { useParams } from 'react-router-dom';
import TopCharts from './SudoScreens/TopCharts.jsx';
import TopArtists from './SudoScreens/TopArtists.jsx';
import SongScreen from './SongScreen.jsx';
import ArtistScreen from './ArtistScreen.jsx';
import SearchScreen from './SearchScreen.jsx';
import Fade from "react-reveal/Fade"
import Player from '../components/Player.jsx';


const MainScreen = ({discover}) => {

    const [navOpen, setNavOpen] = React.useState(false)
    const [variant, setVariant] = React.useState(null)
    const [playerOpen, setPlayerOpen] = React.useState(false)

    React.useEffect(() => {
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


    console.log(playerOpen)


  return (
    <main className="container" style={{height:"100vh"}}>
        <div className="search">
           <div className='menu-btn'><Button onClick={() =>setNavOpen(!navOpen)} style={{height:"100%"}} disableRipple startIcon={(<i style={{fontSize:"22px", color:"#9ca4b0", opacity:"0.6"}} className="fa-solid fa-bars"></i>)}/></div>
           <SearchBar/>
        </div>
        <Fade left>
          <div className={ "navbar"}>
              <Navbar handleClose={handleClose} navOpen={navOpen} variant={variant}/>
          </div>
        </Fade>
        <div id="main" style={{overflow:"scroll"}} className="main">
            {discover && <Discover/>}
            {params.topcharts === ":topcharts" && <TopCharts/>}
            {params.artists === ":topartists" && <TopArtists/>}
            {params.key && <SongScreen /> }
            {params.id && <ArtistScreen /> }
            {params.search && <SearchScreen /> }
        </div>
        <div style={{overflow:"scroll"}} className="aside">
            <Aside playerOpen={playerOpen}/>
        </div>
        <Fade bottom when={!playerOpen}>
          <div onClick={() => setPlayerOpen(true)}  style={{display:"flex", color:"#fefefe", position:"absolute", zIndex:"1", left:"25px", bottom:"8px", fontSize:"22px", alignItems:"center", justifyContent:"center", cursor:"pointer"}}>
            <i style={{ opacity:"0.5"}}  className="fa-solid fa-chevron-up"></i> <p style={{fontSize:"16px", marginLeft:"5px", paddingBottom:"3px",  opacity:"0.5"}}>open</p>
          </div>
        </Fade>
          <Player playerOpen={playerOpen} setPlayerOpen={setPlayerOpen}/>
    </main>
  )
}

export default MainScreen