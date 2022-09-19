import React from 'react';
import {Button} from '@mui/material';
import Navbar from "../components/Navbar.jsx"
import SearchBar from '../components/SearchBar.jsx';
import Discover from './HomeScreen/Discover.jsx';
import Aside from '../components/Aside.jsx';
import { useParams } from 'react-router-dom';
import TopCharts from './HomeScreen/TopCharts.jsx';
import TopArtists from './HomeScreen/TopArtists.jsx';

const HomeScreen = ({discover}) => {

    const [navOpen, setNavOpen] = React.useState(false)

    React.useEffect(() => {
        function handleResize() {
          window.innerWidth >= 769 && setNavOpen(false)
    }
        window.addEventListener('resize', handleResize)
      },[])

    const params = useParams()

    const  handleClose = () => {
        setNavOpen(false)
    }


  return (
    <main className="container" style={{height:"100vh"}}>
        <div className="search">
           <div className='menu-btn'><Button onClick={() =>setNavOpen(!navOpen)} style={{height:"100%"}} disableRipple startIcon={(<i style={{fontSize:"22px", color:"#9ca4b0", opacity:"0.6"}} className="fa-solid fa-bars"></i>)}/></div>
           <SearchBar/>
        </div>
        <div className={navOpen ? "navbar navbar-open" : "navbar"}>
            <Navbar handleClose={handleClose} navOpen={navOpen}/>
        </div>
        <div id="main" style={{overflow:"scroll"}} className="main">
            {discover && <Discover/>}
            {params.topcharts === ":topcharts" && <TopCharts/>}
            {params.artists === ":topartists" && <TopArtists/>}
        </div>
        <div style={{overflow:"scroll"}} className="aside">
            <Aside/>
        </div>
    </main>
  )
}

export default HomeScreen