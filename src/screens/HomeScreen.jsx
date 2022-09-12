import React from 'react';
import {} from '@mui/material';
import Navbar from "../components/Navbar.jsx"


const HomeScreen = () => {
  return (
    <main className="container" style={{height:"100vh"}}>
        <div class="search">
            Search
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