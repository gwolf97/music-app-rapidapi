import React from 'react';
import {Button} from '@mui/material';
import Navbar from "../components/Navbar.jsx"
import SearchBar from '../components/SearchBar.jsx';

const HomeScreen = () => {
  return (
    <main className="container" style={{height:"100vh"}}>
        <div className="search">
           <Button disableRipple startIcon={(<i style={{fontSize:"22px", color:"#9ca4b0", opacity:"0.6"}} className="fa-solid fa-bars"></i>)}/><SearchBar/>
        </div>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            Main
        </div>
        <div className="aside">
            aside
        </div>
    </main>
  )
}

export default HomeScreen