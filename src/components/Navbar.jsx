import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { ListItem, List } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar({handleClose, navOpen, variant}) {

    const params = useParams()



  return (
    <>
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "240px",
            boxSizing: 'border-box',
            backgroundColor:"#191624",
            color:"#9ca4b0"
          },
        }}
        anchor="left"
        variant={variant}
        open={navOpen}
      >
        <Toolbar style={{display:"flex", justifyContent:"end", width:"100%"}}>
            <i onClick={() => handleClose()} style={{cursor:"pointer", fontSize:"20px"}} className="fa-sharp fa-solid fa-x nav-link x"></i>
        </Toolbar>
        <List style={{fontFamily: 'Roboto, sans-serif', fontWeight:"500", fontSize:"20px", lineHeight:"40px", marginLeft:"5px"}}>
            <ListItem>
                <Link to={"/"}  className={"nav-link"} style={Object.keys(params).length === 0 ? {color:"#4bb7d4", cursor:"pointer"} : {cursor:"pointer"}}>
                    <p onClick={() => handleClose()} style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                        <i className="fa-solid fa-house"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Home</span> 
                    </p>
                </Link>
            </ListItem>
            <ListItem>
                <Link to={"/topcharts/:topcharts"}  className={"nav-link"} style={params.topcharts === ":topcharts" ? {color:"#4bb7d4", cursor:"pointer"} : {cursor:"pointer"}}>
                    <p onClick={() => handleClose()}  style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                        <i className="fa-solid fa-globe"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Top Charts</span> 
                    </p>
                </Link>
            </ListItem>
            <ListItem >
                <Link to={"/topartists/:topartists"}   className={"nav-link"} style={params.artists === ":topartists" ? {color:"#4bb7d4", cursor:"pointer"} : {cursor:"pointer"}}>
                    <p onClick={() => handleClose()} style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                        <i className="fa-solid fa-users"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Top Artists</span> 
                    </p>
                </Link>
            </ListItem>
        </List>
      </Drawer>
    </>
  );
}
