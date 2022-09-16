import React from 'react';
import {Button} from '@mui/material';
import Navbar from "../components/Navbar.jsx"
import SearchBar from '../components/SearchBar.jsx';
import Discover from '../components/Discover.jsx';
import Aside from '../components/Aside.jsx';
import { useParams } from 'react-router-dom';
import TopCharts from '../components/TopCharts.jsx';
import TopArtists from '../components/TopArtists.jsx';

const HomeScreen = ({discover}) => {

    const params = useParams()

  return (
    <main className="container" style={{height:"100vh"}}>
        <div className="search">
           <div className='menu-btn'><Button style={{height:"100%"}} disableRipple startIcon={(<i style={{fontSize:"22px", color:"#9ca4b0", opacity:"0.6"}} className="fa-solid fa-bars"></i>)}/></div>
           <SearchBar/>
        </div>
        <div className="navbar">
            <Navbar/>
        </div>
        <div style={{overflow:"scroll"}} className="main">
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